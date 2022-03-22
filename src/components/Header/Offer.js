import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/system";

function Offer() {
  return (
    <Container
      sx={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls=""
        aria-haspopup="true"
        sx={{ fontSize: 2, color: "#808080" }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box flexGrow={1} />
      <Typography
        variant="p"
        noWrap
        component="p"
        sx={{
          fontWeight: 300,
          fontSize: "12px",
          margin: 1,
        }}
      >
        GET ₹500 OFF <Link to="/">CLICK HERE</Link>
      </Typography>
      <Box flexGrow={1} />
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls=""
        aria-haspopup="true"
        sx={{ fontSize: 2, color: "#808080" }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Container>
  );
}

export default Offer;
