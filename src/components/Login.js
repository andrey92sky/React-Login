import React, {useState} from 'react';

const Login =({isLoggedin, error, loginConfirm})=>{
    const [userdata, setUserdata] = useState({
        username:'',
        userpassword:''
    });

    const onChange=  (e)=>{
        setUserdata({
            ...userdata,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        loginConfirm(userdata);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label  >
                    Username:
                    <input type='text' name='username' value={userdata.username} onChange={(e)=>onChange(e)}></input>
                </label>
                <label  >
                    Password:
                    <input type='password' name='userpassword' value={userdata.password} onChange={(e)=>onChange(e)}></input>
                </label>
                {
                    isLoggedin?(<div style={{color:'red'}}>{error}</div>)
                    :''
                }
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;