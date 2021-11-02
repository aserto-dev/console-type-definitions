/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/account": {
    /** Returns account information of given user identity: account id, tenant membership and default tenant id. */
    get: operations["account.get_account"];
    /** Update account information of given user identity. */
    post: operations["account.update_account"];
  };
  "/api/v1/account/invites": {
    /** Returns tenant invitations collection for given user identity. */
    get: operations["account.list_invites"];
  };
  "/api/v1/info": {
    /** Return endpoint versio information. */
    get: operations["info.info"];
  };
  "/api/v1/onboarding/available/{name}": {
    /** Verifies if given tenant name is available. */
    get: operations["onboarding.tenant_available"];
  };
  "/api/v1/onboarding/claim": {
    /** Claim tenant name. */
    post: operations["onboarding.claim_tenant"];
  };
  "/api/v1/onboarding/invites": {
    /** Invite user to join aserto. */
    post: operations["onboarding.invite_user"];
  };
  "/api/v1/providers": {
    /** Returns the collection of providers. */
    get: operations["provider.list_providers"];
  };
  "/api/v1/providers/kinds": {
    /** Returns the collection of provider kinds (types). */
    get: operations["provider.list_provider_kinds"];
  };
  "/api/v1/providers/{id}": {
    /** Returns the meta describing of a provider. */
    get: operations["provider.get_provider"];
  };
  "/api/v1/tenant/connections": {
    /** Returns the collection of connections for given tenant. */
    get: operations["connection.list_connections"];
    /** Creates a new connection instance of a given connection kind. */
    post: operations["connection.create_connection"];
  };
  "/api/v1/tenant/connections/{connection.id}": {
    /** Update existing connection definition for the given connection id. */
    put: operations["connection.update_connection"];
  };
  "/api/v1/tenant/connections/{id}": {
    /** Returns the connection definition for the given connection id. */
    get: operations["connection.get_connection"];
    /** Removes the connection definition for the given connection id. */
    delete: operations["connection.delete_connection"];
  };
  "/api/v1/tenant/connections/{id}/verify": {
    /** Verifiy the configuration settings for the given connection id. */
    post: operations["connection.verify_connection"];
  };
  "/api/v1/tenant/connections/{id}/{secret_key}/rotate": {
    /** Rotate a generated secret value. */
    put: operations["connection.rotate_secret"];
  };
  "/api/v1/tenant/policies": {
    /** List policy references. */
    get: operations["policy.list_policy_references"];
    /** Create policy reference. */
    post: operations["policy.create_policy_reference"];
  };
  "/api/v1/tenant/policies/{id}": {
    /** Remove policy reference. */
    delete: operations["policy.delete_policy_reference"];
  };
  "/api/v1/tenant/policies/{policy_ref.id}": {
    /** Update a policy reference. */
    patch: operations["policy.update_policy_reference"];
  };
  "/api/v1/tenant/profile": {
    /** Returns the tenant profile. */
    get: operations["profile.get_profile"];
  };
  "/api/v1/tenant/profile/invites": {
    /** Returns collection of invitation for given tenant. */
    get: operations["profile.get_invites"];
    /** Invite user to tenant. */
    post: operations["profile.invite_user"];
  };
  "/api/v1/tenant/profile/invites/{id}": {
    /** Respond to tenant invitation. */
    post: operations["profile.respond_to_invite"];
  };
  "/api/v1/tenant/profile/members/{account_id}": {
    /** Remove member from tenant. */
    delete: operations["profile.remove_member"];
  };
  "/api/v1/tenant/scc/{connection_id}/orgs": {
    /** Returns the collection organizations for a given SCC connection. */
    get: operations["scc.list_orgs"];
  };
  "/api/v1/tenant/scc/{connection_id}/profile": {
    /** Returns profile information for a given SCC connection instance. */
    get: operations["scc.get_profile"];
  };
  "/api/v1/tenant/scc/{connection_id}/repos/{owner}": {
    /** Returns the collection repostories for a given SCC connection instance. */
    get: operations["scc.list_repos"];
    /** Create a new source repository instance for a given connection instance. */
    post: operations["scc.create_repo"];
  };
  "/api/v1/tenant/scc/{connection_id}/repos/{owner}/{repo}/connected": {
    /** Verify if the given repository is connected. */
    get: operations["scc.is_repo_connected"];
  };
  "/api/v1/tenant/scc/{connection_id}/templates": {
    /** Returns the collection template repostories for a given SCC connection instance. */
    get: operations["scc.list_templates"];
  };
}

