"use strict";

const app = require("./server.js");
console.log("Starting server on port 3000");

app.listen(3000, () => console.log("Server running on port 3000"));
