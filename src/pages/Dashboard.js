import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  ButtonBase,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import GetAllProducts from "../components/Products/GetAllProducts";
import GetAllCategory from "../components/Categories/GetAllCategory";
import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  divideStyle: {
    color: "#000",
  },
});

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        justifyContent="center"
        container
        spacing={4}
        sx={{ width: "100%" }}
      >
        <Grid item>
          <ButtonBase sx={{ width: "100%" }}>
            <Img
              alt="complex"
              src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-9772.jpg?auto=compress"
            />
          </ButtonBase>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: "100%" }}>
            <Img
              alt="complex"
              src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-9731.gif?ar=15:7&fit=crop&auto=compress&fm=webp"
            />
          </ButtonBase>
        </Grid>

        <Grid item>
          <ButtonBase sx={{ marginTop: "3rem", width: "100%" }}>
            <Img
              alt="complex"
              src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-9845.jpg?auto=compress"
            />
          </ButtonBase>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "3rem" }} flexGrow={2} />
      <Divider className={classes.divideStyle} variant="middle">
        <Typography component="h6">Forever 21</Typography>
      </Divider>

      <Divider light={false} variant="middle">
        <Typography component="h6">Best Seller</Typography>
      </Divider>

      <Typography component="h6">Products</Typography>
      <GetAllProducts style={{ width: "100%", height: "100%" }} />
      <GetAllCategory />
    </>
  );
};

export default Dashboard;
