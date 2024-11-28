import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.js';


function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate(); //경로 조작 함수

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/*
            1. css 이미지 경로
            
            2. js에서는 import 후 사용
            <img src={banner_bg}></img>

            3. public 폴더에 저장후 사용
            img src = {'/image/food1.jpg'}
            src={process.env.PUBLIC_URL + '/image/food1.jpg'}  --권장

            package.json
            "homepage" : "/newurlpath" 홈페이지 경로
            */}
            

            <Routes>
                <Route path='/' element={<Home foods={foods}/>}></Route>            
                <Route path='/detail' element={<h1>detail page</h1>}></Route>
                <Route path='/info' element={<h1>info page</h1>}></Route>                
            </Routes>

            {/* <Container>
                <Row>
                    <Col md={4} sm={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food1.jpg'} />
                        <Card.Body>
                            <Card.Title>{foods[0].title}</Card.Title>
                            <Card.Text>{foods[0].content}</Card.Text>
                            <Card.Text>{foods[0].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body></Card>
                    </Col>
                    <Col md={4} sm={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={'/image/food2.jpg'} />
                        <Card.Body>
                            <Card.Title>{foods[1].title}</Card.Title>
                            <Card.Text>{foods[1].content}</Card.Text>
                            <Card.Text>{foods[1].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col md={4} sm={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={'/image/food3.jpg'} />
                        <Card.Body>
                            <Card.Title>{foods[2].title}</Card.Title>
                            <Card.Text>{foods[2].content}</Card.Text>
                            <Card.Text>{foods[2].price}</Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default FoodMarket;