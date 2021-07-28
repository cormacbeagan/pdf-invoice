import jsPDF from "jspdf";

import montserratBold from "resources/fonts/montserrat-bold";
import montserratSemiBold from "resources/fonts/montserrat-semi-bold";
import montserratLight from "resources/fonts/montserrat-light";

const addFonts = (doc: jsPDF) => {
  // Add Trauma fonts to jsPDF
  doc.addFileToVFS("MonserratBold.ttf", montserratBold);
  doc.addFont("MonserratBold.ttf", "MonserratBold", "bold");
  doc.addFileToVFS("MonserratSemiBold.ttf", montserratSemiBold);
  doc.addFont("MonserratSemiBold.ttf", "MonserratSemiBold", "normal");
  doc.addFileToVFS("MonserratLight.ttf", montserratLight);
  doc.addFont("MonserratLight.ttf", "MonserratLight", "normal");

  // Set starting font for PDF
  doc.setFont("MonserratLight", "normal");
};

export default addFonts;