// KeyFeatures.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  CardContent,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import "../common.css";
import { FEATURES } from "../../utils/constants";

const KeyFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(0);

  const handleBackClick = () => {
    setVisibleFeatures(Math.max(visibleFeatures - 1, 0));
  };

  const handleForwardClick = () => {
    setVisibleFeatures(Math.min(visibleFeatures + 1, FEATURES.length - 1));
  };

  return (
    <div className="key-features-container">
      <Container>
        <Typography
          variant="h3"
          component="h2"
          className="section-heading"
          gutterBottom
        >
          Improve Mental Health with Mindful Movement
        </Typography>
        <Typography variant="body1" paragraph className="section-heading">
          Our bodies store tension, emotions, and stress. Mindful movement helps
          your body release what it carries.
        </Typography>
        <Typography variant="body1" paragraph className="section-heading">
          Research shows Yoga Ed. can improve health and wellness outcomes for
          all ages.
        </Typography>
        <div>
          <Stack
            direction="row"
            spacing={12}
            style={{
              display: "-webkit-box",
            }}
          >
            {FEATURES.map((feature, index) => (
              <Paper
                className="feature-paper"
                sx={{
                  width: "100%", // Set width to 100% for mobile view
                  maxWidth: "300px", // Limit maximum width for larger screens
                  margin: "10 auto", // Center the Paper component
                  backgroundColor: "#fff",
                  color: "rgba(0, 0, 0, 0.87)",
                  borderRadius: "34px",
                  boxShadow: "0px 2px 15px 0px black",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  flex: "0 0 auto",
                  marginRight: "10px", // Set your desired margin
                  border: "1px solid #ccc",
                  padding: "10px",
                  justifyContent: "center",
                }}
              >
                {feature.icon}
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="feature-title"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={{
                      fontSize: "16px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {feature.description.length > 50
                      ? feature.description.slice(0, 50) + "..."
                      : feature.description}
                  </Typography>
                  <Button variant="outlined" color="secondary" sx={{ mt: 3 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Paper>
            ))}
          </Stack>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: "20px", mb: "20px", ml: "10rem" }}
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: "20px", mb: "20px", ml: "10rem" }}
          onClick={handleForwardClick}
        >
          <ArrowForwardIcon />
        </Button>
      </Container>
    </div>
  );
};

export default KeyFeatures;
