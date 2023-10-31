import React, { Component } from 'react';
import { Menu, Drawer, Input, Row, Col } from 'antd';
import {
  MenuFoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import Logo from '../../assets/logo.png';

import './style.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Navbar({ onSearch }) {
  const [visible, setVisible] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [isDrawer, setDrawer] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row className="navbar_container">
      <Col md={5} sm={19} className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
      </Col>
      <Col md={12} className="search_input">
        <Input
          placeholder="What do you want to buy today?.."
          style={{
            padding: 10,
          }}
          onChange={({ target: { value } }) => setSearch(value)}
          suffix={
            <SearchOutlined
              onClick={() => onSearch(search)}
              style={{
                cursor: 'pointer',
              }}
            />
          }
        />
      </Col>
      <Col md={7} className="nav_options_container">
        <ul className="nav_options">
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Wish list</a>
          </li>
          <li>
            <a href="#" className="basket">
              Basket{' '}
              <span
                style={{
                  padding: '0px 3px',
                }}
              >
                <ShoppingCartOutlined
                  style={{
                    fontSize: 20,
                  }}
                />
              </span>
            </a>
          </li>
        </ul>
      </Col>
      <Col sm={5} style={{ textAlign: 'end' }} className="drawer_container">
        <MenuFoldOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
          onClick={() => setDrawer(true)}
        />
        <Drawer
          placement="right"
          onClose={() => setDrawer(false)}
          open={isDrawer}
        >
          <ul className="drawer_options">
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Wish list</a>
            </li>
            <li>
              <a href="#" className="basket">
                Basket{' '}
                <span
                  style={{
                    padding: '0px 3px',
                  }}
                >
                  <ShoppingCartOutlined
                    style={{
                      fontSize: 20,
                    }}
                  />
                </span>
              </a>
            </li>
          </ul>
        </Drawer>
      </Col>
    </Row>
  );
}
export default Navbar;
