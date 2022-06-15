import stockBarangSchema from "../model/stockBarang.js";

export const getStock = async(req,res)=>{
    try {
        const stocks = await stockBarangSchema.find();
        res.json(stocks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getStockById = async(req,res)=>{
    try {
        const stock = await stockBarangSchema.findById(req.params.id);
        res.json(stock);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveStock = async(req,res)=>{
    const stock = new stockBarangSchema(req.body)
    try {
        const insertStock = await stock.save();
        res.status(201).json(insertStock);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateStock = async(req,res)=>{
    try {
        const updateStock = await stockBarangSchema.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateStock);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteStock = async(req,res)=>{
    try {
        const deleteStock = await stockBarangSchema.deleteOne({_id:req.params.id},);
        res.status(200).json(deleteStock);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}