"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawAddress = function (doc, x, y, data) {
    var posX = x;
    var posY = y;
    doc.setFontSize(12);
    doc.setFont("KanitMedium", "normal");
    var lineHeight = doc.getTextDimensions("Some").h + 1;
    posY += lineHeight;
    doc.text(data.name, posX, posY);
    doc.setFont("KanitLight", "normal");
    posY += lineHeight;
    doc.text(data.address.line1, posX, posY);
    posY += lineHeight;
    doc.text(data.address.line2, posX, posY);
    posY += lineHeight;
    doc.text(data.address.postcode, posX, posY);
    posY += lineHeight;
    doc.text(data.address.country, posX, posY);
    return posY + lineHeight;
};
exports.default = drawAddress;