import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import wetlandPhoto from "../assets/expo/1645073156193-1068x712-1-1024x683.jpg";
import expoGardenPhoto from "../assets/expo/081141_0_20260320-140030.jpg";
import mascotPhoto from "../assets/expo/expo-mascots.jpg";

const content = {
  th: {
    section: "เกี่ยวกับงาน",
    title: "มหกรรมพืชสวนโลกครั้งแรกในอาเซียน",
    body: `มหกรรมพืชสวนโลก อุดรธานี 2569 คือการจัดแสดงพืชพรรณ สวน และนวัตกรรมด้านพืชสวนระดับนานาชาติที่ได้รับการรับรองจาก AIPH (International Association of Horticultural Producers) และเป็นครั้งแรกของภูมิภาคเอเชียตะวันออกเฉียงใต้

งานจัดขึ้น ณ พื้นที่ชุ่มน้ำหนองแด แหล่งระบบนิเวศน้ำจืดสำคัญของจังหวัดอุดรธานี ผู้เข้าชมจะได้สัมผัสสวนจากนานาประเทศ ศิลปะกลางแจ้ง พื้นที่เรียนรู้ธรรมชาติ และนิทรรศการเทคโนโลยีการเกษตรสมัยใหม่`,
    stats: [
      { num: "136", label: "วัน" },
      { num: "100+", label: "ประเทศ" },
      { num: "5 ล้าน+", label: "ผู้เข้าชม" },
      { num: "1,000+", label: "พันธุ์พืช" },
    ],
    caption: "ภาพบรรยากาศงานและมาสคอต",
  },
  en: {
    section: "About the Expo",
    title: "Southeast Asia's First World Horticultural Expo",
    body: `The Udon Thani International Horticultural Expo 2026 is an internationally certified exhibition of plants, gardens, and horticultural innovation accredited by the AIPH (International Association of Horticultural Producers), the first of its kind in Southeast Asia.

Set within the Nong Dae Wetlands, a vital freshwater ecosystem in Udon Thani, visitors will experience international gardens, outdoor art, nature learning areas, and modern agricultural technology exhibitions.`,
    stats: [
      { num: "136", label: "Days" },
      { num: "100+", label: "Countries" },
      { num: "5M+", label: "Visitors" },
      { num: "1,000+", label: "Plant Species" },
    ],
    caption: "Expo atmosphere and mascots",
  },
  zh: {
    section: "关于博览会",
    title: "东南亚首届世界园艺博览会",
    body: `2026年乌隆他尼国际园艺博览会是获得 AIPH（国际园艺生产者协会）认证的国际植物、园林与园艺创新展会，也是东南亚地区首次举办的世界级园艺博览会。

博览会位于乌隆他尼侬岱湿地，这里是重要的淡水生态系统。参观者将欣赏国际花园、户外艺术、自然学习区以及现代农业科技展览。`,
    stats: [
      { num: "136", label: "天" },
      { num: "100+", label: "个国家" },
      { num: "500万+", label: "参观者" },
      { num: "1,000+", label: "植物品种" },
    ],
    caption: "博览会氛围与吉祥物",
  },
};

const ABOUT_IMAGES = [
  { src: mascotPhoto, alt: "Udon Thani expo mascots" },
  { src: expoGardenPhoto, alt: "Udon Thani expo garden" },
  { src: wetlandPhoto, alt: "Nong Dae wetland" },
];

export default function AboutSection({ lang }) {
  const t = content[lang];

  return (
    <Box id="about-section" sx={{ background: "#FDF6E3", py: { xs: 8, md: 14 }, px: { xs: 2.25, sm: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography sx={{ color: "#2d6a4f", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
          {t.section}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.85rem", sm: "2.15rem", md: "2.8rem" }, color: "#1B4332", lineHeight: 1.25, mb: 3 }}>
              {t.title}
            </Typography>
            <Divider sx={{ borderColor: "#D4A017", borderWidth: 2, width: 60, mb: 3 }} />
            {t.body.split("\n\n").map((para) => (
              <Typography key={para} sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2f5137", lineHeight: 1.85, fontSize: { xs: "0.96rem", md: "1.02rem" }, mb: 2 }}>
                {para}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
                gridTemplateRows: { xs: "190px 150px", sm: "200px 180px" },
                gap: "8px",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <Box sx={{ gridColumn: { xs: "span 2", sm: "span 2" }, gridRow: { xs: "span 1", sm: "span 2" }, overflow: "hidden", borderRadius: "6px 0 0 6px" }}>
                <img src={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </Box>
              <Box sx={{ overflow: "hidden", borderRadius: { xs: "0 0 0 6px", sm: "0 6px 0 0" } }}>
                <img src={ABOUT_IMAGES[1].src} alt={ABOUT_IMAGES[1].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </Box>
              <Box sx={{ overflow: "hidden", borderRadius: "0 0 6px 0" }}>
                <img src={ABOUT_IMAGES[2].src} alt={ABOUT_IMAGES[2].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </Box>
            </Box>

            <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2d6a4f", fontSize: "0.75rem", mt: 1.5, textAlign: { xs: "left", sm: "right" }, fontStyle: "italic" }}>
              © {t.caption}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={0} sx={{ mt: { xs: 5, md: 8 }, borderTop: "1px solid rgba(27,67,50,0.15)" }}>
          {t.stats.map((s, i) => (
            <Grid item xs={6} sm={3} key={s.label}>
              <Box sx={{ pt: { xs: 3, md: 4 }, pb: 2, px: { xs: 1, md: 3 }, borderRight: { xs: i % 2 === 0 ? "1px solid rgba(27,67,50,0.15)" : "none", sm: i < 3 ? "1px solid rgba(27,67,50,0.15)" : "none" }, textAlign: "center" }}>
                <Typography sx={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: { xs: "1.9rem", md: "3rem" }, color: "#1B4332", lineHeight: 1, mb: 0.5 }}>
                  {s.num}
                </Typography>
                <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "#2d6a4f", fontSize: { xs: "0.75rem", md: "0.8rem" }, fontWeight: 700, textTransform: "uppercase" }}>
                  {s.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
