import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banner_bg from './banner_bg.jpg';
import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import FoodCard from './FoodCard.js';


function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
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
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            <Container>
                <Row>                    
                        {
                            foods.map((food, index) => { //foods는 배열전체  food는 객체(foods[0] 이런식으로 인덱스 하나만 저장)
                                return (
                                    <Col md={4} sm={4}><FoodCard index={index} food={food} foods={foods}/></Col>
                                )
                            })
                        }                    
                </Row>
            </Container>
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