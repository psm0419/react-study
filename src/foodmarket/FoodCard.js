import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FoodCard({food, foods, index}) {
    return ( //최소한으로 반복 시키려고 카드만 가져옴 row, col 없이 하는게 좋음
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{foods[index].title}</Card.Title>
                <Card.Text>{foods[index].content}</Card.Text>
                <Card.Text>{foods[index].price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>

    )
}

export default FoodCard;