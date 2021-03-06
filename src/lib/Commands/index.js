"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommnadList = void 0;
const FileSystem = require("fs");
const discord_js_1 = require("discord.js");
// Command list store
let _commnadList = new discord_js_1.Collection();
// Read commands in value folder
const commandFiles = FileSystem.readdirSync("./src/lib/Commands/values").filter((value) => {
    return value.endsWith(".js");
});
for (const file of commandFiles) {
    const command = require(`./values/${file}`).default;
    // Check command disabled
    if (!command.options.enable) {
        console.log(`[Command][init] Disabled: ${file}`);
        continue;
    }
    console.log(`[Command][init] Enabled: ${file}`);
    _commnadList.set(command.name, command);
}
// Export command list
exports.CommnadList = _commnadList;
;
//# sourceMappingURL=index.js.map