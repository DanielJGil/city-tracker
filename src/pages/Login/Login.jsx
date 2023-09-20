import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";

function Login() {
  const [email, setEmail] = useState("user@email.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button type="loginBtn" onClick={() => navigate("/app")}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
