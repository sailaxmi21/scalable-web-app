// authController.js
const users = []; // Temporary in-memory "database"

const registerUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { email, password }; // In real app, hash password
    users.push(newUser);

    res.status(201).json({ message: "User registered", email });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", email });
};

module.exports = { registerUser, loginUser };
