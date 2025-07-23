import React from "react";
import styles from "../normalfetch/noramlfetch.module.css";
const page = async () => {
  const data = await fetch("https://fakestoreapi.com/products/1");
  const product = await data.json();

  console.log(product);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.categoryTag}>{product.category}</div>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.footer}>
            <div className={styles.price}>${product.price}</div>
            <button className={styles.button}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
