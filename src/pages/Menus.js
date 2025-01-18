import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../assets/menu/burger-11.jpg";
import Image2 from "../assets/menu/burger-12.jpg";
import Image3 from "../assets/menu/burger-13.jpg";
import Image4 from "../assets/menu/burger-14.jpg";
import Image5 from "../assets/menu/burger-15.jpg";
import Image6 from "../assets/menu/burger-16.jpg";
import Image7 from "../assets/menu/burger-17.jpg";
import Image8 from "../assets/menu/burger-18.jpg";
import "../styles/HomeStyles.css";

// Mock Data for Advanced Menu


// Rating Rendering Function
const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={`half-${i}`} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const Menus = ({ addToCart }) => {

  const advancedMenuItems = [
    { id: "0001", image: Image1, title: "Crispy Chicken", description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw", rating: 5, price: 699 },
    { id: "0002", image: Image2, title: "Ultimate Bacon", description: "House patty, cheddar cheese, bacon, onion, mustard", rating: 4.5, price: 799 },
    { id: "0003", image: Image3, title: "Black Sheep", description: "American cheese, tomato relish, avocado, lettuce, red onion", rating: 4, price: 569 },
    { id: "0004", image: Image4, title: "Vegan Burger", description: "Plant-based patty with lettuce, tomato, and mustard", rating: 3.5, price: 599 },
    { id: "0005", image: Image5, title: "Double Burger", description: "Two patties, cheddar cheese, mustard, pickles, tomatoes", rating: 3.0, price: 659 },
    { id: "0006", image: Image6, title: "Turkey Burger", description: "Turkey patty, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 3, price: 579 },
    { id: "0007", image: Image7, title: "Smokey House", description: "Patty, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 2.5, price: 499 },
    { id: "0008", image: Image8, title: "Classic Burger", description: "Cheddar cheese, ketchup, mustard, pickles, onion", rating: 2.0, price: 689 },
  ];


  return (
    <div>
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR CRAZY BURGERS</h2>
              <p className="para">
                These buns aren't just carriers; they are the unsung heroes, holding together the symphony of flavors that dance in your mouth with every bite.
              </p>
            </Col>
          </Row>
          <Row>
            {advancedMenuItems.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={item.image} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div>{renderRatingIcons(item.rating)}</div>
                    <Card.Text className="fw-bold mt-2">Price: {item.price.toFixed(2)}/-</Card.Text>
                    <Button variant="primary" onClick={() => addToCart(item)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Section 3: Promotional Ads */}
          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>FIRST BURGER</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Menus;