export interface components {
  schemas: {
    /**
     * `Any` contains an arbitrary serialized protocol buffer message along with a
     * URL that describes the type of the serialized message.
     *
     * Protobuf library provides support to pack/unpack Any values in the form
     * of utility functions or additional generated methods of the Any type.
     *
     * Example 1: Pack and unpack a message in C++.
     *
     *     Foo foo = ...;
     *     Any any;
     *     any.PackFrom(foo);
     *     ...
     *     if (any.UnpackTo(&foo)) {
     *       ...
     *     }
     *
     * Example 2: Pack and unpack a message in Java.
     *
     *     Foo foo = ...;
     *     Any any = Any.pack(foo);
     *     ...
     *     if (any.is(Foo.class)) {
     *       foo = any.unpack(Foo.class);
     *     }
     *
     *  Example 3: Pack and unpack a message in Python.
     *
     *     foo = Foo(...)
     *     any = Any()
     *     any.Pack(foo)
     *     ...
     *     if any.Is(Foo.DESCRIPTOR):
     *       any.Unpack(foo)
     *       ...
     *
     *  Example 4: Pack and unpack a message in Go
     *
     *      foo := &pb.Foo{...}
     *      any, err := anypb.New(foo)
     *      if err != nil {
     *        ...
     *      }
     *      ...
     *      foo := &pb.Foo{}
     *      if err := any.UnmarshalTo(foo); err != nil {
     *        ...
     *      }
     *
     * The pack methods provided by protobuf library will by default use
     * 'type.googleapis.com/full.type.name' as the type URL and the unpack
     * methods only use the fully qualified type name after the last '/'
     * in the type URL, for example "foo.bar.com/x/y.z" will yield type
     * name "y.z".
     *
     *
     * JSON
     * ====
     * The JSON representation of an `Any` value uses the regular
     * representation of the deserialized, embedded message, with an
     * additional field `@type` which contains the type URL. Example:
     *
     *     package google.profile;
     *     message Person {
     *       string first_name = 1;
     *       string last_name = 2;
     *     }
     *
     *     {
     *       "@type": "type.googleapis.com/google.profile.Person",
     *       "firstName": <string>,
     *       "lastName": <string>
     *     }
     *
     * If the embedded message type is well-known and has a custom JSON
     * representation, that representation will be embedded adding a field
     * `value` which holds the custom JSON in addition to the `@type`
     * field. Example (for message [google.protobuf.Duration][]):
     *
     *     {
     *       "@type": "type.googleapis.com/google.protobuf.Duration",
     *       "value": "1.212s"
     *     }
     */
    protobufAny: {
      /**
       * A URL/resource name that uniquely identifies the type of the serialized
       * protocol buffer message. This string must contain at least
       * one "/" character. The last segment of the URL's path must represent
       * the fully qualified name of the type (as in
       * `path/google.protobuf.Duration`). The name should be in a canonical form
       * (e.g., leading "." is not accepted).
       *
       * In practice, teams usually precompile into the binary all types that they
       * expect it to use in the context of Any. However, for URLs which use the
       * scheme `http`, `https`, or no scheme, one can optionally set up a type
       * server that maps type URLs to message definitions as follows:
       *
       * * If no scheme is provided, `https` is assumed.
       * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
       *   value in binary format, or produce an error.
       * * Applications are allowed to cache lookup results based on the
       *   URL, or have them precompiled into a binary to avoid any
       *   lookup. Therefore, binary compatibility needs to be preserved
       *   on changes to types. (Use versioned type names to manage
       *   breaking changes.)
       *
       * Note: this functionality is not currently available in the official
       * protobuf release, and it is not used for type URLs beginning with
       * type.googleapis.com.
       *
       * Schemes other than `http`, `https` (or the empty scheme) might be
       * used with implementation specific semantics.
       */
      type_url?: string;
      /** Must be a valid serialized protocol buffer of the above specified type. */
      value?: string;
    };
    /**
     * `NullValue` is a singleton enumeration to represent the null value for the
     * `Value` type union.
     *
     *  The JSON representation for `NullValue` is JSON `null`.
     *
     *  - NULL_VALUE: Null value.
     */
    protobufNullValue: "NULL_VALUE";
    /**
     * The `Status` type defines a logical error model that is suitable for
     * different programming environments, including REST APIs and RPC APIs. It is
     * used by [gRPC](https://github.com/grpc). Each `Status` message contains
     * three pieces of data: error code, error message, and error details.
     *
     * You can find out more about this error model and how to work with it in the
     * [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    rpcStatus: {
      /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
      code?: number;
      /**
       * A list of messages that carry the error details.  There is a common set of
       * message types for APIs to use.
       */
      details?: components["schemas"]["protobufAny"][];
      /**
       * A developer-facing error message, which should be in English. Any
       * user-facing error message should be localized and sent in the
       * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
       */
      message?: string;
    };
    v1Account: {
      default_tenant?: string;
      id?: string;
      registration_date?: string;
      tenants?: components["schemas"]["v1Tenant"][];
    };
    v1BuildInfo: {
      arch?: string;
      commit?: string;
      date?: string;
      os?: string;
      version?: string;
    };
    v1ClaimTenantRequest: {
      name?: string;
    };
    v1ClaimTenantResponse: {
      id?: string;
    };
    v1ConfigElement: {
      description?: string;
      generated?: boolean;
      id?: number;
      kind?: components["schemas"]["v1ConfigElementKind"];
      mode?: components["schemas"]["v1DisplayMode"];
      name?: string;
      read_only?: boolean;
      type?: components["schemas"]["v1ConfigElementType"];
      usage?: string;
    };
    v1ConfigElementKind:
      | "CONFIG_ELEMENT_KIND_UNKNOWN"
      | "CONFIG_ELEMENT_KIND_ATTRIBUTE"
      | "CONFIG_ELEMENT_KIND_SECRET"
      | "CONFIG_ELEMENT_KIND_CERTIFICATE";
    v1ConfigElementType:
      | "CONFIG_ELEMENT_TYPE_UNKNOWN"
      | "CONFIG_ELEMENT_TYPE_STRING"
      | "CONFIG_ELEMENT_TYPE_INTEGER"
      | "CONFIG_ELEMENT_TYPE_BOOLEAN";
    v1Connection: {
      config?: { [key: string]: unknown };
      description?: string;
      id?: string;
      kind?: components["schemas"]["v1ProviderKind"];
      last_verification_at?: string;
      metadata?: components["schemas"]["v1Metadata"];
      name?: string;
      provider_id?: string;
      system?: boolean;
      verified?: boolean;
    };
    v1ConnectionType:
      | "CONNECTION_TYPE_UNKNOWN"
      | "CONNECTION_TYPE_SIMPLE"
      | "CONNECTION_TYPE_OAUTH";
    v1CreateConnectionResponse: {
      id?: string;
    };
    v1CreatePolicyRefResponse: {
      id?: string;
    };
    v1CreateRepoResponse: { [key: string]: unknown };
    v1DeleteConnectionResponse: {
      results?: { [key: string]: unknown };
    };
    v1DeletePolicyRefResponse: {
      result?: { [key: string]: unknown };
    };
    v1DisplayMode:
      | "DISPLAY_MODE_UNKNOWN"
      | "DISPLAY_MODE_NORMAL"
      | "DISPLAY_MODE_MASKED";
    v1Fields: {
      mask?: string;
    };
    v1GetAccountResponse: {
      result?: components["schemas"]["v1Account"];
    };
    v1GetConnectionResponse: {
      result?: components["schemas"]["v1Connection"];
    };
    v1GetInvitesResponse: {
      invites?: components["schemas"]["v1Invite"][];
    };
    v1GetProfileResponse: {
      repos?: components["schemas"]["v1Repo"][];
      tenant?: components["schemas"]["v1Tenant"];
      username?: string;
    };
    v1GetProviderResponse: {
      results?: components["schemas"]["v1Provider"][];
    };
    v1InfoResponse: {
      build?: components["schemas"]["v1BuildInfo"];
      system?: components["schemas"]["v1SystemInfo"];
      version?: components["schemas"]["v1VersionInfo"];
    };
    v1Invite: {
      created_at?: string;
      email?: string;
      id?: string;
      invited_by?: string;
      responded_at?: string;
      role?: string;
      status?: components["schemas"]["v1InviteStatus"];
    };
    v1InviteStatus:
      | "INVITE_STATUS_UNKNOWN"
      | "INVITE_STATUS_ACCEPTED"
      | "INVITE_STATUS_DECLINED"
      | "INVITE_STATUS_EXPIRED"
      | "INVITE_STATUS_CANCELED";
    v1InviteUserRequest: {
      account_id?: string;
      email?: string;
      role?: string;
    };
    v1InviteUserResponse: {
      id?: string;
    };
    v1IsRepoConnectedResponse: {
      connected?: boolean;
    };
    v1ListConnectionsResponse: {
      results?: components["schemas"]["v1Connection"][];
    };
    v1ListInvitesResponse: {
      results?: components["schemas"]["v1TenantInvite"][];
    };
    v1ListOrgResponse: {
      orgs?: string[];
    };
    v1ListPolicyRefsResponse: {
      results?: components["schemas"]["v1PolicyRef"][];
    };
    v1ListProviderKindsResponse: {
      results?: string[];
    };
    v1ListProvidersResponse: {
      results?: components["schemas"]["v1Provider"][];
    };
    v1ListRepoResponse: {
      repos?: components["schemas"]["v1Repo"][];
    };
    v1ListTemplatesResponse: {
      repos?: components["schemas"]["v1Repo"][];
    };
    v1Metadata: {
      created_at?: string;
      deleted_at?: string;
      updated_at?: string;
    };
    v1PolicyRef: {
      connection_id?: string;
      decision_logging?: boolean;
      id?: string;
      name?: string;
      registry_connection_id?: string;
      registry_image?: string;
      registry_tag?: string;
      source_name?: string;
      source_url?: string;
    };
    v1Provider: {
      config?: components["schemas"]["v1ConfigElement"][];
      connection_type?: components["schemas"]["v1ConnectionType"];
      description?: string;
      display_attributes?: { [key: string]: string };
      id?: string;
      kind?: components["schemas"]["v1ProviderKind"];
      name?: string;
    };
    v1ProviderKind:
      | "PROVIDER_KIND_UNKNOWN"
      | "PROVIDER_KIND_IDP"
      | "PROVIDER_KIND_SCC"
      | "PROVIDER_KIND_POLICY_REGISTRY"
      | "PROVIDER_KIND_AUTHORIZER";
    v1RemoveMemberResponse: { [key: string]: unknown };
    v1Repo: {
      name?: string;
      url?: string;
    };
    v1RespondToInviteResponse: { [key: string]: unknown };
    v1RotateSecretResponse: {
      result?: components["schemas"]["v1Connection"];
    };
    v1SystemInfo: {
      created_at?: string;
      instance_id?: string;
    };
    v1Tenant: {
      connections?: components["schemas"]["v1Connection"][];
      id?: string;
      members?: components["schemas"]["v1TenantMember"][];
      name?: string;
    };
    v1TenantAvailability:
      | "TENANT_AVAILABILITY_UNKNOWN"
      | "TENANT_AVAILABILITY_AVAILABLE"
      | "TENANT_AVAILABILITY_UNAVAILABLE"
      | "TENANT_AVAILABILITY_INVALID"
      | "TENANT_AVAILABILITY_PROFANE"
      | "TENANT_AVAILABILITY_RESERVED";
    v1TenantAvailableResponse: {
      availability?: components["schemas"]["v1TenantAvailability"];
      reason?: string;
    };
    v1TenantInvite: {
      invite?: components["schemas"]["v1Invite"];
      tenant?: components["schemas"]["v1Tenant"];
    };
    v1TenantMember: {
      id?: string;
    };
    v1UpdateAccountResponse: { [key: string]: unknown };
    v1UpdateConnectionResponse: {
      id?: string;
    };
    v1UpdatePolicyRefResponse: {
      results?: { [key: string]: unknown };
    };
    v1VerifyConnectionResponse: {
      status?: components["schemas"]["rpcStatus"];
    };
    v1VersionInfo: {
      schema?: string;
      system?: number;
    };
  };
}

