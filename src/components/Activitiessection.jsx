import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";

const content = {
  th: {
    section: "กิจกรรม",
    title: "ปฏิทินกิจกรรมสำคัญ",
    items: [
      { date: "1 พ.ย. 2569", tag: "พิธีเปิด", title: "พิธีเปิดอย่างเป็นทางการ", desc: "เปิดงานด้วยการแสดงแสงสีเสียงและขบวนพาเหรดนานาชาติ" },
      { date: "ธ.ค. 2569", tag: "นิทรรศการ", title: "มหกรรมดอกไม้นานาชาติ", desc: "ชมการจัดแสดงดอกไม้และสวนจากหลายประเทศ พร้อมกิจกรรมประกวดสวน" },
      { date: "ม.ค. 2570", tag: "วัฒนธรรม", title: "เทศกาลวัฒนธรรมอาเซียน", desc: "ดนตรี ศิลปะ อาหาร และการแสดงจากประเทศสมาชิกอาเซียน" },
      { date: "ก.พ. 2570", tag: "เทคโนโลยี", title: "สัมมนาเกษตรอัจฉริยะ", desc: "เวทีแลกเปลี่ยนความรู้ด้านนวัตกรรมเกษตรและอาหารแห่งอนาคต" },
      { date: "14 มี.ค. 2570", tag: "ปิดงาน", title: "พิธีปิดงาน", desc: "กิจกรรมส่งท้ายงาน พร้อมการแสดงพิเศษและสรุปความประทับใจ" },
    ],
  },
  en: {
    section: "Activities",
    title: "Key Events Calendar",
    items: [
      { date: "1 Nov 2026", tag: "Opening", title: "Grand Opening Ceremony", desc: "A light and sound show with an international parade opens the expo." },
      { date: "Dec 2026", tag: "Exhibition", title: "International Flower Expo", desc: "Floral displays and garden showcases from many countries." },
      { date: "Jan 2027", tag: "Culture", title: "ASEAN Cultural Festival", desc: "Music, arts, food, and performances from ASEAN member nations." },
      { date: "Feb 2027", tag: "Technology", title: "Smart Agriculture Forum", desc: "Knowledge sharing on agricultural innovation and future food." },
      { date: "14 Mar 2027", tag: "Closing", title: "Closing Ceremony", desc: "A special farewell program and a celebration of the expo's highlights." },
    ],
  },
  zh: {
    section: "活动",
    title: "主要活动日历",
    items: [
      { date: "2026年11月1日", tag: "开幕", title: "盛大开幕式", desc: "以声光表演和国际巡游开启博览会。" },
      { date: "2026年12月", tag: "展览", title: "国际花卉博览", desc: "欣赏来自多个国家的花卉展示和园林作品。" },
      { date: "2027年1月", tag: "文化", title: "东盟文化节", desc: "呈现东盟国家的音乐、艺术、美食与表演。" },
      { date: "2027年2月", tag: "科技", title: "智慧农业论坛", desc: "交流农业创新与未来食品领域的知识。" },
      { date: "2027年3月14日", tag: "闭幕", title: "闭幕典礼", desc: "以特别节目回顾并庆祝博览会的精彩时刻。" },
    ],
  },
};

const tagColors = {
  "พิธีเปิด": "#D4A017", Opening: "#D4A017", "开幕": "#D4A017",
  "นิทรรศการ": "#52b788", Exhibition: "#52b788", "展览": "#52b788",
  "วัฒนธรรม": "#74b3ce", Culture: "#74b3ce", "文化": "#74b3ce",
  "เทคโนโลยี": "#a8c5da", Technology: "#a8c5da", "科技": "#a8c5da",
  "ปิดงาน": "#e07a5f", Closing: "#e07a5f", "闭幕": "#e07a5f",
};

export default function ActivitiesSection({ lang }) {
  const t = content[lang];

  return (
    <Box id="activities" sx={{ background: "#0d2018", py: { xs: 8, md: 14 }, px: { xs: 2.25, sm: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.85rem", md: "2.8rem" }, color: "#FDF6E3" }}>
            {t.title}
          </Typography>
        </Box>

        <Stack spacing={0}>
          {t.items.map((item) => (
            <Box
              key={`${item.date}-${item.title}`}
              sx={{
                display: { xs: "block", sm: "flex" },
                gap: { sm: 3, md: 4 },
                py: { xs: 3, md: 4 },
                borderTop: "1px solid rgba(253,246,227,0.08)",
                "&:last-child": { borderBottom: "1px solid rgba(253,246,227,0.08)" },
              }}
            >
              <Box sx={{ minWidth: { sm: 116, md: 130 }, mb: { xs: 1.25, sm: 0 }, pt: 0.3 }}>
                <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "0.95rem", md: "1rem" }, color: "#D4A017", lineHeight: 1.4 }}>
                  {item.date}
                </Typography>
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Chip
                  label={item.tag}
                  size="small"
                  sx={{
                    background: `${tagColors[item.tag]}22`,
                    color: tagColors[item.tag] || "#FDF6E3",
                    border: `1px solid ${tagColors[item.tag] || "#FDF6E3"}44`,
                    fontSize: "0.68rem",
                    fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif",
                    fontWeight: 700,
                    height: 24,
                    borderRadius: "4px",
                    mb: 1,
                  }}
                />
                <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "#FDF6E3", mb: 0.8, lineHeight: 1.35 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
