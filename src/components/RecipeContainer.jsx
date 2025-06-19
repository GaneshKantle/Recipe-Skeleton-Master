import { Box, Typography } from "@mui/material";
import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer({ search, data }) {
  let filtered = data.filter((name) =>
    search
      ? name?.name.toLowerCase().includes(search?.toLowerCase()) ||
      name?.cuisine.toLowerCase().includes(search?.toLowerCase())
      : data
  );
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          flexWrap: "wrap",
          overflow: "auto",
        }}
      >
        {filtered.length > 0 ?
          filtered.map((item) => (
            <RecipeCard data={item} />
          )) : (
            <Box
              sx={{
                padding: 2,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  padding: 5,
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    fontFamily={"Poppins"}
                    fontSize={20}
                  >
                    Oops
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    fontFamily={"Poppins"}
                    fontSize={16}
                  >
                    We could not understand what you mean, try rephrasing the query
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}


      </Box>
    </div>
  );
}