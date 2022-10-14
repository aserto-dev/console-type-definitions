/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v2/management/control_plane/exec": {
    /** Runs a command on the specified instances */
    post: operations["management.control_plane.exec_command"];
  };
  "/api/v2/management/control_plane/instance_registrations": {
    /** Returns a collection of instance registrations. */
    get: operations["management.control_plane.list_instance_registrations"];
  };
}

export interface components {
  schemas: {
    protobufAny: {
      type_url?: string;
      value?: string;
    };
    rpcStatus: {
      code?: number;
      details?: components["schemas"]["protobufAny"][];
      message?: string;
    };
    /** Command represents a command that may be sent to and then processed by an instance. */
    v2Command: {
      discovery?: components["schemas"]["v2DiscoveryCommand"];
      sync_edge_directory?: components["schemas"]["v2SyncEdgeDirectoryCommand"];
    };
    v2CommandStreamResponse: {
      command?: components["schemas"]["v2Command"];
    };
    v2DiscoveryCommand: { [key: string]: unknown };
    v2ExecCommandRequest: {
      command?: components["schemas"]["v2Command"];
      id?: string;
    };
    v2ExecCommandResponse: {
      result?: unknown;
    };
    /**
     * InstanceInfo has data about a running aserto instance that is registered with the control
     * plane.
     */
    v2InstanceInfo: {
      certificate_id?: string;
      connection_id?: string;
      policy_id?: string;
      policy_label?: string;
      policy_name?: string;
      remote_host?: string;
    };
    /** InstanceRegistration has data about an instance's registration with the control plane. */
    v2InstanceRegistration: {
      id?: string;
      info?: components["schemas"]["v2InstanceInfo"];
    };
    v2ListInstanceRegistrationsResponse: {
      result?: components["schemas"]["v2InstanceRegistration"][];
    };
    v2SyncEdgeDirectoryCommand: { [key: string]: unknown };
  };
}

export interface operations {
  /** Runs a command on the specified instances */
  "management.control_plane.exec_command": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2ExecCommandResponse"];
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
        "application/json": components["schemas"]["v2ExecCommandRequest"];
      };
    };
  };
  /** Returns a collection of instance registrations. */
  "management.control_plane.list_instance_registrations": {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v2ListInstanceRegistrationsResponse"];
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
