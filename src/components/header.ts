import { margins } from "index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawHeader = (doc: jsPDF) => {
  doc.setDrawColor(colors.grey);
  doc.setLineWidth(0.3);
  doc.line(margins.left, margins.top, margins.posRight, margins.top);

  doc.setFontSize(18);
  doc.setFont("MonserratBold", "bold");
  doc.text("Mac Beagan Web Development", margins.pageWidth / 2, 15, {
    align: "center",
    baseline: "middle",
  });
  doc.setFontSize(12);
  doc.setFont("MonserratLight", "normal");
};

export default drawHeader;
