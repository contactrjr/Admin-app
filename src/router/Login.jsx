import { useState, useContext } from "react";
import "../styles/Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthContext } from "../context/Authcontext";

const Login = () =>{

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload: user});

            setError(false);
            navigate("/")
        })
        .catch((error) => {
            setError(true);
        });

    }

    return(
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span> Wrong username / password !! </span>}
            </form>
        </div>
    )
}

export default Login;