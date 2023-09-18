import { Link } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          We keeps track of your adventures.
        </h1>
        <h2>
          An app that tracks your footsteps through every country you can think
          of. Never forget your wonderful experiences, and show your friends and
          family where you&apos;ve travelled.
        </h2>

        <Link className="btn">Start tracking now</Link>
      </section>
      {/* <p>
        Image credit: <br /> Unsplash ANIRUDH
      </p> */}
    </main>
  );
}

export default Homepage;
