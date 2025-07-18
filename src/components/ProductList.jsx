import React, {useState, useEffect} from "react";
import {db} from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../products/ProductCard"; 
import { useActionData } from "react-router-dom";
import './Search.css';
import "./Cart.css"

const shoes = [
  {
    title: "Nike Zoom Freak 4",
    image: "data:image/jpeg;base64,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",
    price: "59.990"
  },
  {
    title: "Adidas Harden Vol. 6",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a95bfc0965ca406181d1ae5e016c880e_9366/Harden_Vol._6_Shoes_Green_GW9032_01_standard.jpg",
    price: "56.990"
  },
  {
    title: "Nike Kobe 5 x-ray",
    image: "https://images.stockx.com/images/Nike-Kobe-5-Protro-Ray-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1751577169",
    price: "79.000"
  },
  {
    title: "Nike Air Jordan XXXIX 'Baron'",
    image: "data:image/jpeg;base64,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",
    price: "139.999"
  },
  {
    title: "Nike GT Cut Cross / light grey, bright crimson",
    image: "data:image/jpeg;base64,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",
    price: "79.990"
  }
];

const ProductList = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      const fetchProduct = async() => {
        try{
             const querySnapshot = await getDocs(collection(db, 'BLACK MAMBA'));
             const productsData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
             }));
             setProducts(productsData);
        } catch (error) {
           console.error("Ошибка на сервере", error);
        }
      }
      fetchProduct();
  }, []);

  const handlesearchChange = (e) => {
    searchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => 
  product.name.toLowerCase().includes(searchQuery));

  return (
    <div>
      <h1>Баскетбольная обувь</h1>
      <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handlesearchChange}/>  
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-card-123">
            <img src={product.image} alt="product.img"  className="image-123"/>
            <h2 className="name-123">{product.name}</h2>
            <p className="description-123">{product.description}</p>
            <p className="price-123">Цена: {product.price}тг</p>
            <button className="AddIn" onClick={() => addToCart(product)}>Добавить в корзину</button>
          </li>
        ))}
      </ul>
      <div className="product-grid">
        {shoes.map((shoe, index) => (
          <ProductCard key={index} {...shoe} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;