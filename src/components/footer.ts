import { margins } from "index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawFooter = (doc: jsPDF) => {
  doc.setDrawColor(colors.blue);
  doc.setLineWidth(0.18);

  doc.line(
    margins.left,
    margins.posBottom,
    margins.posRight,
    margins.posBottom
  );
};

export default drawFooter;
