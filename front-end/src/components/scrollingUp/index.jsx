// 🧩 Import necessary MUI components and hooks

import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// 🚀 Scroll to Top Button Component — by Mohammed Nasser
export default function ScrollToTop() {
  // 🎯 Detect scroll position (true if user scrolled more than 100px)
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  // ⚙️ Scroll smoothly to the top when button is clicked
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // 🌀 Zoom animation (button appears when scrolled down)
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed", // keeps it fixed on screen
          bottom: 24, // distance from bottom
          right: 24, // distance from right side
          zIndex: 1200, // ensure it stays on top of other elements
        }}
      >
        {/* ⬆️ Floating Action Button */}
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          sx={{
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}
