# Hexathon 2023
Repository of team TBD's entry to the Hexathon 2023 24-hour hackathon by Hexagon

# Description
A system that maps out an optimal route for the collection of garbage from dustbins depending on how full they are. These "dustbins" are simply collection points for garbage, and are connected over a mesh network and send the amount of garbage they contain. Each collection run, an optimal route will be planned. 

Techstack:
- GIS
- Next.js
- Appwrite
- LoRaWAN

## Features
- Display Optimal path to the driver
- Bot based messaging for the drivers
- Display status of the dustbin as an icon

## Sub Modules 
- Designing a optimal path for driver 
- Simulate it on the map 
- Design a webpage 
- Flow of the map

## Installation
TODO

## Running

### With Dustbin Simulator
NOTES: 
This has to be changed, around to make it less hard-coded. These are just notes, for future reference.
Appwrite-middleware must be run on localhost:3000
Client can be run on any port
Make sure that appwrite is running on [Rishi's](https://github.com/hrushikesh-sam) computer, and tailscale is all set up.

### With Actual Hardware
TODO

## End-points

* `api/get-stat?code={code}` - [GET] to get the status of the bin on the level of fill.
* `api/post-cap` - [POST] to update the bin fill stat of the bin.
     ```
     curl --location --request POST 'localhost:3000/api/post-cap' --header 'Content-Type: application/json' --data-raw '{
     "code": "$code-bin",
     "stat":"$target-stat"
     }'
     ```


## Team
[Nidhish Chadive](https://github.com/ru2saig)

[Anirban Sikdar](https://github.com/anirban-1009)

[Hrushikesh Samnekar](https://github.com/hrushikesh-sam)

[Tanmay Pradhan](https://github.com/tanmaypradhan4112)
