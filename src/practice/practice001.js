import logo from '../logo.svg';
import './practice.css';
import {useState} from 'react';
/*
function Practice001() {
    let [count, setCount] = useState(1);

    const text = (count) => {
        if (count == 1) return '하나';
        if (count == 2) return '둘';
        if (count == 3) return '셋';        
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{text(count)}</p>
                <button onClick={()=>{
                    setCount((count) => (count % 3) + 1);
                }}>변경버튼</button>
            </header>
        </div>
    )
};
*/
//다른 방법
/*
function Practice001() {
    let [txt, setTxt] = useState('하나');

        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{txt}</p>
                <button onClick={()=>{
                    if(txt =='하나')
                        setTxt('둘');
                    else if(txt == '둘')
                        setTxt('셋');
                    else
                        setTxt('하나');                    
                }}>변경버튼</button>
            </header>
        </div>
    )
};
*/
//다른방법
function Practice001() {
    let txtArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);

        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{txtArr[index]}</p>
                <button onClick={()=>{
                    /*
                    index++;
                    if(index > 2){
                        index = 0;
                    }
                    setIndex(index);
                    */
                    let value = (index+1) == 3 ? 0 : (index+1);
                    setIndex(value);
                }}>변경버튼</button>
            </header>
        </div>
    )
};
export default Practice001;