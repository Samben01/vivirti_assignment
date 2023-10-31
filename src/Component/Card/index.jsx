import React from 'react';
import { Card, Rate } from 'antd';
const { Meta } = Card;

import './style.scss';
import { HeartOutlined } from '@ant-design/icons';

const PriceCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      className="card_custom"
      cover={
        <React.Fragment>
          <img
            src={product.thumbnail}
            alt={product.category}
            height={200}
            style={{
              objectFit: 'cover',
            }}
          />
          <HeartOutlined />
        </React.Fragment>
      }
    >
      <Meta
        title={product.title}
        description={product.description}
        className="meta_custom"
      />
      <span className="meta_price">${product.price}</span>
      <div>
        <Rate
          disabled
          defaultValue={product.rating}
          style={{
            fontSize: 12,
            marginTop: 5,
          }}
        />
      </div>
    </Card>
  );
};
export default PriceCard;
