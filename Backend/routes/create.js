// routes/create.js
const express = require("express");
const router = express.Router();
const Clipboard = require("../models/Clipboard");
const generateCode = require("../utils/generateCode");

router.post("/", async (req, res) => {
  const { text } = req.body;

  const code = generateCode();

  const data = await Clipboard.create({
    code,
    text,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min
  });

  res.json({ code });
});

module.exports = router;