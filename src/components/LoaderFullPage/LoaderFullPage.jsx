import Loader from "../Loader/Loader";
import styles from "./LoaderFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Loader />
    </div>
  );
}

export default SpinnerFullPage;
