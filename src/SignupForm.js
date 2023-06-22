import React, {useState} from "react"

const SignupForm=()=>{
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [errors,setErrors] = useState("");
    const[success,setSuccess] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
      
        const newerror = {};
      
        if(email.trim()==''){
          newerror.email = "Ëmail canot be empty"
        }
        if(username.trim()==''){
          newerror.username = "Username canot be empty"
        }
        if(password.trim()==''){
          newerror.password = "Password canot be empty"
        }
        if(confirmpassword!=password){
          newerror.confirmpassword = "Password not match"
        }
        if(Object.keys(newerror).length===0){
            setSuccess("Successfully submitted")
        }
        else{
            setSuccess('')
        }
        setErrors(newerror)
      }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Name:</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    {errors.username && <span>{errors.username}</span>}

                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
                    {errors.confirmpassword && <span>{errors.confirmpassword}</span>}

                </div>

                <button type="submit">Signup</button>
                {success && <p>{success}</p>}
            </form>

        </div>
    )
}

export default SignupForm;