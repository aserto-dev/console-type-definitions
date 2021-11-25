#!/bin/bash
source downloaded/commit_hash.sh

for REQUIRED_ENV in "USERNAME" "READ_WRITE_TOKEN" "COMMIT_HASH"
do
    if [[ -z "${!REQUIRED_ENV}" ]]; then
    echo "$REQUIRED_ENV must be set"
    FAIL=1
    fi
done

if [[ -n "${FAIL}" ]]; then
    exit $FAIL
fi

rm downloaded/*.openapi.json

for SERVICE in "tenant" "authorizer" "registry"
do
    OUTPUT_PATH=downloaded/${SERVICE}.openapi.json
    curl \
        -o ${OUTPUT_PATH} -u "${USERNAME}:${READ_WRITE_TOKEN}" \
        -H "Accept: application/vnd.github.v3.raw" \
        https://api.github.com/repos/aserto-dev/openapi-grpc/contents/publish/${SERVICE}/openapi.json?ref=${COMMIT_HASH}

    yarn openapi-typescript ${OUTPUT_PATH} --output ./generated/${SERVICE}.ts
done