import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(props) {

    //javascript 코드
    let title = 'React Study';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [count, setCount] = useState([0, 0, 0]);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);

    let [flag, setFlag] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');

    let [likeSave, setLikeSave] = useState(0);

    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: '20px' }}>{title}</div>
            </div>
            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4><span onClick={() => { //제목 클릭
                                flag == true ? setFlag(false) : setFlag(true) //모달 on/off
                                //어떤뉴스를 눌렀는지 저장해야함
                                setSelectedTitle(news[index]); //item 넣어도 같음
                                setLikeSave(count[index]);
                            }}>{news[index]}</span>
                                <span onClick={() => {
                                    let temp = [...count];
                                    temp[index]++;
                                    setCount(temp);
                                }}> ❤ </span>{count[index]}
                            </h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                let temp = [...news];
                                temp.splice(index, 1);
                                setNews(temp);
                                count.splice(index, 1);
                            }}>삭제</button>
                        </div>
                    )
                })
            }
            {/* <div className='post-list'>
                <h4><span onClick={() => {
                    flag == true ? setFlag(false) : setFlag(true)
                    //setFlag( !flag );
                    //event.stopPropagation(); 부모쪽 이벤트는 하지마라?
                }}>{news[0]}</span>
                    <span onClick={() => { setCount(count + 1); }}> ❤ </span>{count}
                </h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>{news[1]}<span onClick={() => { setCount2(count2 + 1); }}> ❤ </span>{count2}</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]}<span onClick={() => { setCount3(count3 + 1); }}> ❤ </span>{count3}</h4>
                <p>내용 무</p>
            </div> */}

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>어제의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>내일의 뉴스</h4>
                <p>내용 무</p>
            </div> */}
            <button onClick={() => {
                // news[0] = 'Today News';  렌더링 안일어나서 안바뀜
                // setNews(news); 주소가 안바뀌어서 새로운 배열을 만들어야 한다
                // setNews('Today News', '어제의 뉴스', '내일의 뉴스'); 되긴하지만 비효율
                let temp = [...news];
                // temp[0] = 'Today News'; 이렇게 해도 된다
                temp.shift(); // 제일 앞(0인덱스) 삭제
                temp.unshift('Today News'); // 제일 앞에(0인덱스) 추가
                // temp.splice(0, 1, 'Today News') //0인덱스부터 1개 삭제, 뒤에 추가
                setNews(temp);
            }}>제목 변경</button>

            <div>
                <input type='text' id="input_news" value={inputText} onChange={(event)=>{
                    //이벤트 등록해서 사용하는 방식
                    setInputText(event.target.value);
                }}></input>
                <button onClick={()=>{
                    //입력된 값 확인 -> news 배열에 추가저장

                    //onChange 안쓰는 방법
                    // let temp = [...news];
                    // temp.push(document.getElementById('input_news').value);
                    // setNews(temp);
                    // document.getElementById('input_news').value = ""; //입력하고 공백
                    inputText = inputText.trim();
                    if(inputText != ''){ //다른방법: inputText.length == 0 , null , undefined
                        //전제조건: 양측에 있는 띄어쓰기는 제외(trim)
                        //trim은 비파괴적 메서드라 원본은 띄어쓰기 남아있음 밖에서 트림하고 들어와야함
                        let temp = [...news];                        
                        temp.push(inputText);
                        setNews(temp);
                        setInputText(''); //이거 쓰고 위에 value 만들어야 입력하고 공백됨
                        // let tempCount = [...count]; 위에서 재렌더링 일어나니까 필요없음
                        count.push(0); //위에 temp push랑 맞춰줘야 인덱스 맞음
                    }
                }}>발행</button>
            </div>
            {flag == true ? <Modal like={likeSave} title={selectedTitle} news={news} setNews={setNews} bgColor={'lightgreen'} /> : null}


        </div>
    )
}

export default NewsBlog;