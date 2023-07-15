import { PDFDocument } from 'pdf-lib';

async function pageCount(base_64_file) {
  const readPdf = await PDFDocument.load(base_64_file);
  return readPdf.getPageCount()
}

export default {
  pageCount
}
