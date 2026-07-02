import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FlightIcon from "@mui/icons-material/Flight";

const content = {
  th: {
    section: "สถานที่จัดงาน",
    title: "พื้นที่ชุ่มน้ำหนองแด\nอุดรธานี",
    sub: "ใจกลางธรรมชาติที่สมบูรณ์",
    details: [
      { icon: LocationOnIcon, title: "ที่ตั้ง", desc: "พื้นที่ชุ่มน้ำหนองแด ตำบลกุดสระ\nอำเภอเมือง จังหวัดอุดรธานี" },
      { icon: AccessTimeIcon, title: "วันเวลา", desc: "1 พฤศจิกายน 2569 - 14 มีนาคม 2570\nเปิดทุกวัน 08:00 - 21:00 น." },
      { icon: FlightIcon, title: "เดินทางโดยเครื่องบิน", desc: "ท่าอากาศยานอุดรธานี\nห่างจากพื้นที่งานประมาณ 15 นาที" },
      { icon: DirectionsBusIcon, title: "เดินทางโดยรถยนต์", desc: "ใช้ทางหลวงหมายเลข 2 หรือ 22\nมีพื้นที่จอดรถรองรับผู้เข้าชม" },
    ],
    mapLabel: "หนองแด · อุดรธานี",
  },
  en: {
    section: "Venue",
    title: "Nong Dae Wetlands\nUdon Thani",
    sub: "Nestled in pristine nature",
    details: [
      { icon: LocationOnIcon, title: "Location", desc: "Nong Dae Wetlands, Kut Sa Sub-district\nMueang District, Udon Thani Province" },
      { icon: AccessTimeIcon, title: "Dates & Hours", desc: "1 Nov 2026 - 14 Mar 2027\nOpen daily 08:00 - 21:00" },
      { icon: FlightIcon, title: "By Air", desc: "Udon Thani International Airport\nAbout 15 minutes from the venue" },
      { icon: DirectionsBusIcon, title: "By Road", desc: "Via Highway 2 or Highway 22\nVisitor parking available" },
    ],
    mapLabel: "Nong Dae · Udon Thani",
  },
  zh: {
    section: "场地",
    title: "侬岱湿地\n乌隆他尼",
    sub: "坐落于自然之中",
    details: [
      { icon: LocationOnIcon, title: "地点", desc: "侬岱湿地，库沙分区\n乌隆他尼府直辖县" },
      { icon: AccessTimeIcon, title: "日期与开放时间", desc: "2026年11月1日 - 2027年3月14日\n每日开放 08:00 - 21:00" },
      { icon: FlightIcon, title: "乘飞机", desc: "乌隆他尼国际机场\n距会场约15分钟" },
      { icon: DirectionsBusIcon, title: "驾车前往", desc: "经2号或22号公路\n提供游客停车区" },
    ],
    mapLabel: "侬岱湿地 · 乌隆他尼",
  },
};

export default function VenueSection({ lang }) {
  const t = content[lang];
  const titleLines = t.title.split("\n");

  return (
    <Box id="venue" sx={{ background: "#FDF6E3", py: { xs: 8, md: 14 }, px: { xs: 2.25, sm: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography sx={{ color: "#2d6a4f", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
              {t.section}
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.9rem", md: "3rem" }, color: "#1B4332", lineHeight: 1.2, mb: 1 }}>
              {titleLines[0]}
              <br />
              <Box component="span" sx={{ color: "#D4A017" }}>{titleLines[1]}</Box>
            </Typography>
            <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2d6a4f", fontSize: "1rem", mb: 4, fontStyle: "italic" }}>
              {t.sub}
            </Typography>

            <Stack spacing={2.5}>
              {t.details.map((d) => {
                const Icon = d.icon;
                return (
                  <Box key={d.title} sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ width: 42, height: 42, minWidth: 42, background: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>
                      <Icon sx={{ color: "#D4A017", fontSize: 20 }} />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1B4332", mb: 0.3 }}>
                        {d.title}
                      </Typography>
                      {d.desc.split("\n").map((line) => (
                        <Typography key={line} sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#3a5a40", fontSize: "0.9rem", lineHeight: 1.65 }}>
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ background: "linear-gradient(135deg, #1B4332 0%, #2d6a4f 55%, #52b788 100%)", borderRadius: "6px", aspectRatio: { xs: "1/1", sm: "4/3" }, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", boxShadow: "0 20px 60px rgba(27,67,50,0.28)" }}>
              <svg viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", position: "absolute" }}>
                <ellipse cx="250" cy="220" rx="200" ry="80" fill="rgba(82,183,136,0.3)" />
                <ellipse cx="250" cy="230" rx="180" ry="65" fill="rgba(82,183,136,0.2)" />
                {[[150,190],[250,175],[350,195],[200,210],[300,205]].map(([x,y], i) => (
                  <g key={i} transform={`translate(${x},${y})`}>
                    {[0,60,120,180,240,300].map((deg) => (
                      <ellipse key={deg} cx="0" cy="-10" rx="4" ry="10" fill="#D4A017" transform={`rotate(${deg})`} opacity="0.8" />
                    ))}
                    <circle cx="0" cy="0" r="5" fill="#ffd166" />
                  </g>
                ))}
                {[[80,150],[420,140],[100,280],[400,270]].map(([x,y], i) => (
                  <g key={i} transform={`translate(${x},${y})`}>
                    <rect x="-4" y="30" width="8" height="30" fill="rgba(212,160,23,0.4)" />
                    <circle cx="0" cy="15" r="25" fill="rgba(45,106,79,0.7)" />
                    <circle cx="0" cy="0" r="18" fill="rgba(27,67,50,0.8)" />
                  </g>
                ))}
                <g transform="translate(250,130)">
                  <circle cx="0" cy="-20" r="14" fill="#D4A017" />
                  <polygon points="0,0 -8,-14 8,-14" fill="#D4A017" />
                  <circle cx="0" cy="-20" r="6" fill="#0a2e1a" />
                </g>
                <ellipse cx="250" cy="245" rx="120" ry="20" fill="none" stroke="rgba(253,246,227,0.2)" strokeWidth="1" />
                <ellipse cx="250" cy="255" rx="155" ry="25" fill="none" stroke="rgba(253,246,227,0.15)" strokeWidth="1" />
              </svg>

              <Box sx={{ position: "absolute", bottom: { xs: 18, md: 24 }, left: 16, right: 16 }}>
                <Typography sx={{ color: "rgba(253,246,227,0.92)", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: { xs: "0.78rem", md: "0.82rem" }, fontWeight: 700, textAlign: "center" }}>
                  {t.mapLabel}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
