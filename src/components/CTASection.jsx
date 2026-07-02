import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const content = {
  th: {
    eyebrow: "อย่าพลาด",
    title: "จองบัตรล่วงหน้า\nรับส่วนลดพิเศษ",
    sub: "ลงทะเบียนรับข่าวสารและสิทธิ์ซื้อบัตรก่อนใครในราคา Early Bird",
    btn1: "จองบัตรเข้างาน",
    btn2: "รับการแจ้งเตือน",
    note: "เปิดจำหน่ายบัตร Early Bird 1 กรกฎาคม 2569",
  },
  en: {
    eyebrow: "Don't Miss Out",
    title: "Book Early &\nGet Special Discounts",
    sub: "Register now to receive updates and Early Bird ticket access before the general public.",
    btn1: "Book Your Tickets",
    btn2: "Get Notified",
    note: "Early Bird tickets on sale 1 July 2026",
  },
  zh: {
    eyebrow: "不容错过",
    title: "提前预订\n享受特别优惠",
    sub: "立即注册，率先获取早鸟票资格与最新资讯。",
    btn1: "预订门票",
    btn2: "接收通知",
    note: "早鸟票于2026年7月1日开售",
  },
};

export default function CTASection({ lang }) {
  const t = content[lang];
  const lines = t.title.split("\n");

  return (
    <Box
      id="tickets"
      sx={{
        position: "relative",
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 8 },
        overflow: "hidden",
        background: "linear-gradient(135deg, #1B4332 0%, #0a2e1a 50%, #1a3a28 100%)",
        textAlign: "center",
      }}
    >
      {/* Decorative rings */}
      {[280, 480, 680].map((size, i) => (
        <Box key={i} sx={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: size, height: size,
          border: "1px solid rgba(212,160,23,0.08)",
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
      ))}

      {/* Gold glow */}
      <Box sx={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Box sx={{ position: "relative", zIndex: 2, maxWidth: 680, mx: "auto" }}>
        <Typography sx={{ color: "#D4A017", fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", mb: 2, fontWeight: 600 }}>
          {t.eyebrow}
        </Typography>

        <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai',serif", fontWeight: 700, fontSize: { xs: "2.2rem", md: "3.5rem" }, color: "#FDF6E3", lineHeight: 1.2, mb: 3 }}>
          {lines[0]}<br />
          <Box component="span" sx={{ color: "#D4A017" }}>{lines[1]}</Box>
        </Typography>

        <Box sx={{ width: 50, height: 2, background: "#D4A017", mx: "auto", mb: 3, borderRadius: 1 }} />

        <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai',sans-serif", color: "rgba(253,246,227,0.7)", fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.8, mb: 5 }}>
          {t.sub}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<ConfirmationNumberIcon />}
            sx={{
              background: "linear-gradient(135deg,#D4A017,#b8860b)",
              color: "#0a2e1a",
              fontWeight: 700,
              fontFamily: "'Inter','Noto Sans Thai',sans-serif",
              fontSize: "1rem",
              px: 5, py: 1.6,
              borderRadius: 0,
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
              "&:hover": { background: "linear-gradient(135deg,#e8b420,#D4A017)", transform: "translateY(-2px)", boxShadow: "0 8px 28px rgba(212,160,23,0.5)" },
              transition: "all .25s",
            }}
          >
            {t.btn1}
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<NotificationsActiveIcon />}
            sx={{
              borderColor: "rgba(212,160,23,0.5)",
              color: "#D4A017",
              fontWeight: 600,
              fontFamily: "'Inter','Noto Sans Thai',sans-serif",
              fontSize: "1rem",
              px: 4, py: 1.6,
              borderRadius: 0,
              "&:hover": { borderColor: "#D4A017", background: "rgba(212,160,23,0.08)", transform: "translateY(-2px)" },
              transition: "all .25s",
            }}
          >
            {t.btn2}
          </Button>
        </Stack>

        <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai',sans-serif", color: "rgba(253,246,227,0.72)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          {t.note}
        </Typography>
      </Box>
    </Box>
  );
}