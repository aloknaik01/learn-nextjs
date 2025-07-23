import Image from "next/image";
import React from "react";
import styles from "../nextjsfetch/nextjsdatafetch.module.css";
async function page(props) {
  const data = await props.searchParams;
  const prod = await fetch(`https://fakestoreapi.com/products/${data.num}`);
  const product = await prod.json();

  console.log(product);
  console.log("Hello from next js fetch");

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.body}>
          <div className={styles.category}>{product.category}</div>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.footer}>
            <span className={styles.price}>${product.price}</span>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
