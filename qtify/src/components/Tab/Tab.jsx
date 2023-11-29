import { Fragment, useState } from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

import styles from "./Tab.module.css";

import { useEffect } from "react";
import axios from "axios";

export default function Tabs({ sectionData }) {
  const [value, setValue] = useState("All");
  const [genresData, setGenresData] = useState(null);

  // let index = 1;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const genresArray = function (data) {
    let genres = data.map((genre) => genre.label);
    genres.unshift("All");
    console.log(genres);
    return genres;
  };

  const filteredSectionData = function (genre) {
    return sectionData.filter((song) => {
      return song.genre.label === genre;
    });
  };
  const performAPICall = async function () {
    console.log("performing API call for genres");

    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      console.log(response.data.data);
      // return response.data.data;
      console.log(genresArray(response.data.data));
      return genresArray(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall().then((data) => setGenresData(data));
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="inherit"
            className={styles.tabList}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#34c94b",
              },
            }}
          >
            {genresData !== null ? (
              genresData.map((genre) => {
                return <Tab label={genre} value={genre} />;
              })
            ) : (
              <CircularProgress />
            )}
          </TabList>
        </Box>

        {genresData !== null && sectionData !== null ? (
          genresData.map((genre) => {
            return (
              <TabPanel value={genre}>
                <Carousel
                  carouselData={
                    genre === "All" ? sectionData : filteredSectionData(genre)
                  }
                />{" "}
              </TabPanel>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </TabContext>
    </Box>
  );
}
