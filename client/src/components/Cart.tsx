import { Button } from 'antd';
import React, { useState } from 'react';
import { makeOrders } from '../api';

const Cart = (props: any) => {

  const [display, setDisplay] = useState(false);

  const showCartItem = (p: any) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h4>{p.title}</h4>
        <h5>{p.price}</h5>
      </div>
    );
  };

  const handlePay = async () => {
    const result = await makeOrders(props.cartItems.map((p: any) => p.id));
    setDisplay(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button
        type='primary'
        onClick={() => setDisplay(!display)}
        style={{ width: '20rem' }}
      >
        Shopping Cart {props.cartItems.length}
      </Button>
      {display && (
        <div
          style={{
            width: '20rem',
            position: 'absolute',
            background: 'antiquewhite',
            padding: '2rem',
            zIndex: 2,
          }}
        >
          <h2>Cart</h2>
          <div style={{ marginBottom: '1rem' }}>
            {`Total: ${props.cartItems.reduce(
              (acc: any, data: any) => data.price + acc,
              0
            )}`}
          </div>

          {props.cartItems.length ? (
            props.cartItems.map((item: any) => showCartItem(item))
          ) : (
            <div>No items</div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type='primary' onClick={handlePay}>
              Pay
            </Button>
            <Button onClick={() => setDisplay(false)} danger type='dashed'>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
