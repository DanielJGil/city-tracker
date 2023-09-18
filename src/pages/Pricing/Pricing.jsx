import PageNav from "../../components/PageNav/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Enjoy life.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="/public/people-hiking.jpg"
          alt="two people hiking on a mountain trail"
        />
      </section>
      {/* <p>
        Image credit: <br /> Unsplash Toomas Tartes
      </p> */}
    </main>
  );
}

export default Pricing;
