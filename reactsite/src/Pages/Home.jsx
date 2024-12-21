import React from 'react'
import Header from '../Componets/Header'


function Home() {
  return (
    <div>
      <Header />
        <div className='w-full h-[780px] bg-black text-white'>
          <div className='w-[100%] h-[30%]  flex items-center justify-center'>
            <h1 className='text-[150px] font-bold'>INFINITYFX®</h1>
          </div>
          <div className='w-[100%] h-[45%]  flex items-center justify-center'>
             <div className='w-[80%] h-[90%] bg-zinc-900 flex items-center gap-[150px] rounded-md '>
                <p className='ml-[100px] text-3xl font-semibold'>Sustainable clothing, <br />limitless design.</p>
                <div className='w-[280px] h-[90%] bg-sky-200 flex items-center justify-center rounded '>
                  <img className='h-[100%]' src="https://www.infinity-fx.com/_next/image?url=%2Fimages%2Flanding.png&w=640&q=75" alt="" />
                  </div>
                </div>
          </div>
          <div className='w-[100%] h-[25%]  flex flex-col items-center justify-center'>
              <div className='w-[80%] h-[90%] bg-zinc-900 flex items-center justify-center rounded-md  '>
                <h1 className='text-[80px] font-bold'> New Arrivals New Arrivals </h1>
              </div>
          </div>
        </div>
        <div className='max-w-screen h-screen bg-black text-white'>
          <div className='w-full h-[60%]  flex flex-col md:flex-row items-center justify-center gap-[20px]'>
              <div className='w-[280px] h-[90%] bg-white '>
                <div className='w-[100%] h-[80%] bg-gray-200'>
                  <img className='w-[100%] h-[100%] ' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Fstandard-badge-hoodie%2Fhoodie-front.png&w=256&q=95" alt="" />
                </div>
                <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
                   <h2 className='font-bold'>Badge Hoodie</h2>
                   <p className='font-bold'>$ 87.95</p>
                </div>
              </div>
              <div className='w-[280px] h-[90%] bg-white'>
                  <div className='w-[100%] h-[80%] bg-gray-200'>
                      <img className='w-[100%] h-[100%]' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Fstandard-mono-beanie%2Fbeanie-profile.png&w=256&q=95" alt="" />
                  </div>
                  <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
                    <h2 className='font-bold'>Mono Beanie</h2>
                    <p className='font-bold'>$ 23.05</p>
                  </div>
              </div>
              <div className='w-[280px] h-[90%] bg-white'>
                 <div className='w-[100%] h-[80%] bg-gray-200'>
                   <img className='w-[100%] h-[100%] bg-gray-200' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-inv-tape-tee%2Fblack-tee-portrait.png&w=256&q=95" alt="" />
                 </div>
                 <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
                    <h2 className='font-bold'>Inverted Tape Tee</h2>
                    <p className='font-bold'>$ 43.95</p>
                 </div>
              </div>
              <div className='w-[280px] h-[90%] bg-white'>
                 <div className='w-[100%] h-[80%] bg-gray-200'>
                   <img className='w-[100%] h-[100%] bg-gray-200'src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-tape-tee%2Fwhite-tee-portrait.png&w=256&q=95" alt="" />
                 </div>
                 <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
                    <h2 className='font-bold'>Tape Tee</h2>
                    <p className='font-bold'>$ 43.95</p>
                 </div>
              </div>
              <div className='w-[280px] h-[90%] bg-white'>
                 <div className='w-[100%] h-[80%] bg-gray-200'>
                   <img className='w-[100%] h-[100%] bg-gray-200' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-aged-cap%2Fhat-top.png&w=256&q=95" alt="" />
                 </div>
                 <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
                    <h2 className='font-bold'>Aged Cap</h2>
                    <p className='font-bold'>$ 26.355</p>
                 </div>
              </div>
          </div>
          <div className='w-full h-[40%] bg-black flex items-center justify-center flex-col'>
             <p className='text-3xl font-bold'>
                We are a sustainable <br />
                fashion brand from the  <br />
                Netherlands, making pre- <br />
                mium apparel our way. We <br />
                blend our love for design  <br />
                with sustainable and  <br />
                ethical production.
             </p>
             <p className='ml-[200px] font-bold'>
                About us
             </p>
          </div>

        </div>
        <div className='className=max-w-screen h-screen bg-white text-white'>
            <div className='w-full h-[40%] bg-black text-[100px] flex items-center jutify-center flex-col font-bold '>
               <span className='text-zinc-800  hover:text-white'>Limitless in nature,</span> 
               <span className='ml-[200px] mb-[80px] text-zinc-800 hover:text-white'> driven to explore™</span>
            </div>
            <div className='w-full h-[60%] bg-zinc-900'>
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
        
    </div>
  )
}

export default Home
