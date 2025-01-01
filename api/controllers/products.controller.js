import pool from "../database.js";

const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const [row] = await pool.query("SELECT * FROM products WHERE id = ?", [
            id,
        ]);
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const createProduct = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO products (product_name, rarity, quality, price, quanity, anime) VALUES (?, ?, ?, ?, ?, ?)",
            [
                req.body.product_name,
                req.body.rarity,
                req.body.quality,
                req.body.price,
                req.body.quanity,
                req.body.anime,
            ]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            "UPDATE products SET product_name = ?, rarity = ?, quality = ?, price = ?, quanity = ?, anime = ? WHERE product_id = ?",
            [
                req.body.product_name,
                req.body.rarity,
                req.body.quality,
                req.body.price,
                req.body.quanity,
                req.body.anime,
                id,
            ]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await query.pool(
            "DELETE FROM products WHERE product_id = ?",
            [id]
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
