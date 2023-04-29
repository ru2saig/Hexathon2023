import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('http://100.104.213.57:4172/v1') // Your API Endpoint
    .setProject('644cfafd2592bab3681f');
const account = new Databases(client);
        
export default function handler(req, res) {
     
    if (req.method === 'GET') {
        const databases = new Databases(client);
        const docid = ID.unique();
        
        const promise = databases.createDocument(
            '644d06dd4576ea7fbaad',
            '644d0abfd58662934852',
            `${docid}`,
            {
                'dustbin-lat': 17.497930,
                'dusbin-lng': 78.403917,
                'area': 'bhagyanagar kphb',
                'last-collected': '2023-04-27T12:00Z',
                'dustbin-fullness': 46,
            }
            
        );
        let vsar = databases.getDocument(
        '644d06dd4576ea7fbaad',
        '644d0abfd58662934852',
        `${docid}`);
        console.log(vsar)
        // .then((response) => {
        //     let lat = response.response['dustbin-lat']
        //     let lng = response.response['dusbin-lng'];
        //     console.log(lat,lng)
        //     databases.listDocuments('644d06dd4576ea7fbaad',
        //         '644d0abfd58662934852').then((responqse) => {
        //             let a = [];
        //             let c = [];
        //             for(let i = 0; i< responqse.documents.length; i++){
        //                 let d,b = fetchosrmres(responqse.documents[i],lat,lng)
        //                 a.push(d);
        //                 c.push(b);
        //             }
        //             var min = 100000000
        //             for(var p = 0;p< c.length();c++){
        //                 min = c[p] < min ? c[p]:min;
        //             }
        //             let add = c.findIndex(min)
        //             console.log(add)
        //         })
            
            
        // })
        
        

        promise.then(function (response) {
            console.log(response);
            res.status(200).json({ message: 'Database Created!', response: response });
        }, function (error) {
            console.log(error);
            res.status(200).json({ message: 'Error!', response:error });
        });
    }
}