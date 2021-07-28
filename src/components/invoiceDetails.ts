import { IInvoiceDetails } from "data/dataTypes";
import { margins } from "index";
import jsPDF from "jspdf";

const drawInvoiceDetails = (doc: jsPDF, y: number, data: IInvoiceDetails) => {
  let posX = margins.left + margins.quarter;
  let posY = y;
  console.log(y);
  console.log(posX);

  doc.setFontSize(10);
  doc.setFont("MonserratLight", "normal");
  doc.text("Supply Date", posX, posY);
  doc.text("Invoice Date", posX + margins.quarter, posY);
  let lineHeight = doc.getTextDimensions("Somet").h;
  doc.setFont("MonserratSemiBold", "normal");
  posY += lineHeight;
  doc.text(data.date, posX, posY);
  doc.text(data.date, posX + margins.quarter, posY);
};

export default drawInvoiceDetails;
