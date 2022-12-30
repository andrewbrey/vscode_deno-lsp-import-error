# Reproduction of issue with Deno imports / LSP

To reproduce the issue, open up `main.ts` and try to auto-import the `invariant` function exported
by `utils.ts` (and which is re-exported by `mod.ts`).

Issue: https://github.com/denoland/vscode_deno/issues/781

## Notes / Environment

```
Deno Extension Version: v3.15.0
Published:              5/26/2020, 06:34:45
Last released:          12/14/2022, 06:04:18
Last updated:           12/29/2022, 13:52:27
Identifier:             denoland.vscode-deno

Deno Version: 1.29.1
deno --version
deno 1.29.1 (release, x86_64-unknown-linux-gnu)
v8 10.9.194.5
typescript 4.9.4

OS: Pop!_OS 22.04 LTS x86_64 (Linux)

VS Code Version: 1.74.2
```
