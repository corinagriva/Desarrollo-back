import express, { Request, Response, NextFunction } from 'express';
import { supplierRepository } from './supplier.repository';
import { Supplier } from './supplier.entity';

const repository = new supplierRepository(); 

function sanitizeSupplierInput(req: Request, res: Response, next: NextFunction){
  
    req.body.sanitizeInput ={
      cuil: req.body.cuil, 
      businessName: req.body.businessName,
      phone: req.body.phone,
      webPage: req.body.webPage,
      email: req.body.email,
    }
    //more checks here
  
    Object.keys(req.body.sanitizeInput).forEach((key) => {
      if(req.body.sanitizeInput[key] === undefined) delete req.body.sanitizeInput[key];
      });
  
    next();
}

function findAll(req: Request, res: Response){
    res.json({data: repository.findAll()});
};

function findOne(req: Request, res: Response){
    const id = req.params.id;
    const supplier = repository.findOne({id});
    if (!supplier) {
      return res.status(404).send({message: 'Supplier not found!'});
    }
    res.json({data: supplier});
};

function add(req: Request, res: Response){
    const input = req.body.sanitizeInput;
  
    const supplierInput = new Supplier(input.cuil, input.businessName, input.phone, input.webPage, input.email);
  
    const supplier = repository.add(supplierInput);
    return res.status(201).send({message: 'Supplier created!', data: supplier});  
  
  };
  
  function update(req: Request, res: Response){
    req.body.sanitizeInput.cuil = req.params.id;
    const supplier =repository.update(req.body.sanitizeInput);
  
    if (!supplier) {
      return res.status(404).send({message: 'Supplier not found!'});
    }
    return res.status(200).send({message: 'Supplier updated!', data: supplier});  
   };
  
  function remove(req: Request, res: Response){
    const id = req.params.id;
    const supplier = repository.delete({id});
    if (!supplier) {
      return res.status(404).send({message: 'Supplier not found!'});
    }else{
      return res.status(200).send({message: 'Supplier deleted!', data: supplier});  
    }
  };
  
  export const controller = { 
    sanitizeSupplierInput, 
    findAll, 
    findOne,
    add,
    update,
    remove
  };