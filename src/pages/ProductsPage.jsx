import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("db/product.json");
      const data = await res.json();
      setData(data);
    })();
  });
  return (
    <div className="container">
      <h1>Our All product</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((product, i) => (
          <div key={i} className="col">
            <div className="card h-100">
              <img src={product?.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="fw-bold ">{product?.category}</h6>
                <h4 className="card-title">{product?.name}</h4>
                <h5>${product?.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
