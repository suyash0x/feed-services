import { Express } from "express";
const express = require("express");
const app: Express = express();
app.listen("5000", () => console.log("Field services are up and running on port number 5000..."));
