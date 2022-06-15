/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStock = () => {
const[nama_produk, setNamaProduk] = useState("");
const[keterangan, setKeterangan] = useState("");
const[harga, setHarga] = useState("");
const[jumlah, setJumlah] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(()=>{
    getstockById();
},[]);

const getstockById = async() =>{
    const response = await axios.get(`http://27017/stocks/${id}`);
    setNamaProduk(response.data.nama_produk);
    setKeterangan(response.data.keterangan);
    setHarga(response.data.harga);
    setJumlah(response.data.jumlah);
}

const updateStock = async(e) =>{
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:27017/stocks/${id}`, {
            nama_produk,
            keterangan,
            harga,
            jumlah,
        });
        navigate("/");
    } catch (error) {
       console.log(error); 
    }
}
  return (
    <div className="columns">
        <div className="column is-half">
            <form onSubmit={updateStock}>
            <div className="field">
                <label><span className="label">Nama Produk</span></label>
                <div className='control'>
                    <input type="text" className="input" value={nama_produk} onChange={(e)=>setNamaProduk(e.target.value)} placeholder='Nama Produk'/>
                </div>
            </div>
            <div className="field">
                <label><span className="label">Keterangan</span></label>
                <div className='control'>
                    <input type="text" className="input" value={keterangan} onChange={(e)=>setKeterangan(e.target.value)} placeholder='Keterangan Produk'/>
                </div>
            </div>
            <div className="field">
                <label><span className="label">Harga</span></label>
                <div className='control'>
                    <input type="number" className="input" value={harga} onChange={(e)=>setHarga(e.target.value)} placeholder='Harga Produk'/>
                </div>
            </div>
            <div className="field">
                <label><span className="label">Jumlah</span></label>
                <div className='control'>
                    <input type="number" className="input" value={jumlah} onChange={(e)=>setJumlah(e.target.value)} placeholder='Jumlah Produk'/>
                </div>
            </div>
            <div className="field">
                <div className='control'>
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditStock;