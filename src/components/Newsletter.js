import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
 

  const handleDownload = () => {
    const resumeUrl = "/Leon_Resume.pdf"; // Replace with the correct path to your file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "LeonNjoroge_Resume.pdf"; // The name of the downloaded file
    link.click();
  };



  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Want to know more?<br></br> Download my Resume</h3>
              {status === 'sending' && <Alert>Downloading...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
              <p>leonmuraguri@gmail.com / +254 705 805 1905</p>
            </Col>
            <Col md={6} xl={7}>
            <div className="new-email-bx">

              <button
                onClick={handleDownload}
                
              >
              Download Resume
            </button>
            
            </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
