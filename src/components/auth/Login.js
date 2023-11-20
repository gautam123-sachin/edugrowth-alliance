// src/components/auth/Login.js
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  Hidden,
} from "@mui/material";
import "../../components/common.css";
import LoginImage from "../../assets/login-bg.jpg";

function Login() {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              marginTop: "15rem",
              height: "500px", // Set the height to 800px
              overflow: "hidden", // Hide the scrollbar
              display: "flex", // Use flexbox to arrange items
              boxShadow: "rgb(163 169 163) 0px 0px 50px",
              borderRadius: "30px",
            }}
          >
            {/* Left side with image */}
            <Hidden smDown>
              <Grid item xs={12} sm={12} md={6}>
                <img
                  src={LoginImage}
                  alt="Login"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensure the image covers the entire space
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "46%",
                    left: "28%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Welcome to Our App
                  </Typography>
                  <Typography variant="body1">
                    The best place to manage your tasks and stay organized.
                  </Typography>
                </div>
              </Grid>
            </Hidden>

            {/* Right side with input boxes */}
            <Grid item xs={12} sm={12} md={6}>
              <CardContent style={{ padding: "2rem", marginTop: "5rem" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "1rem", fontWeight: "bold" }}
                >
                  EduNet
                </Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                />
                <Link
                  href="#"
                  variant="body2"
                  style={{
                    marginTop: "1rem",
                    marginRight: "380px",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Forgot Password?
                </Link>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>

                <Typography
                  variant="body2"
                  style={{
                    marginTop: "1rem",
                    fontSize: "14px",
                  }}
                >
                  Don't have an account?{" "}
                  <Link href="#" style={{ textDecoration: "none" }}>
                    Signup now
                  </Link>
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
