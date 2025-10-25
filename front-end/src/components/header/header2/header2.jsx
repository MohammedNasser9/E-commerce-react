import { useState } from "react";
import {
  alpha,
  InputBase,
  Stack,
  Typography,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import styled from "@emotion/styled";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

// 🔍 Styled Search Box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginInline: "auto",
  display: "flex",
  alignItems: "center",
  flex: 1,
  height: 40,
  border: "1px solid rgba(0,0,0,.1)",
  borderRadius: theme.shape.borderRadius * 3,
  overflow: "hidden",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    }
}));

// 🔎 Icon inside the search input
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// ✍️ Styled Input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function Header2() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const options = ["All Categories", "Cars", "Clothes", "Electronics"];

  // 🔹 عدد المنتجات في السلة
  const cartCount = 3;

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 2,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap:isSmall?.5:2,
        borderRadius: 1,
      }}
    >
      {/*  Logo Section */}
      <Stack alignItems="center" direction={isSmall?'row':'column'} spacing={.5}>
        <StoreOutlinedIcon sx={{ fontSize: 22 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 16 }}>
          E-Commerce
        </Typography>
      </Stack>

      {/*  Search + Category Menu */}
      <Search
        style={{
          order: isSmall ? 2 : 0,
          minWidth: isSmall ? "100%" : null,
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        {/*  Category Menu */}
        <Box
          onClick={handleMenuOpen}
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            cursor: "pointer",
            background: "rgba(204, 204, 204, .3)",
            height: "100%",
            px: 1,
          }}
        >
          <Typography
            sx={{ fontSize: 12, fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            {options[selectedIndex]}
          </Typography>
          <ExpandMoreOutlinedIcon sx={{ fontSize: 18 }} />
        </Box>

        {/* Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          {options.map((option, index) => (
            <MenuItem
              sx={{ fontSize: 12 }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      {/*  User + Cart Icons */}
      <Stack direction="row" alignItems="center" spacing={0}>
        <IconButton sx={{ p: 0.5 }}>
          <PersonOutlineOutlinedIcon />
        </IconButton>

        {/* 🛒 Cart with Badge */}
        <IconButton sx={{ p: 0.5 }}>
          <Badge
            badgeContent={cartCount}
            color="primary"
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: "0.65rem",
                height: 16,
                minWidth: 16,
              },
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Stack>
    </Container>
  );
}
