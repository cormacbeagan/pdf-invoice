import { margins } from "index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawFooter = (doc: jsPDF) => {
  doc.setDrawColor(colors.grey);
  doc.setLineWidth(0.3);

  doc.line(
    margins.left,
    margins.posBottom,
    margins.posRight,
    margins.posBottom
  );
};

export default drawFooter;
