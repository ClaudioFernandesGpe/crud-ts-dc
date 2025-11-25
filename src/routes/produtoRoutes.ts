import { Router } from "express";
import { getprodutos, createProduto } from "./../controllers/produtoController";

const router = Router();

router.get('/produtos', getprodutos);
router.post('/produtos', createProduto)

export default router;