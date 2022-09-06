import { useState,useEffect } from "react";
import axios from "axios";
import { Link , useHistory} from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
import "./login.css";


const Login = () => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const Auth = async (e) => {
        e.preventDefault();
        try {
		const { data: res } = await axios.post("http://localhost:5000/Login", {
                email: email,
                password: password
            });
                   
				localStorage.setItem("token",res.data);
				 
				window.location = "/";
        } catch (error) {
            if  (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			)  {
                setMsg(error.response.data.msg);
            }
        }
    }


	return (
		
		<div className="login_container">
			<div className="login_form_container">
				<div className="right">
					<form  onSubmit={Auth}  className="form_container" >
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} 
							onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} 
							onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{msg && <div className="error_msg">{msg}</div>}
						<button type="submit" className="green_btn">
							Sing In
						</button>
					</form>
				</div>
				<div className="left ">
					<h1>New Here ?</h1>
					<a href="/signup">
						<button type="button" className="white_btn">
							Sing Up
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
