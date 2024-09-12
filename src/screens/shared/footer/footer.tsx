import React from 'react';
import {Col, Row, Stack} from "react-bootstrap";
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AzFooter = ({className = 'mt-5'}: { className?: string}) => (
    <footer className={`bg-primary p-5 ${className}`}>
        <Row>
          <Col xs={12} md={3} className="d-flex align-items-center justify-content-center">
            <h1 className={"fw-bold text-white"}>Azlo</h1>
          </Col>
          <Col xs={12} md={5} className="d-flex align-items-center justify-content-center mb-3">
            <p className={"fs-5 mb-1 fw-light text-white text-decoration-underline text-center"}>Política de tratamiento de datos - Terminos y condiciones</p>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
            <Stack gap={3} direction="horizontal">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} className="border text-white rounded-circle p-2" style={{width: '2.5rem', height: '2.5rem'}}/></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} className="border text-white rounded-circle p-2" style={{width: '2.5rem', height: '2.5rem'}}/></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} className="border text-white rounded-circle p-2" style={{width: '2.5rem', height: '2.5rem'}}/></a>
              <a href="#"><FontAwesomeIcon icon={faWhatsapp} className="border text-white rounded-circle p-2" style={{width: '2.5rem', height: '2.5rem'}}/></a>
            </Stack>
          </Col>
        </Row>        
      </footer>
);