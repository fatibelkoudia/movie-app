import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  // Update the search term as the user types
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Trigger search on "Enter" key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(searchTerm);
    }
  };

  // Trigger search on icon click
  const handleClick = () => {
    onSearch?.(searchTerm);
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder={placeholder}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      onKeyDown={handleKeyDown}
      variant="outlined"
      fullWidth
    />
  );
}
