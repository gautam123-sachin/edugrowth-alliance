// Hero.js
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import "../common.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <Container>
        <div className="hero-content">
          <Typography variant="h2" component="h1" gutterBottom>
            Learn and Earn with EduNet
          </Typography>
          <Typography variant="body1" paragraph>
            Your gateway to quality education and passive income.
          </Typography>
          <div className="cta-buttons">
            <Button variant="contained" color="primary" className="join-now">
              Join Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
