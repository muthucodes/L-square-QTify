import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

export default function Section() {
  const [albumData, setAlbumData] = useState(null);

  const performAPICall = async function () {
    console.log("performing API call");
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall().then((data) => setAlbumData(data));
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeadingDiv}>
          <p className={styles.sectionHeading}>Top Albums</p>
          <button className={styles.collapseButton}>Collapse</button>
        </div>
        <div className={styles.albumGrid}>
          {albumData !== null &&
            albumData.map((album) => {
              return (
                <Card
                  title={album.title}
                  image={album.image}
                  follows={album.follows}
                  key={album.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
