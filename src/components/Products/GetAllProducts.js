import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../app/storeActions/productActions";
// import ProductLists from "./ProductLists";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardStyle: {
    marginBottom: "1rem",
  },
});

const GetAllProducts = () => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const Products = useSelector((state) => state.product.AllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Products.map((product) => {
            return (
              <Grid item xs={3} sm={4} md={3} key={product.id}>
                <Card
                  className={classes.cardStyle}
                  key={product.id}
                  sx={{ height: 380 }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="h5">
                      {product.title}
                    </Typography>
                    {/* <Typography variant="subtitle2" color="text.secondary">
                      {product.description.length < 90 ? (
                        product.description
                      ) : (
                        <>
                          {product.description.slice(0, 90)}
                          <Button variant="text" size="small">
                            showMore
                          </Button>{" "}
                        </>
                      )}
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button variant="text" size="small">
                      {product.price} Rs.
                    </Button>
                    <Button variant="text" size="small">
                      {product.category}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default GetAllProducts;
