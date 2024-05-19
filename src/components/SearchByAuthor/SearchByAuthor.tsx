"use client";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";
import React, { useState } from "react";

import { useShop } from "@/app/context/ShopContext";

import SearchDis from "../../../public/img/search_disabled.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  textTransform: "uppercase",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const SearchByAuthor = () => {
  // const [isSearching, setIsSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setAuthorName } = useShop();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    console.log("nav", value);
    setAuthorName(value);
  };

  return (
    <div className="flex">
      <Box>
        <Search>
          <div className="flex border-b border-Black pr-2">
            <Image src={SearchDis} alt="search icon" quality={100} />
          </div>

          <StyledInputBase
            id="searchInput"
            placeholder="SEARCH AUTHOR"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInputChange}
            value={inputValue}
            className="border-b border-Black"
          />
        </Search>
      </Box>
    </div>
  );
};
