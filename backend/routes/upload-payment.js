router.post('/upload-payment', upload.single('screenshot'), async (req, res) => {
  const utr = req.body.utr;
  const name = req.body.name;   // <- This must be here
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const payment = new Payment({
      utr,
      name,       // Save name here
      screenshot: file.filename,
    });

    await payment.save();

    res.status(200).json({ message: 'Payment saved', payment });
  } catch (error) {
    console.error('Error saving payment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
