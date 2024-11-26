import Quiz002 from './Quiz002';
import './Quiz002.css';
function Qprops() {

    let title = ['제목 : 하나','제목 : 둘','제목 : 셋','제목 : 넷','제목 : 다섯'];
    let detail = ['내용 : 내용하나','내용 : 내용둘','내용 : 내용셋','내용 : 내용넷','내용 : 내용다섯'];

    return(
        <div>   
            {/* <Quiz002 text = {title[0]} detail = {detail[0]}/>
            <Quiz002 text = {title[1]} detail = {detail[1]}/>
            <Quiz002 text = {title[2]} detail = {detail[2]}/>
            <Quiz002 text = {title[3]} detail = {detail[3]}/>
            <Quiz002 text = {title[4]} detail = {detail[4]}/> */}
        
        {
        title.map((item, index)=>{
            return <Quiz002 text = {title[index]} detail={detail[index]}/>
        })
        }
        </div>
    )    
};

export default Qprops;