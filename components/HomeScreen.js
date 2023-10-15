import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <marquee className="my-3">
        <h3>
          Vtu Results Out-Check Exam Result !!!
          <Link to="/result" style={{backgroundColor:"yellow"}}>Click here</Link>Best Of Luck....
        </h3>
      </marquee>

      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/himage3.jpeg"
              styl={{height:"300px"}}
              alt="first slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/himage.jpeg"
              style={{ height: "300px" }}
              alt="second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/himage2.jpeg"
              style={{ height: "300px" }}
              alt="third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/img4.jpg"
              style={{ height: "300px" }}
              alt="forth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/img5.jpg"
              styl={{ height: "300px" }}
              alt="fifth slide"
            />
          </Carousel.Item>
        </Carousel>

        <Row className="my-3">
          <Col md={4}>
            <Link to="/vission">
              <h3>Vision</h3>
            </Link>
            <p>
              Lifelong learning through new pedagogy methods, faculty
              development, adoption of new technologies, collaborative work will
              be undertaken. The new schemes of Govt. like Startup India,
              Digital India, Make in India and such others are indicators to
              move from job seeking to job providing scenario.
            </p>
            <p>
              Faculty and students of the institutions under the umbrella of VTU
              will be encouraged to participate and develop new products, new
              processes and systems.
            </p>
            <Link to="/vission" className="btn btn-warning">
              Read More
            </Link>
          </Col>

          <Col md={4}>
            <Link to="/vission">
              <h3>Mission</h3>
            </Link>
            <p>
              The studentfraternitywill be made to pursue their passion, develop
              innovative skills, set proper goals and execute with time lines.
              They will also be learning how to handle failures and work for
              societal needs with environmental consciousness through various
              innovative mechanism.
            </p>
            <p>
              All the stakeholders of technical education will continuously
              involve to keep their knowledge on par with current science,
              technology and management trends.
            </p>
            <Link to="/vission" className="btn btn-warning">
              Read More
            </Link>
          </Col>

          <Col md={4}>
            <Link to="/vission">
              <h3>Mandate</h3>
            </Link>
            <p>
              Academic and Research activities of the university i.e. choice
              based credit system, grading system includingcontinuous /
              comprehensive evaluation and holistic development of students will
              continue. The existing digital learning platforms and ongoing
              ICT-based educational initiatives would be optimized.
            </p>
            <p>
              Adapting experiential learning initiatives that includes
              Collaborative Learning, Project Based Learning, Problem Based
              Learning, Web-Based.
            </p>

            <Link to="/vission" className="btn btn-warning">
              Read More
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeScreen;