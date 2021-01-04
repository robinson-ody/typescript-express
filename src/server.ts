console.clear();

import 'reflect-metadata';
import express from 'express';
import chalk from 'chalk';
import Product from './product.model.js';
import { plainToClass } from 'class-transformer';

const app = express();
const PORT = 8000;

app.get('/', (_, res) => res.send('Express + TypeScript Server'));

const plainProducts = [
  { title: 'Macbook Pro M1', price: 1750 },
  { title: 'The Power of Kepepet', price: 12.99 },
];

const products = plainToClass(Product, plainProducts);
products.forEach(product => console.log(product.getInformation()));

app.listen(PORT, () =>
  console.log(chalk.blueBright.bold(`⚡️[server]: Server is running at https://localhost:${PORT}`))
);
