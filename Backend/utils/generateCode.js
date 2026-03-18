// utils/generateCode.js
const { nanoid } = require("nanoid");

function generateCode() {
  return nanoid(6); // 6-char code
}

module.exports = generateCode;