import { Link } from "react-router-dom";
import './Login.css';
function Login() {
    return (<>
       <div className="login-container">
        <h1 className="login-title">Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="formLabel">
                        Email 
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="userEmail"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="formLabel">
                        Password
                    </label>
                    <input
                        type="password"
                        id="exampleInputPassword"
                        name="Password"
                        className="form-control"
                    />
                </div>
                <button
                type="submit"
                className="logn_btn"
                >
                Login
                </button>
            </form>

        <div>
        <br></br>
                <p>Don't have an account yet?{" "}
                    <Link className="btn_success btn-sm" to={"/join/signup"}>SignUp Here!</Link>
                </p>
        </div>
        </div>
    </>);
}

export default Login;