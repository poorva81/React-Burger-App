import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../assets/about/pizza.png";
import Salad from "../assets/about/salad.png";
import Delivery from "../assets/about/delivery-bike.png";
import "../styles/HomeStyles.css";
// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Originality is at the core of our craft. We believe that every burger deserves a bun that stands out, 
    which is why our buns are designed with unique recipes that offer a delightful twist on the traditional.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `At our bakery, we prioritize quality above all else. Each of our burger buns is crafted using the finest ingredients, ensuring an unmatched flavor and texture in every bite.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Our streamlined process ensures that you receive your freshly baked buns in the fastest time possible, without compromising on quality.`,
  },
];

const About = () => {
  return (
    <>
      {/* Section 2: Features */}
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center my-lg-5">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              At the heart of every great burger lies the unassuming yet indispensable burger bun.
              It's not just a vessel for the 
              juicy patty and tantalizing toppings, but a key player in creating a balanced, mouthwatering bite.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
