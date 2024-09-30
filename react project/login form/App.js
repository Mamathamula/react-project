import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null); // null, "success", "error"

  // Dummy credentials for validation
  const correctEmail = "mamatha@gmail.com";
  const correctPassword = "pwd123";

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password match the correct credentials
    if (email === correctEmail && password === correctPassword) {
      setLoginStatus("success");
    } else {
      setLoginStatus("error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", width: "200px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "10px", width: "200px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </form>

      {/* Display success or error message based on loginStatus */}
      {loginStatus === "success" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Login Successful!</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFtbwEPlljUKPGvNEqpr5DnEhsxWBtKlzKQ&s"
            alt="Success"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      )}
      {loginStatus === "error" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Login Failed. Please try again!</h3>
          <img
            src="https://thumbs.dreamstime.com/b/emoji-yellow-sad-face-crying-tear-icon-unhappy-95366354.jpg"
            alt="Error"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      )}
    </div>
  );
}

export default LoginForm;
