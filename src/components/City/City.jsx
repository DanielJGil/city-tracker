import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      <h1>{id}</h1>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </>

    // <div className={styles.city}>
    //   <div className={styles.row}>
    //     {/* <h6>{cityName}</h6> */}
    //     <h3>
    //       <span>emoji</span> cityname
    //     </h3>
    //   </div>
    //   <div className={styles.row}>
    //     <h6>You went to cityname on</h6>
    //     {/* <p>{formatDate(date || null)}</p> */}
    //   </div>

    //   <div className={styles.row}>
    //     <h6>Your notes</h6>
    //     <p>notes</p>
    //   </div>

    //   <div className={styles.row}>
    //     <h6>Learn more</h6>
    //     <a
    //       href={`https://en.wikipedia.org/wiki/`}
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Check out cityname on Wikipedia &rarr;
    //     </a>
    //   </div>
    //   <div>
    //     <button>back</button>
    //   </div>
    // </div>
  );
}

export default City;
