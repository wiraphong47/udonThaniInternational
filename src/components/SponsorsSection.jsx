import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const content = {
  th: { section: "พันธมิตรและผู้สนับสนุน", title: "ร่วมกันสร้างงานยิ่งใหญ่" },
  en: { section: "Partners & Sponsors", title: "Together We Make It Grand" },
  zh: { section: "合作伙伴与赞助商", title: "携手共创盛会" },
};

const SPONSORS = [
  {
    tier: { th: "หน่วยงานหลัก", en: "Host Partners", zh: "主办伙伴" },
    color: "#D4A017",
    items: [
      { name: "กระทรวงเกษตรและสหกรณ์", nameEn: "Ministry of Agriculture", nameZh: "农业部" },
      { name: "จังหวัดอุดรธานี", nameEn: "Udon Thani Province", nameZh: "乌隆他尼府" },
    ],
  },
  {
    tier: { th: "ผู้สนับสนุนหลัก", en: "Main Sponsors", zh: "主要赞助商" },
    color: "#7a8f87",
    items: [
      { name: "การท่องเที่ยวแห่งประเทศไทย", nameEn: "Tourism Authority of Thailand", nameZh: "泰国旅游局" },
      { name: "ธนาคารกรุงไทย", nameEn: "Krungthai Bank", nameZh: "泰京银行" },
      { name: "ปตท.", nameEn: "PTT Group", nameZh: "PTT集团" },
    ],
  },
  {
    tier: { th: "ผู้สนับสนุนทั่วไป", en: "Supporting Sponsors", zh: "支持赞助商" },
    color: "#b87a3d",
    items: [
      { name: "AIS", nameEn: "AIS", nameZh: "AIS" },
      { name: "ซีพี ออลล์", nameEn: "CP All", nameZh: "卜蜂全" },
      { name: "สยามพิวรรธน์", nameEn: "Siam Piwat", nameZh: "暹罗百汇" },
      { name: "บางจาก", nameEn: "Bangchak", nameZh: "邦差克" },
    ],
  },
];

function LogoPlaceholder({ name, color }) {
  return (
    <Box sx={{ minHeight: 74, border: `1px solid ${color}40`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", px: 1.5, py: 1, background: `${color}0d`, transition: "all 0.25s", "&:hover": { background: `${color}18`, borderColor: `${color}80`, transform: { md: "translateY(-2px)" } } }}>
      <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontWeight: 700, fontSize: { xs: "0.78rem", md: "0.84rem" }, color, textAlign: "center", lineHeight: 1.4, overflowWrap: "anywhere" }}>
        {name}
      </Typography>
    </Box>
  );
}

export default function SponsorsSection({ lang }) {
  const t = content[lang];
  const getName = (item) => lang === "en" ? item.nameEn : lang === "zh" ? item.nameZh : item.name;

  return (
    <Box sx={{ background: "#FDF6E3", py: { xs: 8, md: 12 }, px: { xs: 2.25, sm: 3, md: 8 }, borderTop: "1px solid rgba(27,67,50,0.1)" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography sx={{ color: "#2d6a4f", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.7rem", md: "2.4rem" }, color: "#1B4332" }}>
            {t.title}
          </Typography>
        </Box>

        {SPONSORS.map((group, gi) => (
          <Box key={group.tier.en} sx={{ mb: gi < SPONSORS.length - 1 ? { xs: 4.5, md: 6 } : 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: group.color, flexShrink: 0 }} />
              <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontWeight: 700, fontSize: "0.75rem", color: group.color, textTransform: "uppercase" }}>
                {group.tier[lang]}
              </Typography>
              <Box sx={{ flex: 1, height: "1px", background: `${group.color}33` }} />
            </Box>

            <Grid container spacing={1.5}>
              {group.items.map((item) => (
                <Grid item xs={6} sm={4} md={gi === 0 ? 6 : gi === 1 ? 4 : 3} key={getName(item)}>
                  <LogoPlaceholder name={getName(item)} color={group.color} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
