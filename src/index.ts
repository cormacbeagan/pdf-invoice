import jsPDF from "jspdf";
import addFonts from "setup/addFonts";
import json from "data/dummyData.json";
import drawHeader from "components/header";
import drawFooter from "components/footer";
import { IData } from "data/dataTypes";
import drawAddress from "components/address";
import drawOwnAddress from "components/ownAddress";

export const margins = {
  top: 30,
  left: 20,
  right: 20,
  bottom: 20,
  posRight: 210 - 20,
  posBottom: 297 - 20,
  pageWidth: 210,
  pageHeight: 297,
};

const createInvoice = (jsonData: IData): void => {
  const doc: jsPDF = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  addFonts(doc);
  let posX = margins.left;
  let posY = margins.top;
  drawHeader(doc);
  drawFooter(doc);

  posY += 15;
  drawOwnAddress(doc, posX + 5, posY, jsonData.ownDetails);
  posY += 5;

  drawAddress(doc, posX + 5, posY, jsonData.client);

  doc.save("Invoice.pdf");
};

createInvoice(json);
