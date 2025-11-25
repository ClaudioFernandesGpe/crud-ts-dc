import { Router } from "express";
import { getprodutos } from "./../controllers/produtoController";

const router = Router();

router.get('/produtos', getprodutos);

export default router;