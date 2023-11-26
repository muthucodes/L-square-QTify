import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

export default function Card({ title, image, follows }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt="Album cover" />
          <div className={styles.banner}>
            <Chip
              label={follows + " Follows"}
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
    </>
  );
}
