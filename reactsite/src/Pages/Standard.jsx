import React from 'react'
import Header from '../Componets/Header'

function Standard() {
  return (
    <div>
      <Header/>
      <div className='w-full h-[780px] bg-black flex items-center '>
        <div className='w-[50%] h-[50%]  pl-[200px] text-white '>
           <h1 className='text-9xl font-bold'>Standard </h1>
           <h1 className='text-9xl font-bold'>Issue </h1> <br />
           <p className='text-4xl font-bold ml-[300px]'>Badge Hoodie</p>
          </div>
        <div className='w-[50%] h-[50%]  flex items-center pl-[30px]'>
           <div className='w-[70%] h-[90%] '>
             <img className='w-[450px] h-[450] rounded-md mt-[-100px]' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Fstandard-badge-hoodie%2Fhoodie-front.png&w=256&q=95" alt="" />
           </div>
        </div>
      </div>
      <div className='w-full h-[400px] bg-zinc-900 text-white'>
               <div className='w-full h-[75%]  flex'>
                  <div className='w-[25%] h-[100%]  flex justify-center items-center gap-[30px] text-1xl font-bold pb-[150px] pl-[30px]'>
                     <img className='w-[100px] h-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwvNRVv82xE3UEOcp725fS1e8f2NdFZfA3I8nsOpJ4qRqBtF5" alt="" />
                     <p>infinityfx.dev</p>
                  </div>
                  <div className='w-[15%] h-[100%]  pt-[75px]'>
                     <ul>
                       <li>About</li>
                       <li>InfinityFX. Ltd.</li>
                       <li>Zuid Holland, 2286 KV</li>
                       <li>the Netherlands</li>
                     </ul>
                  </div>
                  <div className='w-[15%] h-[100%]  pt-[75px]'>
                     <ul>
                        <li>Links</li>
                        <li>FAQ</li>
                        <li>Sustainability</li>
                        <li>Shipping</li>
                        <li>Cookie policy</li>
                     </ul>
                  </div>
                  <div className='w-[15%] h-[100%]  pt-[75px]'>
                     <ul>
                       <li>Contact</li>
                       <li>support@infinity-fx.com</li>
                       <li>returns@infinity-fx.com</li>
                       <li>sales@infinity-fx.com</li>
                     </ul>
                  </div>
                </div>
               <div className='w-full h-[25%] bg-zinc-900 flex items-center justify-center gap-[200px]'>
                 <ul className='flex gap-[30px]'>
                   <li>Terms</li>
                   <li>Privacy policy</li>
                   <li>Return policy</li>
                 </ul>
                 <p>©Copyright2016-2024 InfinityFX. All rights reserved. InfinityFX® is a registered trademark.</p>
               </div>

          </div>
      
    </div>
  )
}
export default Standard
