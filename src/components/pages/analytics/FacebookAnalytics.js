import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import AnalyticsPage from "./Analytics";
import Likes from "./likesFacebook";
import Shares from "./sharesFacebook";

const AnalyticsContainer = () => {
  return (
    <div style={{ flexGrow: 1, padding: 100 }}>
      <Grid container spacing={4}>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={6}>
            <CardContent
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Likes />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={6}>
            <CardContent
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Shares />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsContainer;
