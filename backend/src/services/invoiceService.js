import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateInvoicePDF = (invoice, apartment) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = `./invoices/inv_${invoice.id}.pdf`;
    
    // Ensure directory exists
    if (!fs.existsSync('./invoices')) fs.mkdirSync('./invoices');

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    
    doc.fontSize(20).text('Invoice');
    doc.fontSize(12).text(`Unit: ${apartment.unit_number}`);
    doc.text(`Amount: ${invoice.amount}€`);
    doc.text(`Type: ${invoice.type}`);
    
    doc.end();
    
    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
};
