const express = require("express");
const PORT = 3000;
const app = express();
const router = express.Router();

router.use("/:id", (req, res) => {
    res.send(`Роутер ${req.params.id}`);
});
router.use("/", (req, res) => {
    res.send("Объекты: ");
});
app.use("/objects", router);
app.use("/", (req,res) => {
    res.send("Начало");
});


app.listen(PORT);