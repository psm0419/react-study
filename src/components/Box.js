/*
function Box(props) {  //매개변수 props 객체형태로 들어옴

    // props = {text:'아침'};  Props01 쪽 Box 옆에 있는 이름과 매칭
    // props = {text:'점심'};
    // props = {text:'저녁'};
    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{props.text}</h1>
            <p>{props.detail}</p>
        </div>
    );
}
*/
function Box({text, detail}) {  //바로 써도 된다
        return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{text}</h1>
            <p>{detail}</p>
        </div>
    );
}

export default Box;