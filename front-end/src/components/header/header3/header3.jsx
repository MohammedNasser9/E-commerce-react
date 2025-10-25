// Import React hook for state management
import { useState } from "react";

// Import Material UI components
import {
  Container,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Link,
  useTheme,
  useMediaQuery,
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
} from "@mui/material";

// Import Material UI icons
import {
  Window as WindowIcon,
  Menu as MenuIcon,
  ExpandMore,
  Close,
  KeyboardArrowRight,
} from "@mui/icons-material";

export default function Header3() {
  // Access MUI theme for dynamic styling
  const theme = useTheme();

  // Detect if screen size is small (responsive behavior)
  const isSmall = useMediaQuery("(max-width:1024px)");

  // ------------------ STATE VARIABLES ------------------

  // Anchor element for dropdown menus
  const [anchorEl, setAnchorEl] = useState(null);

  // Track which menu is currently active/open
  const [activeMenu, setActiveMenu] = useState(null);

  // Control Drawer (mobile menu) open/close state
  const [openDrawer, setOpenDrawer] = useState(false);

  // ------------------ EVENT HANDLERS ------------------

  // Handle opening submenu under a main link or categories button
  const handleOpenSubMenu = (event, title) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(title);
  };

  // Handle closing any open submenu
  const handleCloseSubMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  // ------------------ MENU DATA ------------------

  // Categories dropdown items
  const categories = [
    "Bikes",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
  ];

  // Main navigation links and their sub-links
  const drawerMenu = [
    { title: "Home", links: ["Home 1", "Home 2", "Home 3"] },
    {
      title: "Mega Menu",
      links: ["Layout 1", "Layout 2", "Layout 3", "Layout 4"],
    },
    { title: "Full Screen Menu", links: ["Style A", "Style B"] },
    { title: "Pages", links: ["About", "Contact", "FAQ"] },
    {
      title: "User Account",
      links: ["Profile", "Orders", "Wishlist", "Settings"],
    },
    {
      title: "Vendor Account",
      links: ["Dashboard", "Products", "Earnings", "Settings"],
    },
  ];

  // ------------------ JSX RETURN ------------------

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1,
      }}
    >
      {/* 🧭 Categories Button (Left Section) */}
      <Stack
        direction="row"
        alignItems="center"
        onClick={(e) => handleOpenSubMenu(e, "Categories")} // Open categories menu
        sx={{
          minWidth: 240,
          borderRadius: 1,
          p: "4px 8px",
          gap: 1,
          background: "rgba(204, 204, 204, .2)",
          transition: ".3s",
          cursor: "pointer",
          "&:hover": { background: "rgba(204, 204, 204, .35)" },
        }}
      >
        <WindowIcon /> {/* Icon beside text */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            flexGrow: 1,
            color: theme.palette.text.secondary,
          }}
        >
          Categories
        </Typography>
        <KeyboardArrowRight
          sx={{ color: theme.palette.text.secondary, fontSize: 20 }}
        />
      </Stack>

      {/* 📂 Categories Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={activeMenu === "Categories"} // Only open if active menu is "Categories"
        onClose={handleCloseSubMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          mt: 0.5,
          ".MuiPaper-root": {
            borderRadius: 1,
            boxShadow: theme.shadows[3],
            minWidth: 200,
          },
        }}
      >
        {/* Render each category as a MenuItem */}
        {categories.map((cat, i) => (
          <MenuItem key={i} onClick={handleCloseSubMenu}>
            <ListItemText primary={cat} />
          </MenuItem>
        ))}
      </Menu>

      {/* 🔗 Horizontal Menu (Visible on Desktop Only) */}
      {!isSmall && (
        <Stack direction="row" spacing={2} alignItems="center">
          {drawerMenu.map((section) => (
            <div key={section.title}>
              {/* Main navigation link */}
              <Link
                href="#"
                underline="none"
                onClick={(e) => handleOpenSubMenu(e, section.title)} // Opens corresponding submenu
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: 15,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  transition: ".3s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {section.title} <ExpandMore sx={{ fontSize: 20 }} />
              </Link>

              {/* Submenu under main link */}
              <Menu
                anchorEl={anchorEl}
                open={activeMenu === section.title} // Open only if active menu matches
                onClose={handleCloseSubMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  mt: 0.5,
                  ".MuiPaper-root": {
                    borderRadius: 1,
                    boxShadow: theme.shadows[3],
                    minWidth: 180,
                  },
                }}
              >
                {/* Render sub-links */}
                {section.links.map((link, i) => (
                  <MenuItem key={i} onClick={handleCloseSubMenu}>
                    <ListItemText sx={{ color: theme.palette.text.secondary }}>
                      {link}
                    </ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Stack>
      )}

      {/* ☰ Drawer (Mobile Menu - Appears on small screens) */}
      {isSmall && (
        <>
          {/* Drawer toggle button */}
          <IconButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>

          {/* Drawer content */}
          <Drawer
            anchor="top"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            sx={{
              ".MuiDrawer-paper": {
                background: "rgba(0,0,0,0.9)",
                color: "#fff",
                px: 3,
                py: 2,
                borderRadius: "0 0 12px 12px",
              },
            }}
          >
            <Container>
              {/* Close button inside drawer */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <IconButton onClick={() => setOpenDrawer(false)}>
                  <Close sx={{ color: "white", "&:hover": { color: "red" } }} />
                </IconButton>
              </Box>

              {/* Collapsible accordion sections */}
              {drawerMenu.map((section) => (
                <Accordion
                  key={section.title}
                  sx={{
                    background: "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    "&:before": { display: "none" },
                  }}
                >
                  {/* Accordion header */}
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
                  >
                    <Typography fontWeight="bold" sx={{color:'#ccc'}}>{section.title}</Typography>
                  </AccordionSummary>

                  {/* Accordion body (sub-links) */}
                  <AccordionDetails>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href="#"
                        underline="none"
                        sx={{
                          display: "block",
                          color: "#eee",
                          py: 0.5,
                          ml:2,
                          transition: ".3s",
                          "&:hover": { color: "#fff", pl: 1 },
                          "&:first-child": { mt:-2 },
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Container>
          </Drawer>
        </>
      )}
    </Container>
  );
}
