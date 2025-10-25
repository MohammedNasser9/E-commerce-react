// Import React hooks and context
import { useContext } from "react";
import { ColorModeContext } from '../../../theme'; // Custom context for toggling light/dark mode

// Import Material UI components
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Select,
  MenuItem,
  Container,
} from "@mui/material";

// Import Material UI icons
import {
  DarkModeOutlined,
  LightModeOutlined,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // Custom "X" (Twitter) icon

// Main Header component
export default function Header1() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // Handle theme mode switching (dark <-> light)
  const handleToggleMode = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1F2937", // Dark gray background
        color: "#FFF",
        // padding: "8px min(3%, 70px)", // Slightly tighter padding
        borderRadius: "0 0 5px 5px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 40, // fixed height for consistency
          overflow: "hidden",
        }}

      >
        {/* ---------- LEFT SIDE (Promo section) ---------- */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ minWidth: 0 }} //  يسمح بتقصير المحتوى جوا العنصر
        >
          {/* "HOT" badge */}
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#111827",
              color: "#ff3b3b",
              fontSize: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px 7px",
              borderRadius: 2,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            HOT
          </Typography>

          {/* Promo text */}
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: 12.3,
              fontWeight: 400,
              opacity: 0.9,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Free Express Shipping
          </Typography>
        </Stack>

        {/* ---------- RIGHT SIDE (Controls section) ---------- */}
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Theme toggle button */}
          <IconButton
            onClick={handleToggleMode}
            color="inherit"
            sx={{ p: 0.3 }} // smaller clickable area
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlined sx={{ fontSize: 20 }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: 20 }} />
            )}
          </IconButton>

          {/* Language selector dropdown */}
          <Select
            defaultValue="En"
            variant="standard"
            disableUnderline
            size="small"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: 13,
              height: 32,
              minWidth: 25,
              border: "none",
              "& .MuiSvgIcon-root": { color: "white", fontSize: 18 },
              "& .MuiSelect-select": {
                alignItems:'center',
                fontSize:11,
                padding: 0,
                margin: 0,
                paddingRight: "20px !important", // تقليل المسافة قبل السهم
              },
            }}
          >
            <MenuItem sx={{fontSize:12}} value="En">EN</MenuItem>
            <MenuItem sx={{fontSize:12}} value="Ar">AR</MenuItem>
          </Select>

          {/* Social media icons */}
          <Stack direction={"row"} spacing={1}>
            <IconButton color="inherit" size="small" sx={{ p: 0 }}>
              <Facebook sx={{ fontSize: 18 }} />
            </IconButton>

            <IconButton color="inherit" size="small" sx={{ p: 0 }}>
              <XIcon sx={{ fontSize: 18 }} />
            </IconButton>

            <IconButton color="inherit" size="small" sx={{ p: 0 }}>
              <Instagram sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
