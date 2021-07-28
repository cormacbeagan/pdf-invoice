import jsPDF from "jspdf";

import montserratBold from "resources/fonts/montserrat-bold";
import lobster from "resources/fonts/lobster";
import montserratSemiBold from "resources/fonts/montserrat-semi-bold";
import montserratLight from "resources/fonts/montserrat-light";
import abril from "resources/fonts/abril";

const addFonts = (doc: jsPDF) => {
  // Add Trauma fonts to jsPDF
  doc.addFileToVFS("MonserratBold.ttf", montserratBold);
  doc.addFont("MonserratBold.ttf", "MonserratBold", "bold");
  doc.addFileToVFS("MonserratSemiBold.ttf", montserratSemiBold);
  doc.addFont("MonserratSemiBold.ttf", "MonserratSemiBold", "normal");
  doc.addFileToVFS("MonserratLight.ttf", montserratLight);
  doc.addFont("MonserratLight.ttf", "MonserratLight", "normal");
  doc.addFileToVFS("lobster.ttf", lobster);
  doc.addFont("lobster.ttf", "Lobster", "normal");

  doc.addFileToVFS("Abril_Fatface.ttf", abril);
  doc.addFont("Abril_Fatface.ttf", "Abril", "normal");

  // Set starting font for PDF
  doc.setFont("MonserratLight", "normal");
};

export default addFonts;
