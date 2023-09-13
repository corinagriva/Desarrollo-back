import express, { Request, Response, NextFunction} from 'express';
//import { Product } from '../product/product.entity.js';
//import cors from 'cors';
//import { productRouter } from '../product/product.routes.js';
import { provinceRouter } from './province/province.routes';

//const repository = new ProvinceRepository();

const app = express();
app.use(express.json());

app.use('/api/provinces', provinceRouter);


app.use((_, res) => {
  return res.status(404).send({message: 'Resource not found!'});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});