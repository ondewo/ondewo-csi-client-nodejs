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

Run against a reachable CSI server:

```shell
ONDEWO_KEYCLOAK_URL=https://auth.example.com/auth \
ONDEWO_KEYCLOAK_REALM=ondewo-ccai-platform \
ONDEWO_KEYCLOAK_CLIENT_ID=ondewo-nlu-cai-sdk-public \
ONDEWO_USERNAME=tech-user@example.com \
ONDEWO_PASSWORD=... \
ONDEWO_CSI_HOST=localhost:50055 \
node examples/listS2sPipelines.js
```

The pure request/response logic (`listS2sPipelines`) is decoupled from the
generated gRPC stubs and unit-tested with a mocked client in
`listS2sPipelines.spec.ts` — no live server required. Both are compiled and run
by `npm test`.
