const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Đường dẫn: BASE_API/users -> Lấy tất cả
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Đường dẫn: BASE_API/users/:id -> Lấy theo id số (ví dụ: /users/1)
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID phải là số" });
  }

  try {
    const user = await User.findOne({ id: id });

    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
