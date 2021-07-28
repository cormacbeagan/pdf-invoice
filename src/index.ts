import jsPDF from "jspdf";
import addFonts from "setup/addFonts";
import json from "data/dummyData.json";
import drawHeader from "components/header";
import drawFooter from "components/footer";
import { IData } from "data/dataTypes";
import drawAddress from "components/address";
import drawOwnAddress from "components/ownAddress";
import { colors } from "resources/colors/colors";
import drawInvoiceDetails from "components/invoiceDetails";

export const margins = {
  top: 22,
  left: 20,
  right: 20,
  bottom: 20,
  posRight: 210 - 20,
  posBottom: 297 - 20,
  pageWidth: 210,
  pageHeight: 297,
  quarter: (210 - 40) / 4,
};

const createInvoice = (jsonData: IData): void => {
  const doc: jsPDF = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  addFonts(doc);
  doc.setTextColor(colors.dark);
  let posX = margins.left;
  let posY = margins.top;
  drawHeader(doc);
  drawFooter(doc);

  posY += 15;
  drawOwnAddress(doc, posX + 5, posY, jsonData.ownDetails);
  posY += 5;

  posY = drawAddress(doc, posX + 5, posY, jsonData.client);

  drawInvoiceDetails(doc, posY, jsonData.invoiceDetails);

  doc.save("Invoice.pdf");
};

createInvoice(json);
