import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.json({ response: "Bienvenido a CONSTRUIMOS API" })
});

export default router