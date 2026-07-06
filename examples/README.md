# Examples

Minimal, runnable examples for `@ondewo/csi-client-nodejs`.

## `listS2sPipelines.ts`

Authenticate with the current ONDEWO bearer convention (the D18 Keycloak
offline-token flow) and call the CSI `Conversations.ListS2sPipelines` unary RPC.

Auth is a one-time `login(...)` (Resource-Owner-Password-Credentials against a
public Keycloak client) that keeps a short-lived access token warm;
`provider.getAuthMetadata()` yields the `authorization: Bearer <jwt>` gRPC
metadata attached to every call. There is no legacy per-request token / HTTP-basic /
`users.login()` credential check anymore.

Configuration is read from [`environment.env`](environment.env) (loaded via
`dotenv`, script-relative so the working directory does not matter). Copy that
template, fill in your Keycloak credentials and CSI host, then run against a
reachable CSI server:

```shell
node examples/listS2sPipelines.js
```

The variables follow the canonical ONDEWO env-var scheme (`ONDEWO_HOST`,
`ONDEWO_PORT`, `ONDEWO_USE_SECURE_CHANNEL`, `ONDEWO_GRPC_CERT`, `KEYCLOAK_URL`,
`KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_USER_NAME`, `KEYCLOAK_PASSWORD`,
`KEYCLOAK_VERIFY_SSL`).

The pure request/response logic (`listS2sPipelines`) is decoupled from the
generated gRPC stubs and unit-tested with a mocked client in
`listS2sPipelines.spec.ts` — no live server required. Both are compiled and run
by `npm test`.
