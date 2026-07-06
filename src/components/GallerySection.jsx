import React, { useState } from "react";
import { Box, Typography, Dialog, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import expoSignPhoto from "../assets/expo/expo-sign.jpg";
import expoFireworksPhoto from "../assets/expo/expo-fireworks.jpg";
import expoFlowerGardenPhoto from "../assets/expo/expo-flower-garden.jpg";
import expoAerialSitePhoto from "../assets/expo/expo-aerial-site.jpg";
import expoPromptPhoto from "../assets/expo/expo-prompt.jpg";
import expoLandscapePhoto from "../assets/expo/expo-landscape.webp";

const content = {
  th: {
    section: "แกลเลอรี",
    title: "ภาพบรรยากาศงาน",
    sub: "สัมผัสความงามของธรรมชาติและศิลปะที่รอคุณอยู่",
  },
  en: {
    section: "Gallery",
    title: "Expo Atmosphere",
    sub: "A glimpse of the natural beauty and art awaiting you",
  },
  zh: {
    section: "图库",
    title: "博览会氛围",
    sub: "提前领略等待您的自然美景与艺术魅力",
  },
};

const GALLERY = [
  { src: expoAerialSitePhoto, position: "center", caption: { th: "ผังพื้นที่งาน", en: "Expo Masterplan", zh: "园区总览" } },
  { src: expoFireworksPhoto, position: "center", caption: { th: "การแสดงยามค่ำ", en: "Night Performance", zh: "夜间表演" } },
  { src: expoFlowerGardenPhoto, position: "center", caption: { th: "สวนดอกไม้", en: "Flower Garden", zh: "花园景观" } },
  { src: expoSignPhoto, position: "center", caption: { th: "ป้ายทางเข้างาน", en: "Expo Entrance Sign", zh: "入口标识" } },
  { src: expoLandscapePhoto, position: "center", caption: { th: "พื้นที่ภูมิทัศน์", en: "Landscape Area", zh: "景观区域" } },
  { src: expoPromptPhoto, position: "center", caption: { th: "อุดรธานีพร้อม", en: "Udon Thani Prompt", zh: "乌隆他尼愿景" } },
];

const galleryLayout = [
  { mdColumn: "1 / span 6", mdRow: "1 / span 2", smColumn: "1 / span 2", smRow: "span 2" },
  { mdColumn: "7 / span 3", mdRow: "1 / span 1", smColumn: "span 1", smRow: "span 1" },
  { mdColumn: "10 / span 3", mdRow: "1 / span 1", smColumn: "span 1", smRow: "span 1" },
  { mdColumn: "7 / span 3", mdRow: "2 / span 1", smColumn: "span 1", smRow: "span 1" },
  { mdColumn: "10 / span 3", mdRow: "2 / span 1", smColumn: "span 1", smRow: "span 1" },
  { mdColumn: "1 / span 12", mdRow: "3 / span 1", smColumn: "1 / span 2", smRow: "span 1" },
];

export default function GallerySection({ lang }) {
  const t = content[lang];
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setLightbox((i) => (i + 1) % GALLERY.length);

  return (
    <Box id="gallery" sx={{ background: "#0a1f12", py: { xs: 10, md: 14 }, px: { xs: 2.25, sm: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1120, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.8rem" }, color: "#FDF6E3", mb: 1.5 }}>
            {t.title}
          </Typography>
          <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.95rem" }}>
            {t.sub}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(12, 1fr)" },
            gridAutoRows: { xs: "240px", sm: "190px", md: "175px" },
            gap: { xs: 1.25, md: 1.5 },
            p: { xs: 0.75, md: 1 },
            border: "1px solid rgba(212,160,23,0.16)",
            borderRadius: "8px",
            background: "rgba(253,246,227,0.035)",
          }}
        >
          {GALLERY.map((img, i) => (
            <Box
              key={img.caption.en}
              onClick={() => setLightbox(i)}
              sx={{
                gridColumn: {
                  xs: "span 1",
                  sm: galleryLayout[i].smColumn,
                  md: galleryLayout[i].mdColumn,
                },
                gridRow: {
                  xs: "span 1",
                  sm: galleryLayout[i].smRow,
                  md: galleryLayout[i].mdRow,
                },
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "6px",
                background: "#06150c",
                boxShadow: i === 0 ? "0 18px 45px rgba(0,0,0,0.22)" : "none",
                "&:hover .overlay": { opacity: 1 },
                "&:hover img": { transform: "scale(1.045)" },
              }}
            >
              <img
                src={img.src}
                alt={img.caption[lang]}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.position, display: "block", transition: "transform 0.45s ease" }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5,15,9,0.84) 0%, rgba(5,15,9,0.28) 48%, rgba(5,15,9,0.02) 100%)",
                  opacity: { xs: 1, md: i === 0 ? 1 : 0 },
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 1.5,
                  p: { xs: 1.75, md: 2 },
                }}
              >
                <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", color: "#FDF6E3", fontWeight: 700, fontSize: i === 0 ? { xs: "1.05rem", md: "1.28rem" } : "0.95rem", lineHeight: 1.25 }}>
                  {img.caption[lang]}
                </Typography>
                <Box sx={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", background: "rgba(212,160,23,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ZoomInIcon sx={{ color: "#0a2e1a", fontSize: 18 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        PaperProps={{ sx: { background: "#050f09", borderRadius: "4px", overflow: "hidden", position: "relative" } }}
      >
        {lightbox !== null && (
          <>
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption[lang]}
              style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", display: "block", background: "#000" }}
            />
            <Box sx={{ px: 3, py: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", color: "#FDF6E3", fontWeight: 700, fontSize: "1rem" }}>
                {GALLERY[lightbox].caption[lang]}
              </Typography>
              <Typography sx={{ color: "rgba(253,246,227,0.72)", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.8rem" }}>
                {lightbox + 1} / {GALLERY.length}
              </Typography>
            </Box>

            <IconButton onClick={prev} sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "#FDF6E3", "&:hover": { background: "#D4A017", color: "#0a2e1a" } }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={next} sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "#FDF6E3", "&:hover": { background: "#D4A017", color: "#0a2e1a" } }}>
              <ArrowForwardIosIcon />
            </IconButton>
            <IconButton onClick={() => setLightbox(null)} sx={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.5)", color: "#FDF6E3", "&:hover": { background: "rgba(0,0,0,0.8)" } }}>
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Dialog>
    </Box>
  );
}
