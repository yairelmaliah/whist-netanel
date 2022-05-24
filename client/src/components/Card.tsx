import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

const ProductCard = (props: any) => {
  return (
    <Card
      bordered={true}
      hoverable 
      style={{
        width: 240,
        margin: '2rem',
        border: '1px solid blue',
      }}
      cover={
        <img
          alt='example'
          src={props.imageUrl}
          //          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }
    >
      <Meta title={props.title} description={props.description} />

      <Button
        onClick={() => props.handleClick(props)}
        type='primary'
        style={{ marginTop: '1rem' }}
        color='red'
      >
        Buy
      </Button>
    </Card>
  );
};

export default ProductCard;
