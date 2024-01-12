import React, { useContext } from 'react'
import styles from './CartItem.module.css'
import { CartItemContext } from '../../Contexts'

const CartItem = () => {

const [ cartItemCount, setCartItemCount ] = useContext(CartItemContext);

  return (

   <article className={styles.article}>

    <figure className={styles.figure}>

    <img className={styles.img} src='src\assets\images\image-product-1-thumbnail.jpg' />

    <figcaption className={styles.caption}>

    <h3 className={styles['item-name']}>fall limited edition sneakers</h3>

    <p className={styles.price}>
        <span className={styles['unit-price']}>$125.00</span> &nbsp;x&nbsp;
        <span className={styles.quantity}>{cartItemCount}</span>
        <span className={styles['total-price']}>{`$${cartItemCount * 125}.00`}</span>
    </p>

    </figcaption>

    <span className={styles['delete-box']} >

    <svg className={styles['delete-icon']} onClick={() => setCartItemCount(0)}><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" /></svg>

    

    </span>


    </figure>

    </article>

  )
}

export default CartItem