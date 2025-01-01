import pool from "../database.js";

const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const [row] = await pool.query(
            "SELECT * FROM users WHERE user_id = ?",
            [id]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const getByEmail = async (req, res) => {
    const { email } = req.query;

    try {
        const [row] = await pool.query("SELECT * FROM users WHERE email = ?", [
            email,
        ]);
        if (row.length === 0) {
            return res.status(404).json({ message: "User does not exists"})
        }
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const createUser = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO users (username, email, pwd, role) VALUES (?, ?, ?, ?)",
            [req.body.username, req.body.email, req.body.pwd, req.body.role]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            "UPDATE users SET username = ?, email = ?, pwd = ? WHERE user_id = ?",
            [req.body.username, req.body.email, req.body.pwd, id]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM users WHERE user_id = ?", [
            id,
        ]);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export { getUsers, getUser, getByEmail, createUser, updateUser, deleteUser };
