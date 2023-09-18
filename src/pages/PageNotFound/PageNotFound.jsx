import PageNav from "../../components/PageNav/PageNav";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <main className={styles.message}>
      <PageNav />
      <section>
        <h3>Page not found 😢</h3>
      </section>
    </main>
  );
}

export default PageNotFound;
