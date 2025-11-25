import { pool } from "./../config/database";

export interface Produto {
    id?: number;
    nome: string;
    preco: number;
}

export class ProdutoModel{
    async getAll(): Promise<Produto[]> {
        const [rows] = await pool.query('SELECT * FROM produtos');
        return rows as Produto[];
    };

    async create( produto: Produto ): Promise<void> {
        await pool.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [produto.nome, produto.preco])
    }
};

