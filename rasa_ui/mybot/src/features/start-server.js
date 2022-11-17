const express = require("express");
const path = require("path");

const basePath = '';
const app = express();

app.use(basePath + "/", express.static(path.resolve(__dirname + "/build")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "C:/Users/DemoUser/Desktop/Aurora/chatbot-deploy/build/index.html"));
});

app.listen(4000);