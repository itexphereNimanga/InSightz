import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const AnalyticsContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/youtube");
  };
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
                padding: "20px",
                height: "8rem",
              }}
            >
              <Button
                startIcon={<YouTubeIcon sx={{ fontSize: "5rem" }} />}
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  height: "100%",
                  fontSize: "1.5rem",
                  padding: "10px 0",
                }}
                onClick={handleNavigate}
              >
                YouTube
              </Button>
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
                padding: "20px",
                height: "8rem",
              }}
            >
              <Button
                startIcon={<FacebookIcon />}
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  height: "100%",
                  fontSize: "1.5rem",
                  padding: "10px 0",
                }}
              >
                Facebook
              </Button>
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
                padding: "20px",
                height: "8rem",
              }}
            >
              <Button
                startIcon={<InstagramIcon />}
                variant="contained"
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "1.5rem",
                  padding: "10px 0",
                  backgroundColor: "#C13584",
                  color: "#fff",
                }}
              >
                Instagram
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsContainer;
