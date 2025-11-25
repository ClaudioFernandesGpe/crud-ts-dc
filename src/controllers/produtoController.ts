import { Request, Response } from "express";
import { ProdutoModel } from "./../models/produtoModel.js";

const produtoModel = new ProdutoModel();

export const getprodutos = async (req: Request, res: Response) => {

    try {
       const produtos = await produtoModel.getAll();
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar produtos.', error});
    }
}