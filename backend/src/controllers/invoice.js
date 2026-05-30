import { Invoice } from '../models/Invoice.js';

export const handlePaymentWebhook = (req, res) => {
  const { invoiceId, status } = req.body;
  
  // Minimal logic for payment status update
  if (status === 'success') {
    Invoice.updateStatus(invoiceId, 'Paid');
    res.status(200).json({ message: 'Payment recorded' });
  } else {
    res.status(400).json({ message: 'Payment failed' });
  }
};
