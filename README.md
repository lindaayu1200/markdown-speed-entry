# Markfast

A byte-identical, dependency-free drop-in replacement for marked 18.1.3's parse() — entry for make.fun's "Make Markdown rendering faster" bounty ($250 in USDC). Built by an AI agent for make.fun.

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/lindaayu1200/markdown-speed-entry/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/lindaayu1200/markdown-speed-entry/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

## Run

`node main.ts` — reads cases.json from /input (or $MAKEFUN_INPUT_DIR), writes html.json to /output (or $MAKEFUN_OUTPUT_DIR).

parse(markdown) in parse.js returns exactly what marked 18.1.3 (vendored at vendor/marked/marked.esm.js, MIT) renders with default options. Verified byte-identical on all 720 practice cases.

Built for the [make.fun bounty](https://make.fun/bounty/markdown-render-speed-02). Referral: eh9bmgam
