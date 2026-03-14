const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Đường dẫn: BASE_API/users -> Lấy tất cả
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }

    res.json(user);

  } catch (err) {
    res.status(400).json({ message: "ID không hợp lệ" });
  }
});

module.exports = router;
