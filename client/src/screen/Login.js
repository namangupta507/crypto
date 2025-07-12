import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../redux/actions/auth/LoginAction";
import { AuthContext } from "./../context/AuthContext";
import { LoginAPI } from "../redux/actions/auth/LoginAction";
import { showErrorToast, showSuccessToast } from "../api/toast";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login: contextLogin, isAuthenticated } = useContext(AuthContext);
  const { response, loading, error } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [validationErrors, setValidationErrors] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) newErrors.email = true;
    if (!password.trim()) newErrors.password = true;

    setValidationErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    try {
      await dispatch(LoginAPI({ email, password }));
    } catch (error) {
      console.log("error in login api");
    }
  };

  useEffect(() => {
    if (response.status === true) {
      setEmail("");
      setPassword("");
      setValidationErrors("");
      // showSuccessToast('Login successful')
      contextLogin(response.data.token);
    }
  }, [response]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  useEffect(()=>{
    if(error){
      showErrorToast(error?.message)
    }
  },[error])
  return (
    <div className="login-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner">
              <img src="banner.jpg" alt="banner"></img>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-box">
              <h2 className="text-center mb-4">Welcome to Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      validationErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length === 1 && value === " ") return;
                      setEmail(value);
                    }}
                  />
                </div>
                <div className="mb-4 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control password-input ${
                      validationErrors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length === 1 && value === " ") return;
                      setPassword(value);
                    }}
                  />
                  <span
                    className="password-eye"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    {loading?<PulseLoader color="#fff"/>:'Login'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
