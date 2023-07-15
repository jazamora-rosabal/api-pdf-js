const { PDFDocument, PageSizes, StandardFonts, rgb} = require('pdf-lib');

async function pageCount(base_64_file) {
  const readPdf = await PDFDocument.load(base_64_file);
  return readPdf.getPageCount()
}

async function addPage(base_64_file) {
  const readPdf = await PDFDocument.load(base_64_file);
  count = readPdf.getPageCount();
  const pdfBytes = null;
  if (count % 2) {
    const timesRomanFont = await readPdf.embedFont(StandardFonts.TimesRoman)
    const page = readPdf.addPage(PageSizes.Letter)
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })
    count = count + 1
    pdfBytes = await readPdf.saveAsBase64()
  } else {
    pdfBytes = base_64_file
  }

  return { pdf: pdfBytes, pages: count }

}

module.exports = {
  pageCount
}
