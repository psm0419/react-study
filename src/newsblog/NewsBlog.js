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
                            <h4><span onClick={() => {
                                flag == true ? setFlag(false) : setFlag(true)
                            }}>{news[index]}</span>
                                <span onClick={() => {
                                    let temp = [...count];
                                    temp[index]++;
                                    setCount(temp); 
                                }}> ❤ </span>{count[index]}
                            </h4>
                            <p>내용 무</p>
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
            {flag == true ? <Modal news={news} setNews={setNews} bgColor={'lightgreen'}/> : null}

        </div>
    )
}

export default NewsBlog;