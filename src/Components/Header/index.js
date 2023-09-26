import React from "react";
import { Grid } from "@mui/material";
import "./styles.css";

export const Header = () => {
  return (
    <div className="header-container">
      <Grid container style={{ height: 150 }} justifyContent="center">
        <Grid item xs={11} md={9} className="info-container">
          Header
        </Grid>
      </Grid>
    </div>
  );
};
