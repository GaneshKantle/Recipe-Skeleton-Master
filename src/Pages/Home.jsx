// Home.js
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "100%",
        py: 8,
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" color="secondary" gutterBottom>
              Taste the Magic
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 500 }}
            >
              Explore handcrafted recipes from around the world, personalized for your kitchen. Start your culinary journey today with FlavorNest.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/recipe"
            >
              Explore Menu
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component={motion.img}
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Gourmet Dish"
            sx={{
              width: "100%",
              borderRadius: 4,
              objectFit: "cover",
              boxShadow: 3,
              maxHeight: 500,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}