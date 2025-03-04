import {configureStore, createSlice} from '@reduxjs/toolkit';

//let [username, setUsername] = useState('tom');

let userSlice = createSlice({
    name: 'username',
    initialState: 'tom',
    reducers: {
        saveUserName(state, action){

            console.log(action.payload);
            //action.payload = 매개변수로 들어온 'abc'

            // return state + 'add';
            return action.payload; // -> state 변수 값으로 저장
        },
        clearUserName(state){
            return "clean";
        },
        saveUserInfo(state, action){

            console.log(action.payload);
            console.log(action.payload.id);
            console.log(action.payload.name);

            let{id, name} = action.payload;
            console.log(id);
            console.log(name);

            return state;
        }
    }
})
//store 전체 기준 리덕스 저장 객체
export let {saveUserName, clearUserName, saveUserInfo, } = userSlice.actions;
//actions : 상태관리하는  slice(변수)에 속한 상태변경 함수들의 객체

let weather = createSlice({
    name: 'weather',
    initialState: {
        weather: 'snowy',
        temperature: '2',
        humdt: '70'
    },
    reducers: {
        setWeatherInfo(state, action){
            let {weather, temperature, humdt} =action.payload;
            console.log(weather);
            console.log(temperature);
            console.log(humdt);

            state.weather = weather;
            state.temperature = temperature;
            state.humdt = humdt;

            // return {
            //     weather : weather,
            //     temperature : temperature,
            //     humdt : humdt
            // };
        }
    }
})
export let {setWeatherInfo } = weather.actions;

let companySlcie = createSlice({
    name:'company',
    initialState:{
        name: 'qwerComp',
        sid:'10248832',
        address:'yogiyo'
    },
    reducers:{
        changeAddress(state, action){
            state.address = action.payload; //changeAddress('주소');
            state.address = action.payload.address; //changeAddress({adress:'주소'});
        }
    }
})

export let {changeAddress} = companySlcie.actions;

export default configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            weather: weather.reducer,
            company: companySlcie.reducer
        }
    }
)