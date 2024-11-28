
function ColorBox(props) {
    return (
    <div className='box' style={{ backgroundColor: props.bgColor }}>
    <button onClick={()=>{
        let temp = [...props.box];
        temp.splice(props.index, 1);
        props.setBox(temp);

        
    }}>X</button>
    </div>
    );
    }

export default ColorBox;