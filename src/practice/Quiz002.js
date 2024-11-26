

    function Quiz002({ text, detail }) {  //바로 써도 된다 
        return ( //props 넣으면 밑에 props.text 이렇게 해도 됨
            <div className='textItem'>
                <h1 className='title'>{text}</h1>
                <p>{detail}</p>
                
            </div>
        );
    }

export default Quiz002;
