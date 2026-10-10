# Release History

*****************

## Release ONDEWO CSI Nodejs Client 5.6.0

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Tracking API Version [5.6.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.6.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) ), regenerated with ondewo-proto-compiler 5.15.5. The generated `ConversationsClient` and messages now cover:
  * `SetCallMediaControl`: per-call operator media control pushed by ondewo-sip (in-container token only). `CallMediaControlLevel` carries the full effective level (`bot_muted`, `listening_paused`), a monotonic `generation` and a bounded `reason`; `SetCallMediaControlResponse` reports `applied`, `changed`, `stale`, `bot_playback_in_flight` and a `refusal_reason`.
  * `ControlStreamResponse.media_control`: set only on media-control messages, pushed on a level change and seeded on every `GetControlStream` connect. Handle such a message as media control and do not apply its echoed `control_status`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `tests/entryPoint.spec.ts` pins that the package root exports the new messages and that `ConversationsClient` carries every `Conversations` RPC of API 5.6.0.

The API change is purely additive: a client built against 5.5.x stays wire-compatible.

*****************

## Release ONDEWO CSI Nodejs Client 5.5.2

### Improvements

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) New TLS / mutual TLS helper `auth/grpcChannel`, exported from the package root: `GrpcClientConfig`, `createChannelCredentials` and `createGrpcClient` build `@grpc/grpc-js` credentials and channel options from PEM **content** (`grpcCert`, `grpcClientCert`, `grpcClientKey`), never a file path. An empty `grpcCert` trusts the system roots. Same contract as the Python SDKs (ondewo-client-utils 4.1.x).
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Refused before gRPC sees them: half a client identity (certificate without key or key without certificate), a value that is not PEM content (e.g. a path), and `useSecureChannel: false` together with a client identity. Empty strings on both mean plain TLS. Error messages name the field and `host:port`, never a PEM, a key or the config object.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) A plaintext channel logs a warning naming `host:port`; bare IPv6 hosts are bracketed (`[::1]:50051`); CRLF PEMs work; the client key renders as `***REDACTED***` in `toString`, `util.inspect` and `JSON.stringify`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Channel defaults: max message length `2**31 - 1` in both directions, `grpc.max_reconnect_backoff_ms` 5000, `grpc.keepalive_timeout_ms` 20000, `grpc.keepalive_permit_without_calls` 0. `grpc.keepalive_time_ms` is deliberately left unset: grpc-js has no `grpc.http2.max_pings_without_data`, so keepalive pings on a silent stream make a grpc-core server answer GOAWAY `too_many_pings`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) README section "TLS, mutual TLS and certificates": modes, loading PEMs from files, a test PKI with openssl, security notes and troubleshooting.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Tests: real handshakes against an in-process grpc-js server with an openssl test PKI generated at test time (TLS, mutual TLS, missing or foreign client identity rejected, wrong CA, CRLF PEMs, IPv6 where available), plus the refusal and redaction cases. CI runs on Node 20, 22 and 24 with `npm ci`, and fails when the committed `auth/` build output drifts from its source.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Regenerated with ondewo-proto-compiler 5.15.5: `public-api.js` (the package `main`) is now a CommonJS barrel, so `require('@ondewo/csi-client-nodejs')` works. With earlier compilers it contained `export * from` lines and failed with `ERR_MODULE_NOT_FOUND`. CI now `require()`s the package root. The missing `google/api/experimental/authorization_config` stubs are generated.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `tests/releaseNotes.spec.ts` pins the release-notes slice: every heading's spelling, every section's `*****` separator, `src/RELEASE.md` == `RELEASE.md` and non-empty notes for the current version.

**Note:** the Keycloak offline-token helper moved from `src/auth` (built into `api/auth/offlineTokenProvider`) to `auth/offlineTokenProvider`, next to `grpcChannel`, and is exported from the package root. A deep import of `@ondewo/csi-client-nodejs/api/auth/offlineTokenProvider` must change to `@ondewo/csi-client-nodejs/auth/offlineTokenProvider`; importing from the package root (`require('@ondewo/csi-client-nodejs')`) is unchanged. (The 5.5.1 npm package did not contain the helper; it ships now.)

API unchanged: tracking API Version [5.5.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.5.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Nodejs Client 5.5.1

### Bug Fixes

* A failed background token refresh no longer ends token renewal for the life of the process.
  `scheduleRefresh` ran only on the success path, so a single transient Keycloak failure left no timer
  armed: the access token then lapsed and every later call failed `UNAUTHENTICATED` until the
  application logged in again. The stale token keeps working until it expires, which is what made the
  defect silent.
* The failure path now re-arms with bounded exponential backoff and full jitter -- 5 s doubling to a
  300 s ceiling, with the actual wait drawn uniformly from `[base, ceiling]` -- rather than at the 1 s
  scheduling floor. The jitter is load-bearing at ondewo's fan-out: one client per call container means
  N clients whose refreshes fail in the same instant would otherwise retry in lockstep against a realm
  they all share.
* A successful refresh resets the backoff ladder, and the bounded-deadline and `stop()` guards still
  apply to every re-arm.
* The refresh timer fired `void this.refreshOnce()`, which attached no rejection handler at all, so a
  failed background refresh also surfaced as an `unhandledRejection` -- which Node terminates the
  process on by default since Node 15.

*****************

## Release ONDEWO CSI Nodejs Client 5.5.0

### Improvements

* Built against [ondewo-csi-api 5.5.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.5.0), which tracks ondewo-nlu-api 7.1.0 (was 7.0.0) and ondewo-s2t-api 7.5.0 (was 7.4.0).
* `ondewo/csi/conversation.proto` is unchanged in that API release, so the CSI service surface is identical and this client stays wire-compatible with its predecessor. What grows is the vendored surface it re-exports: `speech-to-text.proto` gains the `VadMethod` and `TsdMethod` enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection configuration), and `rag.proto` gains `RagCrawlerIncrementalConfig`.

*****************

## Release ONDEWO CSI Nodejs Client 5.4.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) NOTE: the hand-written `src/auth/offlineTokenProvider.ts` is still neither compiled into the package nor re-exported from the barrel. This repo keeps auth at `src/auth`, which the compiler's generic re-export (which scans the output root's `auth/`) does not cover, and it has no local `compile_auth` step like the t2s nodejs client. Tracked as follow-up.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************
## Release ONDEWO CSI Nodejs Client 5.4.0

### Improvements
 * Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 5.2.0

### Improvements
 * Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 5.1.0

### Improvements
 * Tracking API Version [5.1.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 5.0.0

### Improvements
 * Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 4.0.0

### Improvements
 * Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 3.2.0

### Improvements
 * Tracking API Version [3.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 3.0.0

### Improvements
 * Tracking API Version [3.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )


*****************
## Release ONDEWO CSI Nodejs Client 2.3.1

### Improvements

* Track version 2.3.1 of [ONDEWO CSI API](https://github.com/ondewo/ondewo-csi-api/releases/2.3.1)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
