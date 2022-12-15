import { fashion } from "api/dlearn/api";
import { useState } from "react";

const Fashion = () => {

  
    const [inputs, setInputs] = useState({})
    const {testNum} = inputs;
    
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    
    const onClick = e => {
        e.preventDefault()
        const request = {testNum}
        alert(`입력번호: ${JSON.stringify(request)}`)
        fashion(request)
        .then((res)=>{
            console.log(`Response is ${res.data.resp}`)
            localStorage.setItem('token', JSON.stringify(res.data.resp))
            alert(`예측한 답 : ${JSON.stringify(res.data.resp)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('다시 입력하시오')
        }) 
    }
    
    return(<>

        옷번호: <input type ="text" name="testNum" onChange={onChange}/><br/>
        <button onClick={onClick}> 입력 </button>

        </>)}


export default Fashion