import { Router } from "express";
import { getProdutos, createProduto, updateProduto, deleteProduto, getProduto } from "./../controllers/produtoController";

const router = Router();

router.get('/produtos', getProdutos);
router.post('/produtos', createProduto);
router.put('/produtos/:id', updateProduto);
router.delete('/produtos/:id', deleteProduto)
router.get('/produtos/:id', getProduto)

export default router;