import jsPDF from "jspdf";

import lobster from "resources/fonts/lobster";
import abril from "resources/fonts/abril";
import kanitBold from "resources/fonts/kanitBold";
import kanitLight from "resources/fonts/kanitLight";
import kanitRegular from "resources/fonts/kanitRegular";

const addFonts = (doc: jsPDF) => {
  // Add Trauma fonts to jsPDF
  doc.addFileToVFS("KanitBold.ttf", kanitBold);
  doc.addFont("KanitBold.ttf", "KanitBold", "bold");
  doc.addFileToVFS("KanitLight.ttf", kanitLight);
  doc.addFont("KanitLight.ttf", "KanitLight", "normal");
  doc.addFileToVFS("KanitRegular.ttf", kanitRegular);
  doc.addFont("KanitRegular.ttf", "KanitMedium", "normal");
  doc.addFileToVFS("lobster.ttf", lobster);
  doc.addFont("lobster.ttf", "Lobster", "normal");

  doc.addFileToVFS("Abril_Fatface.ttf", abril);
  doc.addFont("Abril_Fatface.ttf", "Abril", "normal");

  // Set starting font for PDF
  doc.setFont("KanitLight", "normal");
};

export default addFonts;
