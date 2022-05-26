import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data1, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://alaqsafunduat-api.isdb.org/static-stites?_limit=-1")
      // .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0].static.about_introduction);
        setData(res.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Shahid</h1>
      <div>
        {data1.map((dat) => (
          <div key={dat.id}>
            <p>{dat.id}</p>
            <p>{dat.locale}</p>
            <p>{dat.static.about_introduction.description}</p>
            <p>{dat.static.about_missions.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
