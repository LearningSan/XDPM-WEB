const User = require('../models/User');

// 1. Lấy tất cả User (GET /users)
exports.getAllUsers = async (req, res) => {
  try {
    const { name } = req.query;
    let query = {};
    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Tìm kiếm không phân biệt hoa thường
    }
    const users = await User.find(query);
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
// 2. Lấy 1 User theo ID số (GET /users/:id)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: Number(req.params.id) });
    if (!user) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Tạo User mới (POST /users)
exports.createUser = async (req, res) => {
  try {
    // 1. Tìm người có ID lớn nhất (id: -1 nghĩa là xếp từ lớn đến bé)
    const lastUser = await User.findOne().sort({ id: -1 });
    
    // 2. Nếu đã có người (lastUser), lấy id của họ + 1. Nếu chưa có ai, bắt đầu từ 1.
    const nextId = (lastUser && typeof lastUser.id === 'number') ? lastUser.id + 1 : 1;

    const newUser = new User({
      id: nextId, 
      name: req.body.name,
      email: req.body.email
    });

    const savedUser = await newUser.save();
    res.status(201).json({ success: true, data: savedUser });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// 4. Cập nhật User (PUT /users/:id)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: Number(req.params.id) }, // Tìm theo ID số bạn đã sửa trong Compass
      req.body, 
      { new: true, runValidators: true } // Trả về bản ghi mới sau khi sửa và kiểm tra dữ liệu
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "Không tìm thấy người dùng" });
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// 5. Xóa User (DELETE /users/:id)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ id: Number(req.params.id) });

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "Người dùng không tồn tại" });
    }

    res.status(200).json({ success: true, message: "Xóa thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};