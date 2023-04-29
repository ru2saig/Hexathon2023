import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://http://100.104.213.57:4172/v1') // Your API Endpoint
    .setProject('644cfafd2592bab3681f');               // Your project ID

const account = new Account(client);
        
export default function handler(req, res) {
    if (req.method === 'GET') {
        account.create(
            ID.unique(),
            'me@example.com',
            'password',
            'Jane Doe'
        ).then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
}