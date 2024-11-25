import menu1 from "../data/mydata01";
import menu2 from "../data/mydata01";
import {menu4, menu5, menu6} from "../data/mydata02";


function Export01(){
    return(
    <div>
        <h1>Export01</h1>
        <h2>{menu1}</h2>
        <h2>{menu2}</h2>        {/* 디폴트값 menu1이라 2는 못가져옴 */}
        <h2>{menu4}</h2>
        <h2>{menu5}</h2>
        <h2>{menu6}</h2>
        
    </div>
    )
}

export default Export01;