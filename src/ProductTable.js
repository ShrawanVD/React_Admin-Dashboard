import React from 'react';
import product1 from "./images/img1.jpeg";
import product2 from "./images/img2.jpeg";

const ProductTable = ({ products }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="w-5" style={{color: "black"}}></th>
            <th className="w-50" style={{color: "black"}}>Product Name</th>
            <th className="w-5" style={{color: "black"}}>Stocks</th>
            <th className="w-5" style={{color: "black"}}>Price</th>
            <th className="w-5" style={{color: "black"}}>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="table-row-black">
                <img src={product1} alt="First Image" style={{
                width: "30px", 
                height: "30px", 
                objectFit: "cover",
                borderRadius: "10px"
              }} />
              <td style={{
                alignItems: "flex-start"
              }}>
              <h3>{product.productName}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      </td>
              <td>{product.stocks}</td>
              <td>{product.price}</td>
              <td>{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
