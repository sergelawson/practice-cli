#!/usr/bin/env node
import { Command } from "commander";

const test = (name: string) => {
  return `${name} welcome to Practice CLI!`;
};
// Declare my program
const program = new Command();

// Add actions to my CLI
program
  .argument("<string>", "String to log")
  .option("-c ,--capitalize", "Capitalize the string")
  .action((message: string, opt: { capitalize: boolean }) => {
    if (opt.capitalize) {
      console.log(test(message.toUpperCase()));
      return;
    }
    console.log(test(message));
  });

// Execute the program with the given argument

program.parse(process.argv);
