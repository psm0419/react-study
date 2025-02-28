import { useState } from "react";
import axios from "axios";

function Login() {
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <h1>React Spring Login</h1>

            id: <input type="text" onChange={(e) => {
                setId(e.target.value);
            }}></input> <br></br>
            pw: <input type="password" onChange={(e) => {
                setPw(e.target.value);
            }}></input> <br></br>
            <button onClick={() => {
                axios.post("/api/login",
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then(response => {
                        console.log(response.data);
                        if (response.data == 'ok') {
                            //로그인 성공
                            //어느 페이지로 갈지
                            //ReactRouterDom -> navigate("/")
                            //뭐 보여줄지
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }}>로그인</button><br></br>

            <button onClick={() => {
                axios.post("/api/loginCheck")
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }}>로그인 여부 체크</button><br></br>


            <button onClick={() => {
                axios.post("/api/loginJWT",
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then(response => {
                        console.log(response.data);     //로그인 성공
                        let accessToken = response.data;    // accessToken JWT
                        //토큰은 localstorage 저장 해둔다
                        //다음에 api 요청할때 사용 할 수 있게..
                        localStorage.setItem("accessToken", accessToken);
                        //로그인 성공한 토큰 저장(내부적)
                        //로그인 성공시 해야하는 처리 -> 페이지 전환, 로그인 성공 메시지
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }}>로그인jwt</button><br></br>

            <button onClick={() => {

                console.log(localStorage.getItem("accessToken"));

                axios.post(
                    '/api/loginCheckJWT',
                    {
                        param1: "abc"
                    },
                    {
                        headers : {
                            "Content-Type":"application/json",
                            "Authorization":"Bearer " + localStorage.getItem("accessToken")
                        }
                    }
                )
                    .then(response => {
                        console.log(response.data);
                        //후처리 -> 화면 갱신 state 변수 설정 등등..
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }}>로그인 여부 체크jwt</button><br></br>
        </div>

    );
}
export default Login;