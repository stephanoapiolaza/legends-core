import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.scss'; // Archivo para los estilos personalizados
import LoginBackground from './../../assets/login-bg.jpg'; // Archivo para los estilos personalizados
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { RoutingPath } from 'screens/routing';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="overflow-hidden p-0 m-0">
      <Row className="g-0">
         {/* Columna izquierda con el control de juego */}
         <Col md={7} className="d-none d-md-block right-side d-flex justify-content-center align-items-center">
            <img src={LoginBackground} alt="Game Controller" className="controller-image vh-100 wh-100" />
        </Col>
        {/* Columna derecha con las figuras */}
        <Col md={5} className="left-side d-flex justify-content-center align-items-center">
        <>
        <div className="background">
    <div className="login-container">
    <div className='row g-3 align-content-center justify-content-center text-center'>
       <div className='col-12 text-center justify-content-center'>
       <div className="socket mb-5">
			<div className="gel center-gel">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c1 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c2 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c3 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c4 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c5 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c6 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c7 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c8 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c9 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c10 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c11 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c12 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c13 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c14 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c15 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c16 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c17 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c18 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c19 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c20 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c21 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c22 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c23 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c24 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c25 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c26 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c28 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c29 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c30 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c31 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c32 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c33 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c34 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c35 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c36 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c37 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
      </div>                  </div>
                  <div className='col-12 text-center align-content-center'>
                    <p className='display-3 fw-bold text-secondary'>LEGENDS</p>
                  </div>
                  <div className='col-auto justify-content-center text-center align-content-center'>
                    <button  onClick={() => navigate(RoutingPath.pickGameAmateur)}  type="button" className="btn btn-lg btn-secondary text-white rounded-pill pt-2 pb-2 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon className="mx-1" icon={faTrophy} size="1x" />
                      Ingresar como Jugador Amateur
                      </button>
                      
                  </div>
                  <div className='col-auto justify-content-center text-center align-content-center'>
                    
                      <button    onClick={() => navigate(RoutingPath.pickGameHunter)} type="button" className="btn btn-lg btn-outline-primary rounded-pill pt-2 pb-2  d-flex justify-content-center  text-center align-items-center">
                      <FontAwesomeIcon className="mx-1" icon={faAddressBook} size="1x" />
                      Ingresar como Gamer Hunter
                      </button>
                  </div>
                  </div>
    </div>
  </div>
  
    </>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
