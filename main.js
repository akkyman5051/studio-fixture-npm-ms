// Item 09 live-run fixture (8.3, V26): uses the installed ms package and writes its result to /work/out/.
const fs = require("fs");
const ms = require("ms");

fs.mkdirSync("/work/out/", { recursive: true });
fs.writeFileSync("/work/out/result.txt", "ms " + ms("2 days") + " " + ms(60000) + "\n");
