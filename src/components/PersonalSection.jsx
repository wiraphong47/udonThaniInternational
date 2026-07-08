import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

const content = {
  th: {
    section: "About me",
    title: "ข้อมูลส่วนตัว",
    intro: "ผู้จัดทำเว็บไซต์นี้",
    items: [
      { icon: PersonIcon, label: "ชื่อ", value: "นายวีรพงศ์ วงศ์ชารี" },
      { icon: BadgeIcon, label: "รหัสนักศึกษา", value: "66040233126" },
      { icon: SchoolIcon, label: "สาขา", value: "IT" },
    ],
  },
  en: {
    section: "About me",
    title: "Personal Information",
    intro: "Website creator",
    items: [
      { icon: PersonIcon, label: "Name", value: "Nai Weerapong Wongcharee" },
      { icon: BadgeIcon, label: "Student ID", value: "66040233126" },
      { icon: SchoolIcon, label: "Program", value: "IT" },
    ],
  },
  zh: {
    section: "About me",
    title: "个人资料",
    intro: "网站制作人",
    items: [
      { icon: PersonIcon, label: "姓名", value: "Nai Weerapong Wongcharee" },
      { icon: BadgeIcon, label: "学号", value: "66040233126" },
      { icon: SchoolIcon, label: "专业", value: "IT" },
    ],
  },
};

export default function PersonalSection({ lang }) {
  const t = content[lang];

  return (
    <Box id="about-me" sx={{ background: "#fff9e8", py: { xs: 8, md: 12 }, px: { xs: 2.25, sm: 3, md: 8 }, borderTop: "1px solid rgba(27,67,50,0.1)" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4.5, md: 6 } }}>
          <Typography sx={{ color: "#2d6a4f", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.85rem", sm: "2.15rem", md: "2.7rem" }, color: "#1B4332", lineHeight: 1.25, mb: 1.5 }}>
            {t.title}
          </Typography>
          <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2f5137", fontSize: { xs: "0.95rem", md: "1.02rem" } }}>
            {t.intro}
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {t.items.map((item) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} md={4} key={item.label}>
                <Box sx={{ height: "100%", border: "1px solid rgba(27,67,50,0.14)", borderRadius: "8px", background: "#FDF6E3", px: { xs: 2.5, md: 3 }, py: 3, display: "flex", alignItems: "flex-start", gap: 2, boxShadow: "0 12px 28px rgba(27,67,50,0.06)" }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: "8px", background: "rgba(212,160,23,0.16)", border: "1px solid rgba(212,160,23,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon sx={{ color: "#b8860b", fontSize: 23 }} />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2d6a4f", fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase", mb: 0.6 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#17382a", fontSize: { xs: "1rem", md: "1.05rem" }, fontWeight: 700, lineHeight: 1.5, overflowWrap: "anywhere" }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
