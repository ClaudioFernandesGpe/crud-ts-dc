import { Router } from "express";
import { getprodutos, createProduto, updateProduto } from "./../controllers/produtoController";

const router = Router();

router.get('/produtos', getprodutos);
router.post('/produtos', createProduto);
router.put('/produtos/:id', updateProduto);

export default router;