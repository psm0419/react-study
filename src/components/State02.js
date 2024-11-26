
function State02() {

    let text = "";
    let textArr = []; //[]배열
    for(let i=0; i<5; i++){
        // text += "<p>안녕하세요~</p>";  //단순 <p>텍스트가 나옴
        textArr.push(<p>안녕하세요~</p>); //push: 뒤쪽에 추가
    }

    let numArr = [1,2,3,4,5]; //단순 갯수로 활용할 배열.  안에 숫자는 안씀(아무거나 넣어도 됨)

    let msgArr = ['안녕', 'hi', 'hello', '헤이']; //안에 내용 출력할수도 있음

    return (
        <div>
            {textArr}
            <hr></hr>
            {
                numArr.map(()=>{ //map은 내부에 있는거 갯수만큼 반복
                    return (
                        <p>안녕하세요~</p>
                    )
                })
            }
            <hr></hr>
            {
                msgArr.map((item)=>{   //map은 리턴을 할 수 있음, forEach는 불가
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </div>
    );
}

export default State02;