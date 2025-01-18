import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../assets/shop/appstore.png";
import StoreGoogle from "../assets/shop/googleplay.png";
import DownloadImage from "../assets/shop/e-shop.png";
import Brand1 from "../assets/brands/brand-11.png";
import Brand2 from "../assets/brands/brand-12.png";
import Brand3 from "../assets/brands/brand-13.png";
import Brand4 from "../assets/brands/brand-14.png";
import Brand5 from "../assets/brands/brand-15.png";
import Brand6 from "../assets/brands/brand-16.png";
import Brand7 from "../assets/brands/brand-17.png";
import Brand8 from "../assets/brands/brand-18.png";

const Contact = () => {
  const brandsSet1 = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];
  const brandsSet2 = [Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

  return (
    <>
      {/* Mobile App Section */}
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
              Apply the promo code WELCOME20 at checkout to get 20% off your first order.
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brands Section */}
      <section className="brand_section">
        <Container>
          <Carousel>
            {[brandsSet1, brandsSet2].map((brands, idx) => (
              <Carousel.Item key={idx}>
                <div className="d-flex align-items-center justify-content-between">
                  {brands.map((brand, index) => (
                    <div key={index} className="brand_img">
                      <img src={brand} className="img-fluid" alt={`brand-${index + 1}`} />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Crafted with love and precision, each bun is a testament to the
                art of baking—a warm embrace for your favorite fillings,
                ensuring every mouthful is a moment to savor. 🥯
              </p>
              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call: 999-888-7777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
