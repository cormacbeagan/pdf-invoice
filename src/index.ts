import jsPDF from "jspdf";
import addFonts from "setup/addFonts";
import json from "data/dummy.json";

const margins = {
  top: 30,
  left: 20,
  right: 20,
  bottom: 20,
};

const createInvoice = (jsonData: any): void => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  addFonts(doc);
  doc.addPage();
  doc.text("Something", margins.top, margins.left);

  doc.save("Invoice.pdf");
};

createInvoice(json);
