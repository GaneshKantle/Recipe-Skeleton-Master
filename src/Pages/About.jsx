
// About.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 6,
      }}
    >
      <Typography variant="h3" color="secondary" gutterBottom textAlign="center">
        About Us
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            component={motion.img}
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
            alt="Kitchen"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: 3,
              objectFit: "cover",
              maxHeight: 400,
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            color="text.secondary"
            component={motion.p}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{ lineHeight: 1.8 }}
          >
            FlavorNest is more than just a recipe app—it's your digital restaurant, designed to ignite your passion for food. We bring you an array of curated dishes,
            from traditional favorites to modern cuisine, backed by intuitive search and seamless browsing. Our goal? To make your meal decisions faster, smarter, and tastier.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
