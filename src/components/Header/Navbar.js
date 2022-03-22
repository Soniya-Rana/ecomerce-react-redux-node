import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { InputAdornment, TextField } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // sx={{ backgroundColor: "#141414", fontColor: "#fff" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <PhoneIcon />
          </IconButton>
          <Typography
            variant="p"
            noWrap
            component="p"
            sx={{ display: { xs: "none", sm: "block" }, mr: 4 }}
          >
            987654565
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FOREVER 21
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <TextField
              sx={{ width: 120, color: "#fff", marginTop: "10px" }}
              type="search"
              ladel="Search"
              placeholder="Search"
              variant="standard"
              InputProps={{
                variant: "FilledInput",
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* <Box sx={{borderBottom:'1px solid #adadad'}} >
              <InputBase sx={{width:120, color:'#fff'}} placeholder="Search Products  " inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton type="submit" sx={{color:'#adadad', p: '10px' }} aria-label="search">
              <SearchIcon />
              </IconButton>   
              </Box> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls=""
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 5 liked" color="inherit">
              <Badge badgeContent={0} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 5 liked" color="inherit">
              <Badge badgeContent={5} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls=""
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
