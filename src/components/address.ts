import { IClient } from "data/dataTypes";
import jsPDF from "jspdf";

const drawAddress = (doc: jsPDF, x: number, y: number, data: IClient) => {
  let posX = x;
  let posY = y;
  doc.setFontSize(12);
  doc.setFont("MonserratBold", "bold");
  const lineHeight = doc.getTextDimensions("Some").h + 1;
  posY += lineHeight;
  doc.text(data.name, posX, posY);
  doc.setFont("MonserratLight", "normal");
  posY += lineHeight;
  doc.text(data.address.line1, posX, posY);
  posY += lineHeight;
  doc.text(data.address.line2, posX, posY);
  posY += lineHeight;
  doc.text(data.address.postcode, posX, posY);
  posY += lineHeight;
  doc.text(data.address.country, posX, posY);
};

export default drawAddress;