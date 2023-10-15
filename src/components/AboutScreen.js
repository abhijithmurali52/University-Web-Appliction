import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <div style={{ backgroundColor: "lightskyblue" }}>
        <h2 style={{ textAlign: "center" }}>
          About <b>VTU</b>
        </h2>
        <Container>
          <Image src="image/img6.jpg" className="about-image"></Image>
          <div className="div-style">
            <h4 style={{ marginLeft: "7rem" }}>
              Visvesvaraya Technological University
            </h4>
            <p className="p-style">
              VTU is one of the largest Technological Universities in India with
              24 years of
              <br /> Tradition of excellence in Engineering & Technical
              Education, Research and Innovations.
              <br /> It came into existence in the year 1998 to cater the needs
              of Indian industries for <br />
              trained technical manpower with practical experience and sound
              theoretical knowledge.
              <br />
              University has very successfully achieved the tremendous task of
              bringing various colleges
              <br />
              affiliated earlier to different Universities, with different
              syllabi, different procedures
              <br /> and different traditions under one umbrella.
            </p>
          </div>
          <br />
          <br />

          <div>
            <Image src="image/img7.jpeg" className="about-image2"></Image>
            <div style={{ marginTop: "5rem" }}>
              <p>
                The University has revised the syllabus for UG and PG from the
                academic year 2014-15. It has four <br />
                regional centers across the State of Karnataka in respectively.
                University is comprised of a<br /> multi-disciplinary and
                multi-level institution offering wide ranging programmes in
                engineering, technology <br />
                and Management. The University is making steady progress in
                developing and providing best technical <br />
                environment for education and will continue to serve the nation
                in coming years.
                <br />
                Equipped with the extremely rich resources of an outstanding
                student body and faculty strong partnerships with business,
                industry, and government and support from alumni and friends,
                VTU is designing a future of global preeminence, leadership, and
                service.
                <br />
                <br />
                Today, we’re still changing the world. Since those early
                beginnings students and alumni have gone on to design and
                engineer the tools, buildings, and products that helped define
                their generations. And tomorrow’s VTU students will do the same.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "8rem" }}>
            <Row>
              <Col md={3}>
                <Image
                  src="image/belagavi.jpeg"
                  style={{ height: "11.5rem", width: "17.3rem" }}
                ></Image>
                <p style={{ textAlign: "center" }}>Belagavi</p>
              </Col>
              <Col md={3}>
                <Image src="image/bengaluru.jpeg"></Image>
                <p style={{ textAlign: "center" }}>Bengaluru</p>
              </Col>
              <Col md={3}>
                <Image src="image/Kalaburagi.jpeg"></Image>
                <p style={{ textAlign: "center" }}>Kalaburagi</p>
              </Col>
              <Col md={3}>
                <Image src="image/Mysuru.jpeg"></Image>
                <p style={{ textAlign: "center" }}>Mysuru</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default AboutScreen;
