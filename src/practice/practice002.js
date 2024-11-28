import { useState } from "react";
import './practice002.css';
import ColorBox from "./ColorBox";

//클래스로 한 방법
// function Practice002() {

//     let [box, setBox] = useState([<div className="box-red"></div>,
//         <div className="box-blue"></div>,
//         <div className="box-green"></div>,
//         <div className="box-black"></div>]);
        

//     return (
//         <div >
//             <div>
//                 <button onClick={() => {
//                     let temp = [...box];
//                     temp.unshift(<div className="box-red"></div>);
//                     setBox(temp);
//                 }}>앞빨간박스추가</button>
//                 <button onClick={() => {
//                     let temp = [...box];
//                     temp.unshift(<div className="box-blue"></div>);
//                     setBox(temp);
//                 }}>앞파란박스추가</button>
//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.unshift(<div className="box-green"></div>);
//                     setBox(temp);
//                 }}>앞초록박스추가</button>

//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.push(<div className="box-red"></div>);
//                     setBox(temp);
//                 }}>뒤빨간박스추가</button>
//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.push(<div className="box-blue"></div>);
//                     setBox(temp);
//                 }}>뒤파란박스추가</button>
//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.push(<div className="box-green"></div>);
//                     setBox(temp);
//                 }}>뒤초록박스추가</button>
//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.shift();
//                     setBox(temp);
//                 }}>앞 박스 삭제</button>
//                 <button onClick={() => { 
//                     let temp = [...box];
//                     temp.pop();
//                     setBox(temp);
//                 }}>뒤 박스 삭제</button>
//             </div>

//             {box}
//         </div>
//     )
// }

// 다른방법 <ColorBox bgColor={value} />  props 만들어서 사용
function Practice002() {

    let [box, setBox] = useState(['red','blue','green','black']);
    

    return (
        <div >
            <div>
                <div>
                    <button onClick={() => { 
                        let temp = ['red', ...box];
                        setBox(temp);
                    }}>앞빨간박스추가</button>
                    <button onClick={() => { 
                        let temp = ['blue', ...box];
                        setBox(temp);
                    }}>앞파란박스추가</button>
                    <button onClick={() => { 
                        let temp = ['green', ...box];
                        setBox(temp);
                    }}>앞초록박스추가</button>

                    <button onClick={() => { 
                        let temp = [...box, 'red'];
                        setBox(temp);
                    }}>뒤빨간박스추가</button>
                    <button onClick={() => { 
                        let temp = [...box, 'blue'];
                        setBox(temp);
                    }}>뒤파란박스추가</button>
                    <button onClick={() => { 
                        let temp = [...box, 'green'];
                        setBox(temp);
                    }}>뒤초록박스추가</button>
                </div>
                <button onClick={() => {
                    let temp = [...box];
                    temp.shift();
                    setBox(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...box];
                    temp.pop();
                    setBox(temp);
                }}>뒤 박스 삭제</button>
            </div>

            { //box에 들어있는 배열 밸류에 하나씩 넣음
                box.map((value, index)=>{
                    return <ColorBox index={index} box={box} setBox={setBox}  bgColor = {value}/>
                })
            }
        </div>
    )
}

export default Practice002;