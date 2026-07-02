import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const content = {
  th: {
    eyebrow: "มหกรรมพืชสวนโลก อุดรธานี 2569",
    headline: "ความงามแห่งธรรมชาติ\nกลางผืนน้ำหนองแด",
    sub: "1 พฤศจิกายน 2569 - 14 มีนาคม 2570\nพื้นที่ชุ่มน้ำหนองแด ตำบลกุดสระ อำเภอเมือง จังหวัดอุดรธานี",
    cta: "สำรวจงาน",
  },
  en: {
    eyebrow: "Udon Thani International Horticultural Expo 2026",
    headline: "Nature's Beauty\nAt Nong Dae Wetlands",
    sub: "1 November 2026 - 14 March 2027\nNong Dae Wetlands, Kut Sa, Mueang District, Udon Thani",
    cta: "Explore the Expo",
  },
  zh: {
    eyebrow: "乌隆他尼国际园艺博览会 2026",
    headline: "自然之美\n绽放于侬岱湿地",
    sub: "2026年11月1日 - 2027年3月14日\n泰国乌隆他尼府侬岱湿地",
    cta: "探索博览会",
  },
};

export default function HeroSection({ lang, onExplore }) {
  const t = content[lang];
  const lines = t.headline.split("\n");
  const subLines = t.sub.split("\n");

  return (
    <Box
      sx={{
        minHeight: { xs: "92vh", md: "100vh" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #0a2e1a 0%, #1B4332 40%, #2d6a4f 70%, #1a3a2a 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          background: `
            radial-gradient(ellipse 60% 40% at 20% 60%, #D4A017 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 80% 30%, #52b788 0%, transparent 60%)
          `,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: { xs: "-24%", sm: "-10%", md: "5%" },
          top: "50%",
          transform: "translateY(-50%)",
          opacity: { xs: 0.12, md: 0.18 },
          width: { xs: 260, sm: 340, md: 480 },
          height: { xs: 260, sm: 340, md: 480 },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="18"
              ry="55"
              fill="#D4A017"
              transform={`rotate(${deg} 100 100)`}
              style={{ animation: `petalPulse ${2 + i * 0.15}s ease-in-out infinite alternate` }}
            />
          ))}
          <circle cx="100" cy="100" r="22" fill="#ffd166" />
          <circle cx="100" cy="100" r="12" fill="#D4A017" />
          <style>{`
            @keyframes petalPulse {
              from { opacity: 0.5; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1.05); }
            }
          `}</style>
        </svg>
      </Box>

      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: `${10 + i * 8}%`,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: `${120 + i * 70}px`, md: `${200 + i * 120}px` },
            height: { xs: `${28 + i * 12}px`, md: `${40 + i * 20}px` },
            border: "1px solid rgba(82,183,136,0.3)",
            borderRadius: "50%",
            animation: `ripple ${2 + i * 0.5}s ease-in-out infinite`,
            "@keyframes ripple": {
              "0%": { opacity: 0.6, transform: "translateX(-50%) scaleX(1)" },
              "50%": { opacity: 0.3, transform: "translateX(-50%) scaleX(1.05)" },
              "100%": { opacity: 0.6, transform: "translateX(-50%) scaleX(1)" },
            },
          }}
        />
      ))}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 2.5, sm: 4, md: 6 },
          pt: { xs: 8, md: 0 },
          maxWidth: 860,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#D4A017",
            letterSpacing: { xs: "0.12em", md: "0.25em" },
            fontSize: { xs: "0.68rem", md: "0.78rem" },
            display: "block",
            mb: 2,
            fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
          }}
        >
          {t.eyebrow}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', 'Noto Serif Thai', 'Noto Sans SC', serif",
            fontWeight: 700,
            fontSize: { xs: "2.15rem", sm: "3.15rem", md: "5rem" },
            lineHeight: { xs: 1.2, md: 1.15 },
            color: "#FDF6E3",
            mb: 3,
            overflowWrap: "anywhere",
            "& .gold": { color: "#D4A017" },
          }}
        >
          {lines[0]}
          <br />
          <span className="gold">{lines[1]}</span>
        </Typography>

        <Box sx={{ width: 60, height: 3, background: "#D4A017", mx: "auto", mb: 3, borderRadius: 2 }} />

        <Stack spacing={0.5} sx={{ mb: { xs: 4, md: 5 } }}>
          {subLines.map((line, i) => (
            <Typography
              key={i}
              sx={{
                color: "rgba(253,246,227,0.82)",
                fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
                fontSize: { xs: "0.9rem", md: "1.05rem" },
                lineHeight: 1.7,
              }}
            >
              {line}
            </Typography>
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={onExplore}
          sx={{
            background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
            color: "#0a2e1a",
            fontWeight: 700,
            fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
            fontSize: { xs: "0.95rem", md: "1rem" },
            width: { xs: "100%", sm: "auto" },
            maxWidth: 320,
            px: 5,
            py: 1.6,
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #e8b420 0%, #D4A017 100%)",
              boxShadow: "0 6px 28px rgba(212,160,23,0.6)",
              transform: "translateY(-2px)",
            },
            transition: "all 0.25s ease",
          }}
        >
          {t.cta}
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 32 },
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(253,246,227,0.78)",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%,100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(8px)" },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
      </Box>
    </Box>
  );
}
