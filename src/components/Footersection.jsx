import React from "react";
import { Box, Typography, Grid, Stack, Divider, IconButton } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

const content = {
  th: {
    section: "ติดต่อ",
    title: "ติดต่อเรา",
    email: "info@udonthanihortexpo.th",
    phone: "+66 42 000 000",
    website: "www.udonthanihortexpo.th",
    copy: "© 2569 มหกรรมพืชสวนโลก อุดรธานี สงวนลิขสิทธิ์",
    tagline: "ประสบการณ์ธรรมชาติครั้งสำคัญของปี",
    brand: "พืชสวนโลก อุดรธานี 2569",
    links: [
      { label: "เกี่ยวกับงาน", id: "about" },
      { label: "ไฮไลท์", id: "highlights" },
      { label: "สถานที่", id: "venue" },
      { label: "กิจกรรม", id: "activities" },
    ],
  },
  en: {
    section: "Contact",
    title: "Get in Touch",
    email: "info@udonthanihortexpo.th",
    phone: "+66 42 000 000",
    website: "www.udonthanihortexpo.th",
    copy: "© 2026 Udon Thani International Horticultural Expo. All rights reserved.",
    tagline: "The greatest nature experience of the year.",
    brand: "Udon Thani Expo 2026",
    links: [
      { label: "About", id: "about" },
      { label: "Highlights", id: "highlights" },
      { label: "Venue", id: "venue" },
      { label: "Activities", id: "activities" },
    ],
  },
  zh: {
    section: "联系",
    title: "联系我们",
    email: "info@udonthanihortexpo.th",
    phone: "+66 42 000 000",
    website: "www.udonthanihortexpo.th",
    copy: "© 2026 乌隆他尼国际园艺博览会。保留所有权利。",
    tagline: "年度重要自然体验。",
    brand: "乌隆他尼园博会 2026",
    links: [
      { label: "关于", id: "about" },
      { label: "亮点", id: "highlights" },
      { label: "场地", id: "venue" },
      { label: "活动", id: "activities" },
    ],
  },
};

export default function FooterSection({ lang }) {
  const t = content[lang];
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box id="contact" sx={{ background: "#050f09" }}>
      <Box sx={{ background: "linear-gradient(135deg, #1B4332, #2d6a4f)", py: { xs: 7, md: 10 }, px: { xs: 2.25, sm: 3, md: 8 }, borderTop: "1px solid rgba(212,160,23,0.2)" }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.9rem", md: "2.8rem" }, color: "#FDF6E3", mb: 1 }}>
                {t.title}
              </Typography>
              <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.95rem", fontStyle: "italic" }}>
                {t.tagline}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                {[
                  { icon: EmailIcon, text: t.email },
                  { icon: PhoneIcon, text: t.phone },
                  { icon: LanguageIcon, text: t.website },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Box key={item.text} sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
                      <Icon sx={{ color: "#D4A017", fontSize: 20, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.95rem", overflowWrap: "anywhere" }}>
                        {item.text}
                      </Typography>
                    </Box>
                  );
                })}
                <Box sx={{ display: "flex", gap: 1, pt: 1 }}>
                  {[FacebookIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                    <IconButton key={i} size="small" sx={{ color: "rgba(253,246,227,0.78)", border: "1px solid rgba(253,246,227,0.2)", borderRadius: "4px", "&:hover": { color: "#D4A017", borderColor: "#D4A017" } }}>
                      <Icon sx={{ fontSize: 18 }} />
                    </IconButton>
                  ))}
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ py: 4, px: { xs: 2.25, sm: 3, md: 8 } }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "flex-start", md: "center" }, gap: 2.5, justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalFloristIcon sx={{ color: "#D4A017", fontSize: 20 }} />
              <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: "0.95rem", color: "rgba(253,246,227,0.84)" }}>
                {t.brand}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 3 } }}>
              {t.links.map((link) => (
                <Typography key={link.id} onClick={() => scrollTo(link.id)} sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.72)", fontSize: "0.82rem", cursor: "pointer", "&:hover": { color: "#D4A017" } }}>
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>
          <Divider sx={{ borderColor: "rgba(253,246,227,0.06)", my: 2 }} />
          <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.35)", fontSize: "0.75rem", textAlign: "center", lineHeight: 1.6 }}>
            {t.copy}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
