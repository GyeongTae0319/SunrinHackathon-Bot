"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem = require("fs");
class PointManager {
    constructor() {
        this.loadData();
    }
    setPoint(target, point) {
        this.data[target] = point;
        this.saveData();
        console.log(`[Point][set] ${target}: ${point}`);
    }
    addPoint(target, point) {
        if (!this.data[target])
            this.setPoint(target, 0);
        this.data[target] += point;
        this.saveData();
        console.log(`[Point][add] ${target}: ${this.data[target] - point} (+${point})`);
    }
    setPointAll(point) {
        let keys = Object.keys(this.data);
        for (let i in keys) {
            this.setPoint(keys[i], point);
        }
    }
    addPointAll(point) {
        let keys = Object.keys(this.data);
        for (let i in keys) {
            this.addPoint(keys[i], point);
        }
    }
    getPoint(target) {
        return this.data[target];
    }
    loadData() {
        try {
            this.data = require("./data.json");
        }
        catch (error) {
            this.data = {};
        }
    }
    saveData() {
        FileSystem.writeFileSync("./src/Components/PointManager/data.json", this.dataToString());
        this.loadData();
    }
    dataToString() {
        let result = "{\n";
        let keys = Object.keys(this.data);
        for (let i = 0; i < keys.length; i++) {
            result += `\t"${keys[i]}": ${this.data[keys[i]]}`;
            if (i != keys.length - 1)
                result += ",\n";
            else
                result += "\n";
        }
        return result + "}";
    }
}
exports.default = new PointManager();
//# sourceMappingURL=index.js.map