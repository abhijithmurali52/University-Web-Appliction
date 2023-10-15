import React from "react";
import { Image, Container } from "react-bootstrap";

const Vission = () => {
  return (
    <>
      <div>
        <Image
          src="/image/vmm.jpeg"
          style={{ height: "25rem", width: "40rem" }}
        ></Image>
        <div style={{ float: "right", marginRight: "4rem", marginTop: "5rem" }}>
          <h2 style={{color:"brown"}}>
            <ins>Vission</ins>
          </h2>
          <br />
          <br />
          <p>
            To become an outstanding Technological University at the cutting
            edge of Science <br />
            and Technology that produces world class Knowledge-delivery,
            Research, Extension <br />
            and Leadership in Technology innovation for Industry and Society.
          </p>
        </div>
        <Image
          src="image/vmm2.jpeg"
          style={{ float: "right", height: "25rem", width: "44.3rem" }}
        ></Image>
        <br />
        <br />
        <br />
        <div>
          <h2
            style={{
              float: "right",
              marginRight: "5rem",
              marginBottom: "5rem",
              textAlign: "center",color:"brown"
            }}
          >
            <ins>Mission</ins>
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p style={{ marginLeft: "2rem", textAlign: "center" }}>
            To plan the development of technical education ,to establish
            value-based and need-based education and training in engineering and
            technology, with a view to generate qualified and competent
            manpower, responsive to technological and societal needs.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image src="image/vmm3.jpeg" style={{ height: "25rem" }}></Image>
        <div style={{ float: "right", marginRight: "1rem" }}><br/><br/>
       
          <h2 style={{marginLeft:"3rem",color:"brown"}}>
            <ins>Mandate</ins><br/><br/>
          </h2>
          <p>
            The Visvesvaraya Technological University has been established by
            the Government<br/> of the Karnataka in order to Promote planned and
            sustainable development of <br/>technical education consistent with state
            and national policies. *Design need based <br/>programs that ensure
            adequate human resource of the right kind. *Establish objective<br/>
            evaluation and certification systems for students,programs and
            institutions. *Collaborate<br/> with national and international
            institutions R&D establishments organizations like AICTE, <br/>MHRD, UGC,
            etc.industry and user agencies.
          </p>
        </div>
      </div>
    </>
  );
};
export default Vission;
