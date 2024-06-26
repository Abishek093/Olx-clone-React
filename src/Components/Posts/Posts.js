import React, { useContext, useEffect, useState } from "react";

import Heart from "../../assets/Heart";
import "./Post.css";
import { FirebaseContext } from "../../store/Context";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/config";
import { postContext } from "../../store/postContext";
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [products, setProducts] = useState([]);
  const {setPostDetails} = useContext(postContext)
  // const { Firebase, auth, db } = useContext(FirebaseContext)
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <div className="card"
                onClick={()=>{
                  setPostDetails(product)
                  navigate('/view')
                }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                  <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name">{product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <div className="card"
                onClick={()=>{
                  setPostDetails(product)
                  navigate('/view')
                }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                  <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name">{product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
