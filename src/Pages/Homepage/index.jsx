import React from 'react';
import PriceCard from '../../component/Card';

import './style.scss';
import { Pagination, Select, Spin } from 'antd';

const HomePage = ({ text }) => {
  const [products, setProducts] = React.useState({
    list: [],
    total: 12,
  });
  const [pagination, setPagination] = React.useState({
    skip: 0,
    size: 12,
  });
  const [catagories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [productsList, categories] = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://dummyjson.com/products/categories'),
        ]);
        const { products, limit } = await productsList.json();
        const categoriesList = await categories.json();
        setCategories(
          categoriesList?.map(cat => ({ value: cat, label: cat })) || []
        );
        setProducts({
          list: products,
          total: limit,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  async function searchProduct() {
    try {
      setLoading(true);
      const { products, limit } = await fetch(
        `https://dummyjson.com/products/search?q=${text}`
      ).then(res => res.json());
      setProducts({ total: limit, list: products });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    if (text) searchProduct();
  }, [text]);

  const start = pagination.size * pagination.skip;
  const end = pagination.size * pagination.skip + pagination.size;
  const allProducts = [...products.list];
  const currentProduct = allProducts.slice(start, end);
  return (
    <Spin tip="Loading..." spinning={loading}>
      <section className="page-section">
        <div className="info-container">
          <h3 className="info-heading">Lorem ipsum</h3>
          <p
            style={{
              marginBottom: 10,
            }}
          >
            Slash sales begins in June. Get upto 60% discount on all products{' '}
            <a href="#" className="read-more">
              Read more
            </a>
          </p>
        </div>
        <div
          style={{
            margin: '25px 0',
          }}
        >
          <Select
            placeholder="Select category"
            onChange={async val => {
              try {
                setLoading(true);
                const { products, limit } = await fetch(
                  `https://dummyjson.com/products/category/${val}`
                ).then(res => res.json());
                setProducts({ total: limit, list: products });
              } catch (err) {
                console.error(err);
              } finally {
                setLoading(false);
              }
            }}
            style={{ width: 300, height: 40 }}
            options={catagories}
          />
        </div>
        <div className="page-container">
          {currentProduct.map(product => (
            <PriceCard product={product} key={product.id} />
          ))}
        </div>
        <div className="pagination_container">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={12}
            pageSize={pagination.size}
            total={products.total}
            onChange={(skip, size) =>
              setPagination({
                size,
                skip: skip - 1,
              })
            }
          />
        </div>
      </section>
    </Spin>
  );
};

export default HomePage;
