import React from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, Box } from "@mui/material";
import classes from "./classes.module.css"; // Assuming we will use some styles

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  // Function to handle language change
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box className={classes.root}>
      <Select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as string)}
        className={classes.select}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </Select>
    </Box>
  );
}
