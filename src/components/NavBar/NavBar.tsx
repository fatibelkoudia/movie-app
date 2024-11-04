import { Tab, Tabs } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMatch, useNavigate } from "react-router-dom";
import { i18nMap } from "../../i18n/map";

export default function NavBar() {
  const { t } = useTranslation();
  const isHomePage = !!useMatch("/");
  const isMoviesPage = !!useMatch("/movies/*");

  const [value, setValue] = useState(0);

  useEffect(() => {
    let selectedIndex = 0;
    if (isHomePage) selectedIndex = 0;
    if (isMoviesPage) selectedIndex = 1;
    setValue(selectedIndex);
  }, [isHomePage, isMoviesPage]);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newIndex: number) => {
      setValue(newIndex);
    },
    [setValue]
  );
  const navigate = useNavigate();
  const goto = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
      event.preventDefault();
      navigate(href);
    },
    [navigate]
  );
  return (
    <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
      <Tab
        label={t(i18nMap.nav.home)} // Translated label for "Home"
        component="a"
        onClick={(e) => goto(e, "/")}
      />
      <Tab
        label={t(i18nMap.nav.movies)} // Translated label for "Movies"
        component="a"
        onClick={(e) => goto(e, "/movies")}
      />
    </Tabs>
  );
}
