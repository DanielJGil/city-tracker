import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("user@email.com");
  const [password, setPassword] = useState("123456");

  const { login, isAuthenticated, loginFailed } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      isAuthenticated && navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
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

        <div className={styles.bottomRow}>
          <Button type="loginBtn">Login</Button>

          {loginFailed && <p>* Email or password is incorrect</p>}
        </div>
      </form>
    </main>
  );
}

export default Login;
