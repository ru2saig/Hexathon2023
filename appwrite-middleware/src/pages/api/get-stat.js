// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { Client, Databases, Query } from "appwrite";
import { data } from "autoprefixer";

const client = new Client()
    .setEndpoint('http://100.104.213.57:4172/v1') // Your API Endpoint
    .setProject('644cfafd2592bab3681f');
  
export default function handler(req, res) {
if (req.method === 'GET') {
    const databases = new Databases(client);
    const code = req.query['code']

    const promise = databases.getDocument(
        '644d06dd4576ea7fbaad',
        '644d0abfd58662934852',
        `${code}`
    )

    promise.then(function (response) {
        console.log(response); // Success
        res.status(200).json({ message: 'Stat fetched!', dustbin_fullness: response['dustbin-fullness'] });
    }, function (error) {
        console.log(error); // Failure
        res.status(200).json({ message: 'Stat not fetched!', response: response });
    });
}
}