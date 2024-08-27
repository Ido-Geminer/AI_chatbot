//Initialize the chatgpt API, and then we are going to prompt a user for a message, and continue the conversation until the user ends the file

//importing packages

import OpenAI from "openai";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
require("dotenv").config();

//prompting library
const prompt = require("prompt-sync")();

//step 1 - initialize chatgpt api

//gets the secret key from the env file
const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;

// Not needed anymore in new version of OpenAPI - creating a new class of configuration
// const configuration = new Configuration({
//   apiKey: OPENAI_SECRET_KEY,
// });

//passing the configuration to complete the initialization of the api connection

const openai = new OpenAI({
  apiKey: OPENAI_SECRET_KEY,
});

const model = "gpt-4o-mini";

let messages = [{ role: "user", content: "tell me a joke" }];

//step 2 - create context for the api (give it some personality)

const context = "You are a hilarious friendly person";

//step 3 - define the function to retrieve the api message based on user input

async function sendPrompt() {
  // storing past prompts in the conversation
  const current_messages = [
    {
      role: "system",
      content: context,
    },
    ...messages,
  ];
  const completion = await openai.chat.completions.create({
    model,
    messages: current_messages,
  });

  let response = completion.choices[0].message;
  messages.push(response);
  console.log(response.content);
  getUserInput();
}

//step 4 - create a run function that requests a user input

async function run() {
  getUserInput();
}

function getUserInput() {
  let new_user_input = prompt("How would you like to response?");

  //entering user input into the messages array to keep track of the conversation
  messages.push({
    role: "user",
    content: new_user_input,
  });
  sendPrompt();
}

run();
