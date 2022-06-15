import mongoose from "mongoose";

const stockBarangSchema = new mongoose.Schema({
    nama_produk : {
        type : String,
        required : true
    },
    keterangan : {
        type : String,
        required : true
    },
    harga : {
        type : Number,
        required : true
    },
    jumlah : {
        type : Number,
        required : true
    }
})

export default mongoose.model('produk',stockBarangSchema);

