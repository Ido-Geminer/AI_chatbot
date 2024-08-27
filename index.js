//Initialize the chatgpt API, and then we are going to prompt a user for a message, and continue the conversation until the user ends the file

//importing packages

import { OpenAIApi, Configuration } from "openai";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

//step 1 - initialize chatgpt api

//step 2 - create context for the api (give it some personality)

//step 3 - define the function to retrieve the api message based on user input

//step 4 - create a run function that requests a user input
