import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodCard from '../components/FoodCard.js';
import banner_bg from '../images/banner_bg.jpg';



function Home({foods}) {
    return (
        <div>
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            <Container>
                <Row>
                    {
                        foods.map((food, index) => { //foods는 배열전체  food는 객체(foods[0] 이런식으로 인덱스 하나만 저장)
                            return (
                                <Col md={4} sm={4}><FoodCard index={index} food={food} foods={foods} /></Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;