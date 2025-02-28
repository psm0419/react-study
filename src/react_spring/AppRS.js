import './AppRS.css';
import axios from 'axios';
import DrinkItem from './DrinkItem';
import { useState } from 'react';

function AppRS() {

    let [drinkList, setDrinkList] = useState([{ item: '아이스티', type: '차' }]);
    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] = useState(0);
    return (
        <div>
            <h1>AppRS</h1>

            <div>
                <button onClick={() => {
                    //ajax 요청과 같음
                    //ajax  XMLHttpRequest fetch axios                    
                    // axios.get('http://localhost:8080/api/getMsg')

                    //package.json에 proxy 설정 추가
                    //react에서 요청할때는 3000포트로 요청하듯이 경로 작성
                    //spring 서버에 해당 api 요청 경로를 처리하는 url주소 맵핑
                    axios.get('/api/getMsg')
                        .then(response => console.log(response.data))   //정상
                        .catch(error => console.log(error))        //에러발생시
                }
                }>데이터 요청 get</button>

                <br />

                <button onClick={() => {
                    axios.get('/api/getDrinks')
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })   //정상
                        .catch(error => console.log(error))        //에러발생시
                }
                }>데이터 요청 Drinks</button>

                <br />

                <button onClick={() => {

                    let paramtype = '';
                    if (typeFlag) {
                        paramtype = '커피';
                        setTypeFlag(!typeFlag);
                    } else {
                        paramtype = '탄산음료';
                        setTypeFlag(!typeFlag);
                    }

                    axios.get('/api/getDrinksDiv?type="커피"')
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })   //정상
                        .catch(error => console.log(error))        //에러발생시
                }
                }>데이터 요청 DrinksDiv</button>

                <br/>

                <button onClick={() => {
                    //</div>axios.post('/api/getDrinksDrinkItem', { item:'na', type:'coffee' })
                    setNum(num + 1);
                    axios.post('/api/getDrinksNum',
                        String(num),
                        {
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                    )
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => console.log(error))
                }
                }>데이터 요청 post</button>
            </div>



            <hr></hr>
            {
                drinkList.map((item, index) => {
                    return <DrinkItem drinkItem={item} />;
                })

            }
        </div>
    );


}
// npm install axios 설치
export default AppRS;