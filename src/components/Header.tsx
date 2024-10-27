import { Box, Typography } from "@mui/material";
import classes from "../pages/DefaultTemplate/classes.module.css";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <>
      <Box className={classes.root}>
        <Typography component="h1" variant="h5">
          My movie application
        </Typography>
        <Typography variant="body2">
          Search and browse among movies of TMDB database
        </Typography>
        <NavBar />
      </Box>
    </>
  );
}
