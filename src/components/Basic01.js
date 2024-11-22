
function Basic01() {

    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";
    let flag = false;

    let hi = "";
    for (let i = 0; i < 5; i++) {
        hi += "안녕~";
    }

    // flag: true -> hello
    // flag: false -> hello2

    //if 사용시 리턴 전체를 감싸야 함
    // if(flag == true){
    //   return (
    //     <div className="App">
    //       <h1>리액트</h1>
    //       <h2>hello</h2>  {/* 중괄호 없으면 문자 그대로 인식 */}        
    //       <h2>{hello}</h2>
    //       <h2>{hi}</h2>   
    //     </div>
    //   );
    // }else {
    //   return (
    //     <div className="App">
    //       <h1>리액트</h1>
    //       <h2>hello</h2>  {/* 중괄호 없으면 문자 그대로 인식 */}        
    //       <h2>{hello2}</h2>
    //       <h2>{hi}</h2>   
    //     </div>
    //   );
    // }
    //삼항 연산자 또는 && 연산자 사용
    return (
        <div className="App">
            <h1>리액트</h1>
            <h2 className="font-red">hello</h2>  {/* 중괄호 없으면 문자 그대로 인식 */}
            { //삼항연산자
                // flag == true ? <h2>{hello}</h2> : <h2>{hello2}</h2>
            }
            { //&& 연산자
                flag && <h2>{hello}</h2>
                //참이라 true 안써도 됨       
            }
            { //&& 연산자는 참 거짓 2개 써야함
                flag == false && <h2>{hello2}</h2>
                // !flag
            }
            <h2 style={{ color: 'blue' }}>{hi}</h2>
        </div>
    );
}
