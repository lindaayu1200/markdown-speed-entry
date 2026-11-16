1. cp -r vendor_new/vendor/marked vendor/ (fresh content)
2. edit one comment line in main.ts and parse.js
3. node /tmp/mdverify.mjs -> expect mismatches 0
4. git add -A && commit && push
