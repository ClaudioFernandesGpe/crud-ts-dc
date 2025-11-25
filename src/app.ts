import express from 'express';
import produtoRoutes from './routes/produtoRoutes';
import { pool } from './config/database';

import path from 'path';

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/api', produtoRoutes);

pool.getConnection()
    .then( () => {
        console.log('Conectado ao MySql!');
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error: any) => {
        console.log('Erro ao conectar ao MySql!', error);
    })
