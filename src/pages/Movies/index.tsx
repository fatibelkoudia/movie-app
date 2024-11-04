import React from "react";
import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { i18nMap } from "../../i18n/map"; // Access the typed translation keys
import { useTranslation } from "react-i18next";

export default function Movies() {
  const { t } = useTranslation();

  // Function to handle search action
  const onSearch = (term: string) => {
    console.log("Search term:", term); // Log the search term to the console
  };

  return (
    <Box padding={2}>
      <SearchBar
        placeholder={t(i18nMap.movies.searchBar.placeholder)} // Use i18n for the placeholder
        onSearch={onSearch} // Pass the onSearch function to the SearchBar
      />
    </Box>
  );
}
