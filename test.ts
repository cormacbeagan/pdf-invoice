import testData from "./testData/test.json";
import createInvoice from "./src/index";
const docs = [testData];
docs.forEach((doc) => {
  createInvoice(doc);
});
