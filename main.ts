// read markdown cases, convert to HTML, and write the results back out
import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "./parse.js";
const inputDir = process.env.MAKEFUN_INPUT_DIR || "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const cases = JSON.parse(readFileSync(`${inputDir}/cases.json`, "utf8"));
const html = cases.map((c) => parse(c));
writeFileSync(`${outputDir}/html.json`, JSON.stringify(html, null, 2));
