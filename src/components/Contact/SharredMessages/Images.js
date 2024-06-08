import React from "react";
import { Grid } from "@mui/material";

import { SharedImages } from "../../../data";

const Images = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        width: "100%",
        height: "calc(100vh - 160px)",
        overflowY: "scroll",
      }}
    >
      {SharedImages.map((image, index) => {
        return (
          <Grid item xs={4} key={index}>
            <img
              src={image.message}
              style={{
                width: "100%",
                borderRadius: "5px",
              }}
              alt="media"
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Images;
