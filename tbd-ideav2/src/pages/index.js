'use client';
import { React, useState } from 'react';
import { Drawer, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';
import Map from '../components/Map';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  }

  return (
    <div className='w-auto h-full bg-gray-900'>
      {/* Header function */}
      <div className='header text-white py-4 text-center text-2xl font-bold'>
        <h1>Trash Track</h1>
        <p className='text-xl font-light'>Navigate the city with Optimal Dustbin Collection</p>
      </div>

      {/* Map container */}
      <div className='py-8'>
        <Map />
      </div>

      {/* driver details */}
      <div className='p-2 bg-white w-full font-bold text-center bottom-0'>
        <ButtonToolbar>
          <IconButton onClick={() => handleOpen('down')}>
            Show's Driver Details
          </IconButton>
        </ButtonToolbar>

        <Drawer className='px-8 bg-slate-300' placement={placement} open={open} onClose={() => setOpen(false)}>
          <Drawer.Header className=''>
            <Drawer.Title className='py-2 text-xl font-semibold'>Driver's Details</Drawer.Title>
            {/* driver */}
            <div className='w-auto h-full p-4 bg-slate-400 border-2'>
              {/* driver plate number */}
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <div className='flex-none'>
                    <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/2766/2766755.png" alt="" />
                  </div>
                  <div className='flex-initial px-4'>
                    <p>AP 21 BS</p>
                    <p className='font-bold text-xl'>4567</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div className='flex-none bg-black border-1 rounded-full'>
                    <img className='w-[70px]' src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
                  </div>
                  <div className='flex-initial px-4'>
                    <p>Tanmay Pradhan</p>
                    <p className='font-bold text-xl'>4.5</p>
                  </div>
                </div>
              </div>

              {/* driver name */}
            </div>
          </Drawer.Header>

          <Placeholder.Paragraph rows={1} />

          <Drawer.Actions>
            <Button className='bg-red-500 text-white border px-4 py-2 rounded-md font-medium' onClick={() => setOpen(false)}>Close</Button>
          </Drawer.Actions>
        </Drawer>
      </div>

    </div>
  )
}
