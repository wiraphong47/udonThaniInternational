import React, { useState } from "react";
import {
  Box, Typography, Grid, Card, CardContent,
  Dialog, DialogContent, DialogTitle, IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ParkIcon from "@mui/icons-material/Park";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import WaterIcon from "@mui/icons-material/Water";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const content = {
  th: {
    section: "ไฮไลท์งาน",
    title: "ประสบการณ์ที่คุณไม่ควรพลาด",
    items: [
      {
        icon: ParkIcon,
        title: "สวนนานาชาติ",
        desc: "ชมสวนพฤกษศาสตร์จากหลายประเทศ พร้อมพันธุ์ไม้หายากและภูมิทัศน์ที่ออกแบบอย่างประณีต",
        detail: "โซนสวนนานาชาติรวบรวมแนวคิดการจัดสวนจากทั่วโลก ทั้งสวนญี่ปุ่น สวนยุโรป สวนเขตร้อน และสวนร่วมสมัย เหมาะสำหรับผู้รักธรรมชาติ นักออกแบบสวน และนักท่องเที่ยวที่ต้องการพักผ่อนท่ามกลางบรรยากาศสีเขียว",
      },
      {
        icon: AgricultureIcon,
        title: "เทคโนโลยีการเกษตร",
        desc: "นิทรรศการสมาร์ทฟาร์ม ระบบน้ำอัจฉริยะ และนวัตกรรมเกษตรยั่งยืน",
        detail: "พื้นที่จัดแสดงนวัตกรรมการเกษตรยุคใหม่ เช่น ระบบให้น้ำอัตโนมัติ โดรนเพื่อการเกษตร การปลูกพืชแนวตั้ง การวิเคราะห์ดินด้วย AI และเทคโนโลยี IoT สำหรับติดตามสภาพอากาศ",
      },
      {
        icon: WaterIcon,
        title: "ระบบนิเวศหนองแด",
        desc: "สำรวจพื้นที่ชุ่มน้ำ ชมนกนานาชนิด และเรียนรู้ระบบนิเวศน้ำจืดของอุดรธานี",
        detail: "หนองแดเป็นพื้นที่ชุ่มน้ำที่มีความหลากหลายทางชีวภาพ ผู้เข้าชมสามารถเรียนรู้เรื่องพืชน้ำ นกอพยพ ปลา และบทบาทของพื้นที่ชุ่มน้ำต่อชุมชนและสิ่งแวดล้อม",
      },
      {
        icon: TheaterComedyIcon,
        title: "การแสดงวัฒนธรรม",
        desc: "เวทีดนตรี ศิลปะ และการแสดงจากไทย อาเซียน และนานาชาติ",
        detail: "ตลอดระยะเวลาจัดงานจะมีการแสดงกลางแจ้งและในร่ม ทั้งดนตรีพื้นเมือง การแสดงร่วมสมัย เวิร์กช็อปศิลปะ และกิจกรรมที่เปิดให้ผู้ชมมีส่วนร่วม",
      },
      {
        icon: RestaurantIcon,
        title: "อาหารและของฝาก",
        desc: "รวมร้านอาหารท้องถิ่น ตลาดสินค้าเกษตร และของฝากจากอุดรธานี",
        detail: "โซนอาหารรวบรวมเมนูท้องถิ่นของอุดรธานี อาหารนานาชาติ ตลาดผักผลไม้สด และสินค้าที่ระลึกจากชุมชน เหมาะสำหรับผู้ที่อยากสัมผัสรสชาติและงานฝีมือของพื้นที่",
      },
      {
        icon: CameraAltIcon,
        title: "จุดถ่ายภาพ",
        desc: "มุมถ่ายภาพสวยท่ามกลางดอกไม้ สวนศิลปะ และแสงไฟช่วงกลางคืน",
        detail: "ทั่วพื้นที่งานมีจุดถ่ายภาพหลายรูปแบบ ตั้งแต่อุโมงค์ดอกไม้ สวนแนวตั้ง งานศิลปะกลางแจ้ง ไปจนถึง Light Art ช่วงค่ำ ช่วยให้ทุกการมาเยือนมีภาพประทับใจกลับไป",
      },
    ],
  },
  en: {
    section: "Highlights",
    title: "Experiences Not to Miss",
    items: [
      { icon: ParkIcon, title: "International Gardens", desc: "Gardens from around the world with rare plants and refined landscape design.", detail: "The International Gardens bring together Japanese, European, tropical, and contemporary garden concepts for nature lovers, designers, and visitors seeking a calm green escape." },
      { icon: AgricultureIcon, title: "Agri-Tech Exhibition", desc: "Smart farming, intelligent irrigation, and sustainable agriculture displays.", detail: "This zone presents modern agricultural technology, including automatic irrigation, agricultural drones, vertical farming, AI soil analysis, and IoT weather monitoring." },
      { icon: WaterIcon, title: "Nong Dae Ecosystem", desc: "Explore the wetlands, observe birds, and learn about Udon Thani's freshwater ecosystem.", detail: "Nong Dae is a biodiverse wetland where visitors can learn about aquatic plants, migratory birds, freshwater fish, and the role of wetlands in local communities." },
      { icon: TheaterComedyIcon, title: "Cultural Performances", desc: "Music, arts, and performances from Thailand, ASEAN, and international artists.", detail: "Indoor and outdoor stages will host traditional music, contemporary shows, art workshops, and participatory activities throughout the expo." },
      { icon: RestaurantIcon, title: "Food & Souvenirs", desc: "Local eateries, agricultural markets, and Udon Thani souvenirs.", detail: "The food zone gathers Udon Thani dishes, international bites, fresh produce, and community-made souvenirs for visitors who want to taste and take home the local character." },
      { icon: CameraAltIcon, title: "Photo Spots", desc: "Beautiful photo moments among flowers, garden art, and evening lights.", detail: "Photo spots across the grounds include flower tunnels, vertical gardens, outdoor installations, and evening light art for memorable images on every visit." },
    ],
  },
  zh: {
    section: "亮点",
    title: "不容错过的精彩体验",
    items: [
      { icon: ParkIcon, title: "国际花园", desc: "欣赏来自世界各地的园林设计、珍稀植物与精致景观。", detail: "国际花园汇集日式、欧式、热带与当代园林概念，适合热爱自然、园林设计以及希望放松身心的游客。" },
      { icon: AgricultureIcon, title: "农业科技展", desc: "展示智慧农场、智能灌溉与可持续农业创新。", detail: "该展区介绍自动灌溉、农业无人机、垂直农场、AI土壤分析以及物联网气象监测等现代农业技术。" },
      { icon: WaterIcon, title: "侬岱湿地生态", desc: "探索湿地、观赏鸟类，并了解乌隆他尼的淡水生态系统。", detail: "侬岱湿地拥有丰富的生物多样性，游客可以认识水生植物、候鸟、淡水鱼类，以及湿地对社区和环境的重要作用。" },
      { icon: TheaterComedyIcon, title: "文化演出", desc: "来自泰国、东盟与国际艺术家的音乐、艺术和表演。", detail: "展会期间室内外舞台将持续呈现传统音乐、现代演出、艺术工作坊以及可参与的互动活动。" },
      { icon: RestaurantIcon, title: "美食与纪念品", desc: "本地美食、农产品市场与乌隆他尼特色纪念品。", detail: "美食区汇集乌隆他尼地方菜、国际小吃、新鲜农产品和社区手工纪念品，让游客品尝并带走当地特色。" },
      { icon: CameraAltIcon, title: "拍照打卡点", desc: "在花海、园林艺术与夜间灯光中留下美好照片。", detail: "园区内设有花卉隧道、垂直花园、户外艺术装置和夜间灯光艺术，让每次参观都留下独特影像。" },
    ],
  },
};

export default function HighlightsSection({ lang }) {
  const t = content[lang];
  const [selected, setSelected] = useState(null);

  return (
    <Box id="highlights" sx={{ background: "#1B4332", py: { xs: 8, md: 14 }, px: { xs: 2.25, sm: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography sx={{ color: "#D4A017", fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", fontSize: "0.72rem", letterSpacing: { xs: "0.12em", md: "0.3em" }, textTransform: "uppercase", mb: 2, fontWeight: 700 }}>
            {t.section}
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.85rem", sm: "2.15rem", md: "2.8rem" }, color: "#FDF6E3", lineHeight: 1.3 }}>
            {t.title}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {t.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card
                  elevation={0}
                  onClick={() => setSelected(i)}
                  sx={{
                    background: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(212,160,23,0.18)",
                    borderRadius: "6px",
                    height: "100%",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    "&:hover": { borderColor: "rgba(212,160,23,0.5)", transform: { md: "translateY(-6px)" }, boxShadow: "0 16px 40px rgba(0,0,0,0.32)" },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 }, minHeight: { xs: 0, md: 216 } }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: "6px", background: "rgba(212,160,23,0.14)", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      <Icon sx={{ color: "#D4A017", fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.08rem", md: "1.12rem" }, color: "#FDF6E3", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.84)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "rgba(5, 15, 9, 0.72)" },
          "& .MuiDialog-paper": {
            m: { xs: 2, sm: 4 },
            backgroundColor: "#0d2018",
            color: "#FDF6E3",
            border: "1px solid rgba(212,160,23,0.35)",
            borderRadius: "6px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
          },
        }}
      >
        {selected !== null && (() => {
          const item = t.items[selected];
          const Icon = item.icon;
          return (
            <>
              <DialogTitle sx={{ pt: { xs: 2.5, md: 3 }, pb: 1, px: { xs: 2.5, md: 4 }, pr: 7, position: "relative" }}>
                <IconButton
                  aria-label="close"
                  onClick={() => setSelected(null)}
                  sx={{ position: "absolute", top: 10, right: 10, color: "#FDF6E3", "&:hover": { background: "rgba(212,160,23,0.12)" } }}
                >
                  <CloseIcon />
                </IconButton>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Icon sx={{ color: "#D4A017", fontSize: 24, flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Playfair Display','Noto Serif Thai','Noto Sans SC',serif", fontWeight: 700, fontSize: { xs: "1.16rem", md: "1.3rem" }, color: "#FDF6E3", lineHeight: 1.35 }}>
                    {item.title}
                  </Typography>
                </Box>
              </DialogTitle>
              <DialogContent sx={{ px: { xs: 2.5, md: 4 }, pb: { xs: 3, md: 4 } }}>
                <Box sx={{ width: 40, height: 2, background: "#D4A017", mb: 2.5, borderRadius: 1 }} />
                <Typography sx={{ fontFamily: "'Inter','Noto Sans Thai','Noto Sans SC',sans-serif", color: "rgba(253,246,227,0.92)", fontSize: { xs: "0.94rem", md: "0.98rem" }, lineHeight: 1.85 }}>
                  {item.detail}
                </Typography>
              </DialogContent>
            </>
          );
        })()}
      </Dialog>
    </Box>
  );
}
