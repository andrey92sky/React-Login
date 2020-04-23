import React, {useState} from 'react';

const Login =()=>{
    const [userdata, setUserdata] = useState('');

    const onChange=  (e)=>{
        setUserdata({
            ...userdata,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div>
            <form >
                <label  >
                    Username:
                    <input type='text' name='username' value={userdata.username} onChange={(e)=>onChange(e)}></input>
                </label>
                <label  >
                    Password:
                    <input type='password' name='userpassword' value={userdata.password} onchange={(e)=>onChange(e)}></input>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;