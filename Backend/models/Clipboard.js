const mongoose = require("mongoose");

const clipboardSchema = new mongoose.Schema({
  code: String,
  text: String,
  fileName: String,
  filePath: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date,
});

module.exports = mongoose.model("Clipboard", clipboardSchema);