import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Product.css";
import { Cartcontext } from "../../Context/Contex";

const DetailProduct = () => {
  const [DetailProduct, setDetailProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://dummyjson.com/products/${id}`,
    })
      .then((res) => {
        console.log("cek:", res);
        setDetailProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },);

  const Globalstate = useContext(Cartcontext)
  const dispatch = Globalstate.dispatch;

  return (
    <>
      <div className="main__wrapper">
        <div className="container__detail">
          <div className="product__div">
            {/********** left  ***************/}

            <div className="product__div-left">
              <div className="img__container-detail">
                <img
                  className=""
                  src={DetailProduct.thumbnail}
                  alt="All Products"
                />
              </div>
              {/* <div className="hover__container">
                <div>
                  <img
                    className="img__detail"
                    src={DetailProduct.thumbnail}
                    alt="All Products"
                  />
                </div>

                <div>
                  <img
                    className="img__detail"
                    src={DetailProduct.thumbnail}
                    alt="All Products"
                  />
                </div>

                <div>
                  <img
                    className="img__detail"
                    src={DetailProduct.thumbnail}
                    alt="All Products"
                  />
                </div>
                <div>
                  <img
                    className="img__detail"
                    src={DetailProduct.thumbnail}
                    alt="All Products"
                  />
                </div>
              </div> */}
            </div>

            {/********** right  ***************/}
            <div className="product__div-right">
              <span className="detail__product-name">
                Brand {DetailProduct.brand}
              </span>
              <span className="detail__product-name">
                {DetailProduct.title}
              </span>
              <span className="detail__product-price">
                Price: ${DetailProduct.price}
              </span>
              <div className="detail__product-rating">
                Rating: {DetailProduct.rating}
              </div>
              <div className="detail__product-rating">
                Category: {DetailProduct.category}
              </div>
              <div className="detail__product-rating">
                Stock: {DetailProduct.stock}
              </div>

              <div className="detail__product-rating">
                Diskon: {DetailProduct.discountPercentage}%
              </div>

              <p className="detail__product-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, illo!
              </p>
              <div className="btn__groups-detail">
                <button onClick={()=>dispatch({type: "ADD", payload: DetailProduct})} className="add__cart-btn" type="button">
                  <i className="fas fa-shopping-cart"></i>Add to Cart
                </button>
                <button className="buy__now-btn" type="button">
                  <i className="fas fa-wallet"></i>Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