export interface operations {
  /** Returns account information of given user identity: account id, tenant membership and default tenant id. */
  "account.get_account": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetAccountResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Update account information of given user identity. */
  "account.update_account": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1UpdateAccountResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1Account"];
      };
    };
  };
  /** Returns tenant invitations collection for given user identity. */
  "account.list_invites": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListInvitesResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Return endpoint versio information. */
  "info.info": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1InfoResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Verifies if given tenant name is available. */
  "onboarding.tenant_available": {
    parameters: {
      path: {
        name: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1TenantAvailableResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Claim tenant name. */
  "onboarding.claim_tenant": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ClaimTenantResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1ClaimTenantRequest"];
      };
    };
  };
  /** Invite user to join aserto. */
  "onboarding.invite_user": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1InviteUserResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1InviteUserRequest"];
      };
    };
  };
  /** Returns the collection of providers. */
  "provider.list_providers": {
    parameters: {
      query: {
        kind?:
          | "PROVIDER_KIND_UNKNOWN"
          | "PROVIDER_KIND_IDP"
          | "PROVIDER_KIND_SCC"
          | "PROVIDER_KIND_POLICY_REGISTRY"
          | "PROVIDER_KIND_AUTHORIZER";
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListProvidersResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the collection of provider kinds (types). */
  "provider.list_provider_kinds": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListProviderKindsResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the meta describing of a provider. */
  "provider.get_provider": {
    parameters: {
      path: {
        id: string;
      };
      query: {
        kind?:
          | "PROVIDER_KIND_UNKNOWN"
          | "PROVIDER_KIND_IDP"
          | "PROVIDER_KIND_SCC"
          | "PROVIDER_KIND_POLICY_REGISTRY"
          | "PROVIDER_KIND_AUTHORIZER";
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetProviderResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the collection of connections for given tenant. */
  "connection.list_connections": {
    parameters: {
      query: {
        kind?:
          | "PROVIDER_KIND_UNKNOWN"
          | "PROVIDER_KIND_IDP"
          | "PROVIDER_KIND_SCC"
          | "PROVIDER_KIND_POLICY_REGISTRY"
          | "PROVIDER_KIND_AUTHORIZER";
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListConnectionsResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Creates a new connection instance of a given connection kind. */
  "connection.create_connection": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1CreateConnectionResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1Connection"];
      };
    };
  };
  /** Update existing connection definition for the given connection id. */
  "connection.update_connection": {
    parameters: {
      path: {
        "connection.id": string;
      };
      query: {
        force?: boolean;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1UpdateConnectionResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1Connection"];
      };
    };
  };
  /** Returns the connection definition for the given connection id. */
  "connection.get_connection": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetConnectionResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Removes the connection definition for the given connection id. */
  "connection.delete_connection": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1DeleteConnectionResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Verifiy the configuration settings for the given connection id. */
  "connection.verify_connection": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1VerifyConnectionResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Rotate a generated secret value. */
  "connection.rotate_secret": {
    parameters: {
      path: {
        id: string;
        secret_key: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1RotateSecretResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** List policy references. */
  "policy.list_policy_references": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListPolicyRefsResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Create policy reference. */
  "policy.create_policy_reference": {
    parameters: {
      query: {
        force_reconnect?: boolean;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1CreatePolicyRefResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1PolicyRef"];
      };
    };
  };
  /** Remove policy reference. */
  "policy.delete_policy_reference": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1DeletePolicyRefResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Update a policy reference. */
  "policy.update_policy_reference": {
    parameters: {
      path: {
        "policy_ref.id": string;
      };
      query: {
        "update_mask.mask"?: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1UpdatePolicyRefResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1PolicyRef"];
      };
    };
  };
  /** Returns the tenant profile. */
  "profile.get_profile": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetProfileResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns collection of invitation for given tenant. */
  "profile.get_invites": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetInvitesResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Invite user to tenant. */
  "profile.invite_user": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1InviteUserResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["v1InviteUserRequest"];
      };
    };
  };
  /** Respond to tenant invitation. */
  "profile.respond_to_invite": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1RespondToInviteResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          status?: components["schemas"]["v1InviteStatus"];
        };
      };
    };
  };
  /** Remove member from tenant. */
  "profile.remove_member": {
    parameters: {
      path: {
        account_id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1RemoveMemberResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the collection organizations for a given SCC connection. */
  "scc.list_orgs": {
    parameters: {
      path: {
        connection_id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListOrgResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns profile information for a given SCC connection instance. */
  "scc.get_profile": {
    parameters: {
      path: {
        connection_id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetProfileResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the collection repostories for a given SCC connection instance. */
  "scc.list_repos": {
    parameters: {
      path: {
        connection_id: string;
        owner: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListRepoResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Create a new source repository instance for a given connection instance. */
  "scc.create_repo": {
    parameters: {
      path: {
        connection_id: string;
        owner: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1CreateRepoResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          repo?: string;
          template?: string;
        };
      };
    };
  };
  /** Verify if the given repository is connected. */
  "scc.is_repo_connected": {
    parameters: {
      path: {
        connection_id: string;
        owner: string;
        repo: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1IsRepoConnectedResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  /** Returns the collection template repostories for a given SCC connection instance. */
  "scc.list_templates": {
    parameters: {
      path: {
        connection_id: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListTemplatesResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
}

export interface external {}
