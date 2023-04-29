<<<<<<< HEAD
'use client';
=======
'use setstate';

import Image from 'next/image'
>>>>>>> api
import { Dropdown } from "@nextui-org/react";


export default function Home() {
  return (
    <div className='w-screen h-full'>
      {/* Header function */}
      <div className='header text-center text-2xl font-bold'>
        <h1>Trash Track</h1>
        <p className='text-xl font-light'>Navigate the city with Optimal Dustbin Collection</p>
      </div>

      {/* Map container */}
      <div className='w-full h-[544px] bg-slate-700'>
        <div>

        </div>
      </div>


      {/* driver details */}
      <Dropdown>
        <Dropdown.Button flat>Trigger</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="new">New file</Dropdown.Item>
          <Dropdown.Item key="copy">Copy link</Dropdown.Item>
          <Dropdown.Item key="edit">Edit file</Dropdown.Item>
          <Dropdown.Item key="delete" color="error">
            Delete file
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
