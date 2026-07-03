import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const content = {
  th: {
    label: "นับถอยหลังสู่วันเปิดงาน",
    units: ["วัน", "ชั่วโมง", "นาที", "วินาที"],
    opens: "เปิดงาน 1 พฤศจิกายน 2569",
  },
  en: {
    label: "Countdown to Opening Day",
    units: ["Days", "Hours", "Minutes", "Seconds"],
    opens: "Opens 1 November 2026",
  },
  zh: {
    label: "开幕倒计时",
    units: ["天", "小时", "分钟", "秒"],
    opens: "开幕日期：2026年11月1日",
  },
};

function getCountdown() {
  const target = new Date("2026-11-01T00:00:00+07:00");
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownSection({ lang }) {
  const t = content[lang];
  const [time, setTime] = useState(getCountdown());

  useEffect(() => {
    const id = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <Box
      id="about"
      sx={{
        background: "#0d2018",
        py: { xs: 7, md: 10 },
        px: { xs: 2, sm: 3, md: 6 },
        textAlign: "center",
        borderTop: "1px solid rgba(212,160,23,0.15)",
        borderBottom: "1px solid rgba(212,160,23,0.15)",
      }}
    >
      <Typography
        sx={{
          color: "#D4A017",
          fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
          fontSize: { xs: "0.72rem", md: "0.75rem" },
          letterSpacing: { xs: "0.12em", md: "0.25em" },
          textTransform: "uppercase",
          mb: 2,
          fontWeight: 700,
        }}
      >
        {t.label}
      </Typography>

      <Grid container spacing={{ xs: 1.2, sm: 2, md: 3 }} justifyContent="center" sx={{ maxWidth: 760, mx: "auto", mb: 3 }}>
        {values.map((val, i) => (
          <Grid item xs={6} sm={3} key={t.units[i]}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,160,23,0.2)",
                borderRadius: "4px",
                py: { xs: 2.4, md: 4 },
                px: { xs: 1, md: 2 },
                minHeight: { xs: 118, md: 154 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #D4A017, transparent)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: "2.45rem", sm: "3rem", md: "3.8rem" },
                  color: "#FDF6E3",
                  lineHeight: 1,
                  mb: 0.75,
                }}
              >
                {String(val).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  color: "#D4A017",
                  fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
                  fontSize: { xs: "0.7rem", md: "0.72rem" },
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.units[i]}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          color: "rgba(253,246,227,0.82)",
          fontFamily: "'Inter', 'Noto Sans Thai', 'Noto Sans SC', sans-serif",
          fontSize: { xs: "0.84rem", md: "0.9rem" },
          lineHeight: 1.6,
        }}
      >
        {t.opens}
      </Typography>
    </Box>
  );
}
