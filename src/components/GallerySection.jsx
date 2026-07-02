import React, { useState } from "react";
import { Box, Typography, Dialog, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import expoGardenPhoto from "../assets/expo/081141_0_20260320-140030.jpg";
import wetlandPhoto from "../assets/expo/1645073156193-1068x712-1-1024x683.jpg";
import expoAtmospherePhoto from "../assets/expo/images.jpg";

const content = {
  th: { section: "แกลเลอรี่", title: "ภาพบรรยากาศงาน", sub: "สัมผัสความงามของธรรมชาติและศิลปะที่รอคุณอยู่" },
  en: { section: "Gallery", title: "Expo Atmosphere", sub: "A glimpse of the natural beauty and art awaiting you" },
  zh: { section: "图库", title: "博览会氛围", sub: "提前领略等待您的自然美景与艺术魅力" },
};

const GALLERY = [
  { src: expoGardenPhoto, caption: { th: "ทุ่งดอกทิวลิป", en: "Tulip Fields", zh: "郁金香花田" } },
  { src: wetlandPhoto, caption: { th: "สวนเขตร้อน", en: "Tropical Garden", zh: "热带花园" } },
  { src: expoAtmospherePhoto, caption: { th: "บัวหลวงหนองแด", en: "Nong Dae Lotus", zh: "侬黛莲花" } },
  { src: expoGardenPhoto, caption: { th: "ภูมิทัศน์สวน", en: "Garden Landscape", zh: "园林景观" } },
  { src: wetlandPhoto, caption: { th: "กล้วยไม้นานาพันธุ์", en: "Orchid Collection", zh: "兰花珍藏" } },
  { src: expoAtmospherePhoto, caption: { th: "เรือนกระจกพืชพรรณ", en: "Plant Greenhouse", zh: "植物温室" } },
  { src: wetlandPhoto, caption: { th: "พระอาทิตย์ตกหนองแด", en: "Nong Dae Sunset", zh: "侬黛夕阳" } },
  { src: expoGardenPhoto, caption: { th: "สวนกุหลาบนานาชาติ", en: "International Rose Garden", zh: "国际玫瑰园" } },
  { src: expoAtmospherePhoto, caption: { th: "สวนบอนไซญี่ปุ่น", en: "Japanese Bonsai Garden", zh: "日式盆景园" } },
];

export default function GallerySection({ lang }) {
  const t = content[lang];
  const [lightbox, setLightbox] = useState(null); // index

  const prev = () => setLightbox(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setLightbox(i => (i + 1) % GALLERY.length);

  return (
    <Box id="gallery" sx={{ background: "#0a1f12", py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", mb: 2, fontWeight: 600 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.8rem" }, color: "#FDF6E3", mb: 1.5 }}>
            {t.title}
          </Typography>
          <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.95rem" }}>
            {t.sub}
          </Typography>
        </Box>

        {/* Masonry-style grid */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr", md: "repeat(4,1fr)" },
          gridAutoRows: "200px",
          gap: "6px",
        }}>
          {GALLERY.map((img, i) => (
            <Box
              key={i}
              onClick={() => setLightbox(i)}
              sx={{
                gridColumn: i === 0 || i === 4 ? "span 2" : "span 1",
                gridRow: i === 0 || i === 4 ? "span 2" : "span 1",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "2px",
                "&:hover .overlay": { opacity: 1 },
                "&:hover img": { transform: "scale(1.08)" },
              }}
            >
              <img
                src={img.src}
                alt={img.caption[lang]}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
              />
              {/* Hover overlay */}
              <Box className="overlay" sx={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,46,26,0.85) 0%, rgba(10,46,26,0.2) 60%, transparent 100%)",
                opacity: 0, transition: "opacity 0.3s ease",
                display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                p: 2,
              }}>
                <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", color: "#FDF6E3", fontWeight: 600, fontSize: "0.9rem" }}>
                  {img.caption[lang]}
                </Typography>
                <ZoomInIcon sx={{ color: "#D4A017", fontSize: 22 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Lightbox Dialog */}
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
            {/* Caption bar */}
            <Box sx={{ px: 3, py: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", color: "#FDF6E3", fontWeight: 600, fontSize: "1rem" }}>
                {GALLERY[lightbox].caption[lang]}
              </Typography>
              <Typography sx={{ color: "rgba(253,246,227,0.72)", fontFamily: "'Inter',sans-serif", fontSize: "0.8rem" }}>
                {lightbox + 1} / {GALLERY.length}
              </Typography>
            </Box>

            {/* Prev / Next */}
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