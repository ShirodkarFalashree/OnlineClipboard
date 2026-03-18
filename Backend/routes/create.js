const express = require("express");
const router = express.Router();
const Clipboard = require("../models/Clipboard");
const generateCode = require("../utils/generateCode");
const multer = require("multer");

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { text } = req.body;
    const file = req.file;

    const code = generateCode();

    const data = await Clipboard.create({
      code,
      text: text || "",
      fileName: file ? file.originalname : "",
      filePath: file ? file.path : "",
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    res.json({ code });

  } catch (err) {
    console.log("ERROR:", err); // 👈 THIS WILL SHOW ISSUE
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;