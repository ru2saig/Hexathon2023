import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('http://localhost:4172/v1') // Your API Endpoint
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
                'dustbin-lng': 78.403267,
                'area': 'bhagyanagar kphb',
                'last-collected': '29/04/2023, 12:56:26.871 pm',
                'dustbin-fulness': 46
            }
            
        );

        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }
}