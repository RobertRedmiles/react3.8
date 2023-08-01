import { useNavigate } from "react-router-dom";
import styles from './Item.module.css';
import { useState } from 'react';


function Add({ handlerAddProduct }) {
  
  const navigate = useNavigate();
  const [productId, setProductId] = useState("")
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
   const newProduct = {
    id: productId,
    name,
    quantity,
    price,
    discount
   }
    handlerAddProduct(newProduct);
    navigate('/view');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input id="productId"placeholder="Product id"name="productId"value={productId}onChange={(event)=> setProductId(event.target.value)} />
        <input id="name"placeholder="Name"name="name"value={name}onChange={(event)=> setName(event.target.value)} />
        <input id="quantity"placeholder="Quantity" name="quantity"value={quantity}onChange={(event)=> setQuantity(event.target.value)}/>
        <input id="price"placeholder="Price"name="price"value={price}onChange={(event)=> setPrice(event.target.value)} />
        <input id="discount"placeholder="Discount"name="discount"value={discount}onChange={(event)=> setDiscount(event.target.value)} />

        <button type="submit">
          Add
      
        </button>

      </form>
   
      
      
   
    </div>
  )
}
  export default Add