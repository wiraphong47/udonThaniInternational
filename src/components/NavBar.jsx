import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemText, useScrollTrigger,
  Slide, Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const navItems = {
  th: ["เกี่ยวกับงาน", "ไฮไลท์", "สถานที่", "กิจกรรม", "ติดต่อ"],
  en: ["About", "Highlights", "Venue", "Activities", "Contact"],
  zh: ["关于", "亮点", "场地", "活动", "联系"],
};

const brand = {
  th: "พืชสวนโลก อุดรธานี",
  en: "Udon Thani Expo 2026",
  zh: "乌隆他尼园博会",
};

const langLabels = [
  { code: "th", label: "ไทย" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 10 });
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function NavBar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const sectionIds = ["about", "highlights", "venue", "activities", "contact"];

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={scrolled ? 4 : 0}
          sx={{
            background: scrolled ? "rgba(11,46,26,0.97)" : "linear-gradient(180deg, rgba(5,15,9,0.72), transparent)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            transition: "all 0.4s ease",
            borderBottom: scrolled ? "1px solid rgba(212,160,23,0.2)" : "none",
          }}
        >
          <Toolbar sx={{ px: { xs: 1.5, sm: 2.5, md: 4 }, minHeight: { xs: "60px !important", md: "68px !important" }, gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1, minWidth: 0 }}>
              <LocalFloristIcon sx={{ color: "#D4A017", fontSize: { xs: 24, md: 28 }, flexShrink: 0 }} />
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', 'Noto Serif Thai', 'Noto Sans SC', serif",
                  fontWeight: 700,
                  fontSize: { xs: "0.86rem", sm: "0.98rem", md: "1.1rem" },
                  color: "#FDF6E3",
                  lineHeight: 1.2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {brand[lang]}
              </Typography>
            </Box>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
              {navItems[lang].map((item, i) => (
                <Button
                  key={item}
                  onClick={() => scrollTo(sectionIds[i])}
                  sx={{
                    color: "rgba(253,246,227,0.88)",
                    fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    px: 1.5,
                    "&:hover": { color: "#D4A017", background: "transparent" },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            <Box
              sx={{
                display: "flex",
                border: "1px solid rgba(212,160,23,0.45)",
                borderRadius: "4px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {langLabels.map(({ code, label }) => (
                <Button
                  key={code}
                  onClick={() => setLang(code)}
                  sx={{
                    minWidth: 0,
                    px: { xs: 0.9, sm: 1.25 },
                    py: 0.45,
                    fontSize: { xs: "0.68rem", sm: "0.72rem" },
                    fontWeight: 700,
                    fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
                    borderRadius: 0,
                    color: lang === code ? "#0a2e1a" : "rgba(253,246,227,0.78)",
                    background: lang === code ? "#D4A017" : "transparent",
                    "&:hover": {
                      background: lang === code ? "#D4A017" : "rgba(212,160,23,0.15)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <IconButton
              aria-label="open menu"
              sx={{ display: { xs: "flex", md: "none" }, ml: 0.25, color: "#FDF6E3", flexShrink: 0 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "#0a2e1a",
            width: { xs: "82vw", sm: 320 },
            maxWidth: 340,
            pt: 2,
            borderLeft: "1px solid rgba(212,160,23,0.25)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, mb: 1 }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif", fontWeight: 700 }}>
            {brand[lang]}
          </Typography>
          <IconButton aria-label="close menu" onClick={() => setDrawerOpen(false)} sx={{ color: "#FDF6E3" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navItems[lang].map((item, i) => (
            <ListItem
              key={item}
              onClick={() => scrollTo(sectionIds[i])}
              sx={{
                cursor: "pointer",
                borderRadius: "4px",
                py: 1.35,
                "&:hover": { background: "rgba(212,160,23,0.12)" },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: "#FDF6E3",
                    fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
