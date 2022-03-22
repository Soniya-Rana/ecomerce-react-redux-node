import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";

import {
  MenuList,
  WomenMenuItemList,
  MenMenuItemList,
  AccessoriesMenuItemList,
} from "./menuConstants";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    color: "#000",
    marginRight: "5px",
    backgroundColor: "transparent",
    "&:hover": {
      cursor: "pointer",
      borderRadius: 0,
      borderBottom: "1.5px solid #000",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
});

export default function PositionedMenu() {
  const classes = useStyles();
  const [menuList, setMenuList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (menu) => {
    setAnchorEl(menu);
    if (menu === "Women") {
      setMenuList(WomenMenuItemList);
    } else if (menu === "Men") {
      setMenuList(MenMenuItemList);
    } else if (menu === "Accessories") {
      setMenuList(AccessoriesMenuItemList);
    }
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {MenuList.map((menu) => {
        return (
          <Button
            className={classes.buttonStyle}
            key={menu}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            sixe="small"
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </Button>
        );
      })}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {console.log(menuList)}
        {menuList.map((item) => {
          return (
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </Stack>
  );
}
