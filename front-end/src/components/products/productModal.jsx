import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  Stack,
  CardMedia,
  Rating,
} from "@mui/material";
import { useState } from "react";

export default function AddToCartDialog({ open, handleClose, product }) {
  if (!product) return null;

  const { title, price, description, rating, image } = product;

  // ✅ لو مفيش صور خالص fallback
  const images = image?.length
    ? image.map((img) => `${img.url}`)
    : ["https://via.placeholder.com/400x500?text=No+Image"];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // 🎯 الصورة الرئيسية الحالية

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 3,
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          p: 0,
          height: "100%",
        }}
      >
        {/* 🖼️ Left Section — Main Image */}
        <Box
          sx={{
            height: { xs: 220, sm: 400 },
            flex: 1.2,
            bgcolor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #eee",
          }}
        >
          <CardMedia
            component="img"
            image={selectedImage}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // عشان الصورة تفضل ثابتة ومتتمدش
              transition: "0.3s ease-in-out",
            }}
          />
        </Box>

        {/* 📦 Right Section — Product Details */}
        <Box
          sx={{
            flex: 1,
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack  justifyContent={'center'} sx={{height:'100%' , minHeight:'250px'}}>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                {title}
              </Typography>

              <Typography color="primary" fontWeight={600} fontSize={18} mt={.5}>
                ${price}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
                sx={{ lineHeight: 1.6 }}
              >
                {description ||
                  "High-quality product made with attention to detail."}
              </Typography>

              <Rating
                value={rating || 4}
                precision={0.5}
                readOnly
                size="small"
                sx={{ mt: 1 }}
              />
            </Box>

            {/* 🖼️ Thumbnails Gallery */}
            <Stack direction="row" mt={1} flexWrap="wrap">
              {images.map((img, idx) => (
                <Box
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  sx={{
                    width: 60,
                    height: 60,
                    m: 0.5,
                    borderRadius: 1.5,
                    overflow: "hidden",
                    cursor: "pointer",
                    border:
                      selectedImage === img
                        ? "2px solid #1976d2"
                        : "1px solid #ccc",
                    transition: "0.2s",
                    "&:hover": {
                      border: "2px solid #1976d2",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`thumb-${idx}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Stack>
          {/* 🧾 Product Info */}

          {/* ⚙️ Actions */}
          <DialogActions sx={{ p: 0, mt: 3 }}>
            <Button onClick={handleClose} color="inherit">
              Close
            </Button>
            <Button variant="contained" color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
