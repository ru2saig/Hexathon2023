export default function handler(req, res) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case 'POST':
      res.status(200).json({ message: `You submitted the following data: ${body}` })
      
    // handle other HTTP methods
    default:
      res.status(200).json({ message: 'Welcome to API Routes!'})
  }
}

