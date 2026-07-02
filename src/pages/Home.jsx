import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CountdownSection from "../components/CountdownSection";
import AboutSection from "../components/AboutSection";
import HighlightsSection from "../components/HighlightsSection";
import GallerySection from "../components/GallerySection";
import VenueSection from "../components/VenueSection";
import ActivitiesSection from "../components/ActivitiesSection";
import CTASection from "../components/CTASection";
import SponsorsSection from "../components/SponsorsSection";
import FooterSection from "../components/FooterSection";
import BackToTop from "../components/BackToTop";

const theme = createTheme({
  palette: {
    primary: { main: "#1B4332" },
    secondary: { main: "#D4A017" },
    background: { default: "#FDF6E3" },
  },
  typography: {
    fontFamily: "'Noto Sans Thai', 'Noto Sans SC', 'Segoe UI', Tahoma, Arial, sans-serif",
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: { defaultProps: { elevation: 0 } },
  },
});

const PAGE_TITLES = {
  th: "มหกรรมพืชสวนโลก อุดรธานี 2569",
  en: "Udon Thani International Horticultural Expo 2026",
  zh: "乌隆他尼国际园艺博览会 2026",
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [lang, setLang] = useState("th");

  useEffect(() => {
    document.title = PAGE_TITLES[lang];
  }, [lang]);

  const handleLangChange = useCallback((code) => {
    if (["th", "en", "zh"].includes(code)) setLang(code);
  }, []);

  const handleExplore = useCallback(() => scrollTo("about"), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        body {
          font-family: 'Noto Sans Thai', 'Noto Sans SC', 'Segoe UI', Tahoma, Arial, sans-serif;
          color: #17382a;
          background: #fff9e8;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Box sx={{ overflowX: "hidden" }}>
        <NavBar lang={lang} setLang={handleLangChange} />
        <HeroSection lang={lang} onExplore={handleExplore} />
        <CountdownSection lang={lang} />
        <AboutSection lang={lang} />
        <HighlightsSection lang={lang} />
        {/* <GallerySection lang={lang} /> */}
        <VenueSection lang={lang} />
        <ActivitiesSection lang={lang} />
        {/* <CTASection lang={lang} /> */}
        <SponsorsSection lang={lang} />
        <FooterSection lang={lang} />
        <BackToTop />
      </Box>
    </ThemeProvider>
  );
}
