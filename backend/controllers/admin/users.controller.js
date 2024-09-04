// controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { AdminsModel } = require("../../models/main.js");

const JWT_SECRET = process.env.JWTKEY;

//login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  try {
    const userCount = await AdminsModel.count();

    if (userCount === 0) {
      const hashedPassword = await bcrypt.hash(password, 10);

      await AdminsModel.create({
        email,
        fullName: "admin",
        password: hashedPassword,
        role: "admin",
      });

      return res
        .status(201)
        .json({ message: "First user created successfully", token });
    }

    const user = await AdminsModel.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUserBasic = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AdminsModel.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// register
const registerUser = async (req, res) => {
  const { email, password, fullName, role } = req.body;

  console.log(email, password, fullName);
  try {
    // const existingUser = await AdminsModel.findOne({ where: { email } });
    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }
    console.log(email, password, fullName);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await AdminsModel.create({
      email,
      password: hashedPassword,
      fullName,
      role,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
