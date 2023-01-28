import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
import { Cartcontext } from "../../Context/Contex";

const Product = () => {
  const [AllProduct, setAllProduct] = useState([]);

  useEffect(() => {
    let firstName = sessionStorage.getItem("firstName");
    if (firstName === "" || firstName === null) {
      window.location.href = "/login";
    }
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `https://dummyjson.com/products`,
    })
      .then((res) => {
        console.log("cek:", res);
        setAllProduct(res.data.products);
      })
      .catch((error) => {
        console.error(error);
        alert("Error, try reloading the page");
      });
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log("dis:", Globalstate);

  return (
    <div>
      <div className="container">
        <div className="grid__img">
          {AllProduct &&
            AllProduct.map((product) => {
              product.quantity = 1;
              return (
                <>
                  {/* All-Products-Data */}
                  <div className="card__product">
                    <div>
                      <img
                        className="img__thumbnail"
                        src={product.thumbnail}
                        alt="All Products"
                      />
                    </div>
                    <div className="product__info">
                      <h4>Brand {product.brand}</h4>
                      <h4>{product.title}</h4>
                      <h4>${product.price}</h4>
                    </div>

                    <div key={product.id}>
                      <Link
                        className="detail__click"
                        to={`/detail-product/${product.id}`}
                      >
                        Detail
                      </Link>
                    </div>

                    <div>
                      <Link
                        className="btn__detail"
                        onClick={() =>
                          dispatch({ type: "ADD", payload: product })
                        }
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                  {/* End-All-product-data */}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
