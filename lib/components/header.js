"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("index");
var colors_1 = require("../resources/colors/colors");
var drawHeader = function (doc, title) {
    doc.setDrawColor(colors_1.colors.blue);
    doc.setLineWidth(0.18);
    doc.line(index_1.margins.left, index_1.margins.top, index_1.margins.posRight, index_1.margins.top);
    doc.setFontSize(22);
    doc.setFont("Abril", "normal");
    doc.text(title, index_1.margins.pageWidth / 2, 15, {
        align: "center",
        baseline: "middle",
    });
    doc.setFontSize(12);
    doc.setFont("KanitLight", "normal");
};
exports.default = drawHeader;
