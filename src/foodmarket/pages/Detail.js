import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Detail.css';

function Detail({ foods }) {

    let [orderCount, setOrderCount] = useState(0);
    const [smShow, setSmShow] = useState(false);
    let [viewStatus, setViewState] = useState('');
    

    // let {index} = useParams();
    //foods[index]  foods 필요

    let { id } = useParams();
    //foods안에 id가 파라미터로 넘어온 id랑 같은 데이터 찾기
    let food = foods.find((item) => {
        return item.id == id
    });


    useEffect(()=>{
        setViewState(' end'); //뒤에 붙이는 거라 앞에 공백 필요 이미 있는 클래스에 뒤에 공백 있으면 없어도 됨
    }, []);

    // useEffect(실행할 함수, 의존성 배열)
    // useEffect(실행할 함수{ return ()=>{clean up function}}, 의존성 배열)
    // return 뒤에 있으면 안됨
    useEffect(() => {
        console.log('useEffect [] 실행');
    }, []); //의존성 배열 비어있음 -> 로딩(mout) 할때 한번만

    useEffect(() => {
        console.log('useEffect 실행');
    }); //의존성 배열 없음 -> 로딩(mount), 업데이트

    useEffect(() => {
        console.log('useEffect [orderCount] 실행');
        return () => { //clean up function
            console.log('useEffect [orderCount] return 실행'); // 라면 , 설거지->라면 순서
        };
    }, [orderCount])
    //렌더링후 몇초 후에 실행
    useEffect(()=>{
        //2초후 smShow값을 false로 변경
        let tmout = setTimeout(()=>{
            setSmShow(false);
        }, 2000);  //ms 시간이 지난 뒤에 함수 실행
        return ()=>{
            clearTimeout(tmout);
        }
        //setTimeout
        //setInterval
        //비동기 처리   --> 클린업 펑션으로 처리하면 클리어 가능
    }, []); //1회만 처리

    //객체:밸류 형태
    const redTextStyle = {
        color: "red"
    };
    const blueTextStyle = {
        color: "blue"
    };

    //밸류가 객체형태
    const styles = {
        redStyle : { //styles.redStyle
            color: "red"
        },
        blueStyle : {
            color: "blue"
        },
        fontBugBold : {
            fontSize : "2rem",
            fontWeight: "bold"
        }
    }
    
    if (food == undefined || food == null) {
        return (
            <div>
                <h1>잘못된 접근</h1>
            </div>
        )
    }
    /*
        조건에 따라서 다른 스타일을 적용
        가격표시
        1만원 이상 -> 빨간색
        1만원 미만 -> 파란색

        1. js 객체
            const priceTextStyle = {
                color: food.price >= 10000 ? 'red' : 'blue'
        }
            <p style={priceTextStyle}>{food.price}</p> 선언없이 바로 넣어도 됨
        2. js 함수 형태
            const priceTextStyleFunc = (price)=>{
                return color: food.price >= 10000 ? 'red' : 'blue'
        }
        <p style={priceTextStyleFunc(food.price)}>{food.price}</p>
        3. css class 연계 활용
            //단일
            <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
            //여러개
            <p className={'text-strong '+ (food.price >= 10000 ? 'price-red' : 'price-blue')}>{food.price}</p>
            //join 함수
            <p className={['text-strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")}>{food.price}</p>
            //백틱 문자 활용 ``
            <p className={`text-strong ${food.price >=10000 ? 'price-red':'price-blue'}`}>{food.price}</p>
            //변수 활용
            const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';
            <p className={'text-strong' + priceClass}>{food.price}</p>
        4. css class + use State + useEffect 사용
            let [viewStatus, setViewState] = useState('');
            useEffect(()=>{
                setViewState(' end');
            }, []);
    
    */

    const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }
    

    const priceTextStyleFunc = (price)=>{
        if(price >=10000){
            return {color : 'red'}
        } else{
            return {color : 'blue'}
        }
    }

    

    return (
        <Container className={"start" + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p style={redTextStyle}>{food.content}</p>
                    <p className={'text-strong' + priceClass}>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={() => {
                            if (orderCount > 0) {
                                setOrderCount(orderCount - 1);
                            }
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
            
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        환영합니다~
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </Container>
    );
}

export default Detail;