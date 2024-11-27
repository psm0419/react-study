import { useState } from "react";
import './Quiz003.css';

function Div() {

    let [box, setBox] = useState([null]);

    let [arr, setArr] = useState([1,1]); //값은 활용 안하고 갯수만 씀
    
    return (
        <div >
            <div style={{marginBottom: '10px', marginTop: '10px'}}>
                <button onClick={() => {
                    let temp = [...arr];
                    // let temp = [...arr, 1]; 배열 복사해서 1추가
                    temp.push(0) //아무거나 쓰면 됨 갯수만 쓸거라
                    setArr(temp);
                }}>추가</button>
            </div>            
            <div className="container">
                {
                    arr.map(()=>{
                        return <div className="box">박스</div>
                    })
                }
            </div>

        </div>
    )
    // return (
    //     <div >
    //         <div style={{marginBottom: '10px', marginTop: '10px'}}>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.push(<div className="box">박스</div>);
    //                 setBox(temp);
    //             }}>추가</button>
    //         </div>            
    //         <div className="container">
    //             <div className="box">박스</div>{box}
    //         </div>

    //     </div>
    // )
}

export default Div;