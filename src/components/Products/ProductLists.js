import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import second from "first";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const ProductLists = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      <Card key={product.id} sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" size="small">
            {product.price}
          </Button>
          <Button variant="text" size="small">
            {product.category}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductLists;
