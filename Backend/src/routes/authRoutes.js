const express = require("express");
const { signup, login } = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to your profile!", user: req.user });
});

module.exports = router;
