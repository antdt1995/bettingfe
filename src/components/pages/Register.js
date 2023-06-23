import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [accountCreated, setAccountCreated] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }
    authService
      .register(
        firstName,
        lastName,
        userName,
        password,
        email,
        phone,
        bankAccount,
        bankName
      )
      .then((response) => {
        console.log(response.data);
        setAccountCreated(response.data);
        setIsRegistered(true);
      })
      .catch(() => {
        alert("Invalid email or password");
      });
  };

  return (
    <div className="formDiv" style={{ color: "white" }}>
      <h1>Register</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="loginUserName">Username*</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            id="userNameInput"
            aria-describedby="userNameHelpId"
            placeholder="username0399"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="emailBox"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="loginPassword">Password*</label>
          <input
            type="password"
            className="form-control"
            name="login-password"
            id="passInput"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="retypePassword">Re-type Password*</label>
          <input
            type="password"
            className="form-control"
            name="retypePassword"
            id="retypePassword"
            placeholder="re-type password"
            required
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="fnameBox"
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lnameBox"
            placeholder="Doe"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phoneBox"
            placeholder="123-456-7890"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName">Bank Name</label>
          <input
            type="text"
            className="form-control"
            name="bankName"
            id="bNameBox"
            placeholder="Bank of America"
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName">Bank Account</label>
          <input
            type="text"
            className="form-control"
            name="bankAccount"
            id="bAccountBox"
            placeholder="1234567890"
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </div>
        <div className="text-center"><button onClick={handlerNavigate} type="submit" className="btn btn-primary">
          submit
        </button>
        </div>
        
      </form>
    </div>
  );
}
