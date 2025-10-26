// 🧩 Importing required components and hooks from React & MUI
import {
  Box,
  Container,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Button,
  CircularProgress,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import AddToCartDialog from "./productModal";

// 🧠 Importing the RTK Query hook
import { useGetAllProductsQuery } from "../../productsApi";

export default function Products() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  // 🎣 Fetching products from Strapi using RTK Query
  const { data, error, isLoading } = useGetAllProductsQuery();

  // 🧠 State to track selected category
  const [alignment, setAlignment] = useState("all");

  // ⚙️ Handle category toggle change
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  // 🧩 Handle loading state
  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress color="primary" />
      </Box>
    );

  // ⚠️ Handle error state
  if (error)
    return (
      <Typography color="error" textAlign="center" mt={10}>
        Error fetching products ❌
      </Typography>
    );

  // ✅ Extract product list from Strapi response
  const allProducts = data?.data || [];

  // 🔍 Filter products based on selected category
  const filteredProducts =
    alignment === "all"
      ? allProducts
      : allProducts.filter(
          (item) => item?.Category?.toLowerCase() === alignment.toLowerCase()
        );

  return (
    <Container sx={{ py: 6 }}>
      {/* 🧱 Header Section → Title + Category Filter */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
        mb={{ xs: 1, md: 4 }}
      >
        {/* 🏷️ Section Heading */}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Selected Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>

        {/* 🎚️ Toggle Button Group → Category Selector */}
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="product categories"
          color="primary"
          sx={{ alignSelf: "center" }}
        >
          <ToggleButton
            size="small"
            sx={{ fontWeight: "600", p: "5px 12px" }}
            value="all"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            size="small"
            sx={{ fontWeight: "600", p: "5px 12px" }}
            value="men"
          >
            Men Category
          </ToggleButton>
          <ToggleButton
            size="small"
            sx={{ fontWeight: "600", p: "5px 12px" }}
            value="women"
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* 🧾 Info about selected category */}
      <Box sx={{ textAlign: { xs: "center", md: "start" }, opacity: 0.8 }}>
        <Typography variant="body1" color="text.secondary">
          Showing products for: <strong>{alignment}</strong>
        </Typography>
      </Box>

      {/* 🧱 Product Grid Layout */}
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        }}
      >
        {/* 🧩 Render Products from API */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => {
            const { id, title, price, description, rating, image } = product;

            const imageUrl = image?.[0]?.url
              ? `${image[0].url}`
              : "https://via.placeholder.com/300x300?text=No+Image";

            return (
              <motion.div
              
                key={id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: index * 0.05,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.9,
                  transition: { duration: 0.25 },
                }}
              >
                <motion.div
                
                style={{height:'100%'}}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                    transition: { type: "spring", stiffness: 250 },
                  }}
                >
                  <Card
                 
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      transition: "0.3s",
                      height:'100%'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={imageUrl}
                      alt={title}
                      sx={{ objectFit: "cover" }}
                    />

                    <CardContent
                    
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={0.5}
                      >
                        <Typography fontSize={15} fontWeight={600}>
                          {title}
                        </Typography>
                        <Typography color="primary" fontWeight={700}>
                          ${price}
                        </Typography>
                      </Stack>

                      <Typography variant="body2" color="#9e9e9e" my={1}>
                        {description ||
                          "Premium quality product with modern design."}
                      </Typography>

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="text"
                          startIcon={<AddShoppingCartIcon />}
                          size="small"
                          sx={{ mt: 1, textTransform: "capitalize", px: 1 }}
                          onClick={() => handleOpenDialog(product)}
                        >
                          Add to Cart
                        </Button>

                        <Rating
                          size="small"
                          value={rating || 4}
                          precision={0.5}
                          readOnly
                          sx={{ mt: 1 }}
                        />
                      </Stack>
                    </CardContent>

                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>

      <AddToCartDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        product={selectedProduct}
      />
    </Container>
  );
}
