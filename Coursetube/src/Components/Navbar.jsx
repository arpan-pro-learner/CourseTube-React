import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../Utils/Constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />

          <Typography
    variant="h4"
    sx={{
      color: "#F31503",
      fontWeight: "bold",
      ml: { sm: 2, md: 4, xs: 2 },
      display: { xs: 'none', sm: "block" },
    }}
  >
    Course<span style={{ color: "white" }}>Tube</span>
  </Typography>
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;
