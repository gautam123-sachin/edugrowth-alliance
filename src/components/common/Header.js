import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { NAV_BAR_LINKS } from "../../utils/constants";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
          position: "fixed",
        }}
      >
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EduNet
          </Typography>
          <Hidden smDown>
            {NAV_BAR_LINKS.map((link) => (
              <MuiLink
                component={Link}
                to={link.path}
                key={link.name}
                color="inherit"
                underline="none"
              >
                <Button color="inherit">{link.name}</Button>
              </MuiLink>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
          variant="temporary"
          sx={{ marginTop: 56 }} // Add this line to set the margin-top
        >
          <List>
            {NAV_BAR_LINKS.map((link) => (
              <ListItem>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default Header;
