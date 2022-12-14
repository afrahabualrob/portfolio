import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const drawerWidth = "100%";
const navItems = ["Home", "About","skills","Experience","projects", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item,index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  key={index}
                  activeClassName="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  {item}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 0, p: 0 }}>
      <AppBar component="nav" sx={{ background: "#202020" }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={1}>
              <Logo />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              width: "75vw",
              px: 2,
            }}
          >
            {navItems.map((item, index) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link
                  key={index}
                  activeClassName="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "200px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
