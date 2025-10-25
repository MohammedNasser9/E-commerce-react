// 🧩 Importing necessary components from MUI
import { Box, Container, Stack, Typography, Link, Divider } from "@mui/material";

// 🧠 Footer Component — built by Mohammed Nasser
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1F2937",
        py: 2.5,
        color:'#d6d6d6',
        borderRadius: "5px 5px 0 0",
      }}
    >
      <Container>
        
        <Typography
          variant="body2"
          textAlign="center"
        >
          © {new Date().getFullYear()} MyStore — Developed by{" "}
          <strong style={{whiteSpace:'nowrap'}}>Mohammed Nasser</strong>.
        </Typography>
      </Container>
    </Box>
  );
}
