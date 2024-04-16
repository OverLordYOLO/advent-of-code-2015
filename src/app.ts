import { Utils } from "./utils";
import * as fs from "fs";

if (!process.env.TEST_INPUT_PATH || !process.env.TEST_OUTPUT_PATH || !process.env.INPUT_PATH || !process.env.OUTPUT_PATH || !process.env.CHARACTER_MOVE_UP || !process.env.CHARACTER_MOVE_DOWN) {
    throw new Error("Please set the required environment variables.");
}

const inputPath = process.env.INPUT_PATH;
const outputPath = process.env.OUTPUT_PATH;

const inputText = fs.readFileSync(inputPath, "utf-8");

const floor = Utils.calculateResultingFloor(inputText);

fs.writeFileSync(outputPath, floor.toString(), { encoding: "utf-8", flag: "w+"});


console.log(`Floor: ${floor}`);
