import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/users.route.js";
import productRouter from "./routes/products.route.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

app.listen(3000, () => {
    console.log("app is listening on port 3000");
});
