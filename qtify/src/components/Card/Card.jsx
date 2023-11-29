import styles from "./Card.module.css";
import { Chip } from "@mui/material";
import { Fragment } from "react";

export default function Card({ title, image, follows = null, likes = null }) {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt="Album/Song cover" />
          <div className={styles.banner}>
            <Chip
              label={follows ? `${follows} Follows` : `${likes} Likes`}
              sx={{
                bgcolor: "#121212",
                color: "white",
                fontStyle: "normal",
                fontSize: "10px",
              }}
            />
          </div>
        </div>

        <p className={styles.title}>{title}</p>
      </div>
    </Fragment>
  );
}
