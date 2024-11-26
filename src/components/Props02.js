import Box from './Box';
import{useState} from 'react';
function Props02() {

    //배열이 state 변수 처리 - > 재레던더링이 일어나도 데이터가 유지
    let [textArr, setTextArr] = useState(['아침','점심','저녁','야식']);
    let [detailArr, setDetailArr] = useState(['배고프다','졸리다','피곤하다','행복하다']);
    //let [num, setNum] = useState(0);
    
    return(
        <div>   
            {
                textArr.map((item, index)=>{
                    return <Box text={textArr[index]} detail={detailArr[index]}/>
                })
            }
            <button onClick={()=>{
                //이버튼을 누르면 화면에 내용이 추가로 표시됩니다.
                //두번째 야식, 살찐다
                let temp = [...textArr];  //깊은 복사
                temp.push('두번째 야식');

                let temp2 = [...detailArr];                
                temp2.push('살찐다');

                //setNum(num+1); // state에 기본타입 변수(숫자형)가 들어가있음
                setTextArr(temp); // state에 참조타입(배열) 변수가 들어가있음
                setDetailArr(temp2); //주소가 그대로라 재렌더링 안일어남
                //새로운 배열이 들어있는 주소로 바뀌어야 렌더링 됨
                //깊은 복사 하면 된다
                
            }}>추가 버튼</button>
        </div>     
    )    
};

export default Props02;