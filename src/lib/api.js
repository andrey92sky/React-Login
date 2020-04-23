
export const login=data=>{
    if(data.username === "")
        return {status:false, error:'You should input username'};
    if(data.password === "")
        return {status:false, error:'You should input password'};
    else
        return {status:true};
}