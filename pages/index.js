import styles from "../styles/Home.module.css";
// import { useState, useEffect } from "react";
import axios from "axios";
import https from "https";

export default function Home({ posts }) {
  // const [data1, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://alaqsafunduat-api.isdb.org/static-stites?_limit=-1")
  //     // .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data[0].static.about_introduction);
  //       setData(res.data);
  //     });
  // }, []);

  // axios.defaults.httpsAgent = new https.Agent({
  //   rejectUnauthorized: false,
  // });

  return (
    <div className={styles.container}>
      <h1>Shahid</h1>
      <div>
        {posts.map((dat) => (
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

export async function getStaticProps(context) {
  const res = await axios.get(
    "https://alaqsafunduat-api.isdb.org/static-stites?_limit=-1",
    {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  );
  console.log(res.data);

  return {
    props: {
      posts: res.data,
    },
  };
}
