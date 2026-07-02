import React, { useState, useEffect } from "react";
import { Fab, Zoom, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="medium"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 999,
          background: "linear-gradient(135deg,#D4A017,#b8860b)",
          color: "#0a2e1a",
          boxShadow: "0 4px 20px rgba(212,160,23,0.5)",
          "&:hover": {
            background: "linear-gradient(135deg,#e8b420,#D4A017)",
            transform: "translateY(-3px)",
            boxShadow: "0 8px 28px rgba(212,160,23,0.6)",
          },
          transition: "all 0.25s ease",
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
      </Fab>
    </Zoom>
  );
}