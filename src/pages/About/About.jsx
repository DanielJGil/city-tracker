import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <section>
        <img
          src="/public/desert-van.jpg"
          alt="van parked on a round in the middle of a desert"
        />
        <div>
          <h2>About us.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
      {/* <p>
        Image credit: <br /> Unsplash Dino Reichmuth
      </p> */}
    </main>
  );
}

export default About;
