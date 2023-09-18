import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.container}>
        <img src="/public/earth-icon.png" className={styles.logo} />
        <h1 className={styles.name}>
          <span>City</span>Tracker
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
