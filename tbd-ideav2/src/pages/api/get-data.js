import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('http://100.104.213.57:4172/v1') // Your API Endpoint
    .setProject('644cfafd2592bab3681f');
const account = new Databases(client);
        
export default function handler(req, res) {
    if (req.method === 'GET') {
        const databases = new Databases(client);

        const promise = databases.createDocument(
            '644d06dd4576ea7fbaad',
            '644d0abfd58662934852',
            ID.unique(),
            {
                'dustbin-lat': 17.496380,
                'dusbin-lng': 78.403267,
                'area': 'bhagyanagar kphb',
                'last-collected': '2023-04-07T00:00Z',
                'dustbin-fullness': 46,
            }
            
        );

        promise.then(function (response) {
            console.log(response);
            res.status(200).json({ message: 'Database Created!', response: response });
        }, function (error) {
            console.log(error);
            res.status(200).json({ message: 'Error!', response:error });
        });
    }
}