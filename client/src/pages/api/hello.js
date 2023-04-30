// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


function createNewPost(title, content) {
  const post = { title, content };
  // TODO: save the post to the database or other data storage mechanism
  console.log(`New post created: ${JSON.stringify(post)}`);
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    createNewPost(title, content);
    res.status(200).json({ message: 'Post created successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid request method.' });
  }
}