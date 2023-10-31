import React from 'react';
import { Row, Col } from 'antd';

import Payment from '../../assets/payment.png';

import './style.scss';
import {
  AndroidFilled,
  AppleFilled,
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
        <Col md={12} sm={24} span={12} className="footer_container">
          <Row>
            <Col md={8} sm={24} className="footer_links">
              <h4>Company Info</h4>
              <ul>
                <li>About</li>
                <li>Social responsibility</li>
                <li>Affiliate</li>
                <li>Fashion blogger</li>
              </ul>
            </Col>
            <Col md={8} sm={24} className="footer_links">
              <h4>Help & Support</h4>
              <ul>
                <li>Shipping info</li>
                <li>Returns</li>
                <li>How to order</li>
                <li>How to track</li>
                <li>Size chart</li>
              </ul>
            </Col>
            <Col md={8} sm={24} className="footer_links">
              <h4>Customer care</h4>
              <ul>
                <li>Contact Us</li>
                <li>Payment</li>
                <li>Bonus point</li>
                <li>Notices</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={24}>
          <Row className="icons_container">
            <Col md={16} sm={12} className="footer_icons">
              <h4>Social</h4>
              <ul>
                <li>
                  <FacebookFilled className="social-icons" />
                </li>
                <li>
                  <TwitterCircleFilled className="social-icons" />
                </li>
                <li>
                  <InstagramFilled className="social-icons" />
                </li>
                <li>
                  <GithubFilled className="social-icons" />
                </li>
              </ul>
            </Col>
            <Col md={8} sm={12} className="footer_icons">
              <h4
                style={{
                  textAlign: 'end',
                }}
              >
                Platform
              </h4>
              <ul
                style={{
                  justifyContent: 'end',
                }}
              >
                <li>
                  <AndroidFilled className="social-icons" />
                </li>
                <li>
                  <AppleFilled className="social-icons" />
                </li>
              </ul>
            </Col>
          </Row>
          <div className="sign_up">
            <h4>SIGN UP</h4>
            {/* <Row className="sign_up_input">
              <Col md={18} sm={18}>
                <input placeholder="your email" />
              </Col>
              <Col md={4} sm={4}>
                <button type="button">Subscribe</button>
              </Col>
            </Row> */}
            <div className="sign_up_input">
              <input placeholder="your email" />
              <button type="button">Subscribe</button>
            </div>
            <small>
              By clicking the subscribe button, you are agreeing to our{' '}
              <a href="#">Privacy & cookie policy </a>
            </small>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: 25,
        }}
      >
        <Col md={12} sm={24} className="copyrights_text">
          <small>
            &copy; 2010 - {new Date().getFullYear()} All rights reserved
          </small>
          <ul>
            <li>
              <a href="#">Privacy center</a>
            </li>
            <li>
              <a href="#">Privacy & cookies policy</a>
            </li>
            <li>
              <a href="#">Manage cookies</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Copyrights notes</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
          </ul>
        </Col>
        <Col md={12} sm={24} className="payment_container">
          <h4
            style={{
              marginTop: 0,
            }}
          >
            WE ACCEPT
          </h4>
          <img
            src={Payment}
            alt="payment"
            style={{
              width: '100%',
            }}
          />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
