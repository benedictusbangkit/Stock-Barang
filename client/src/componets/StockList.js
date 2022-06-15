
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const StockList = () => {    
    const [stock, setStock] = useState([]);
     useEffect(()=> {
        getStock();
    },[]);
    const getStock = async() => {
        const response = await axios.get("http://localhost:27017/stocks");
        setStock(response.data);
    }
    const deleteStock = async ()=>{
        try {
            await axios.delte(`http://localhost:21017/stocks/${id}`);
            getStock();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='columns'>
        <div to="/add" className='column is-half'>
            <Link className="button is-success">Add New</Link>
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>Nama Produk</th>
                        <th>Keterangan</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stock, index) => (
                        <tr key={stock._id}>
                        <td>{index + 1}</td>
                        <td>{stock.nama_produk}</td>
                        <td>{stock.keterangan}</td>
                        <td>{stock.harga}</td>
                        <td>{stock.jumlah}</td>
                        <td>
                            <Link to={`edit/${stock._id}`} className='buttton is-info is-small'>Edit</Link>
                            <button onClick={()=> deleteStock(stock._id)} className='buttton is-danger is-small'>Deletet</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
         </div>
    </div>
  );
};

export default StockList;