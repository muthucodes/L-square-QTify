import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import Tab from "../Tab/Tab";
import { Tooltip } from "@mui/material";

export default function Section({ type, category }) {
  const [sectionData, setSectionData] = useState(null);
  const [collapsed, setCollapsed] = useState(true);

  const performAPICall = async function () {
    console.log("performing API call for", type);

    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/${
          type === "albums" ? `albums/${category}` : "songs"
        }`
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall().then((data) => setSectionData(data));
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeadingDiv}>
          <p className={styles.sectionHeading}>
            {type === "albums" ? `${category} Albums` : `Songs`}
          </p>
          {type === `albums` && (
            <button
              className={styles.collapseButton}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              {collapsed ? "Show All" : "Collapse"}
            </button>
          )}
        </div>
        {type === `albums` ? (
          <div className={styles.grid}>
            {collapsed ? (
              <Carousel carouselData={sectionData} />
            ) : (
              sectionData != null &&
              sectionData.map((item) => {
                return (
                  <Tooltip
                    title={
                      item.songs
                        ? `${item.songs.length} Songs`
                        : `${item.likes} Likes`
                    }
                  >
                    <div>
                      <Card
                        title={item.title}
                        image={item.image}
                        follows={item.follows}
                        key={item.id}
                      />
                    </div>
                  </Tooltip>
                );
              })
            )}
          </div>
        ) : (
          <div className={styles.grid}>
            <Tab sectionData={sectionData} />
          </div>
        )}
      </div>
    </>
  );
}
