import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "./classes.module.css";
import NavBar from "../NavBar/NavBar";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { i18nMap } from "../../i18n/map"; // Ensure this file is correctly set up with keys

export default function Header() {
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography component="h1" variant="h5">
          {t(i18nMap.header.title)} {/* Translated title */}
        </Typography>
        <Typography variant="body2">
          {t(i18nMap.header.description)} {/* Translated description */}
        </Typography>
        <NavBar />
      </Box>
      <Box>
        <LanguageSelector />
      </Box>
    </Box>
  );
}
