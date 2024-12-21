import React from 'react'
import Header from '../Componets/Header'


function Collections() {
  return (
    <div>
      <Header />
      <div className='max-w-full h-[649px] bg-black flex'>
        <div className='w-[40%] h-[100%]  flex items-center flex-col pt-[100px]'>
          <div className='w-[400px] h-[200px]  flex items-center flex-col text-white rounded-md bg-zinc-900'>
            <div className='w-[90%] h-[25%]  font-bold flex items-center border-b-[1px] border-gray-100 hover:bg-zinc-800 '><p>Products</p></div>
            <div className='w-[90%] h-[25%]  font-bold flex items-center border-b-[1px] border-gray-100 hover:bg-zinc-800 '><p>Sizes</p></div>
            <div className='w-[90%] h-[25%]  font-bold flex items-center border-b-[1px] border-gray-100 hover:bg-zinc-800 '><p>Colors</p></div>
            <div className='w-[90%] h-[25%]  font-bold flex items-center hover:bg-zinc-800'><p>Price</p></div>
          </div>
        </div>
        <div className='w-[60%] h-[100%]  flex gap-[30px]  items-center text-white'>
          <div className='w-[350px] h-[450px] bg-white '>
            <div className='w-[100%] h-[80%] bg-black '>
              <img className='w-[100%] h-[100%]  ' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Fstandard-badge-hoodie%2Fhoodie-front.png&w=256&q=95" alt="" />
            </div>
            <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6 '>
              <h2 className='font-bold'>Badge Hoodie</h2>
              <p className='font-bold'>$ 87.95</p>
            </div>
          </div>
          <div className='w-[350px] h-[450px] bg-white'>
            <div className='w-[100%] h-[80%] bg-gray-200'>
              <img className='w-[100%] h-[100%]' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Fstandard-mono-beanie%2Fbeanie-profile.png&w=256&q=95" alt="" />
            </div>
            <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
              <h2 className='font-bold'>Mono Beanie</h2>
              <p className='font-bold'>$ 23.05</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-full h-[649px] bg-black flex'>
        <div className='w-[40%] h-[100%]  flex items-center flex-col pt-[100px]'>
          <div className='w-[350px] h-[450px] bg-white text-white'>
            <div className='w-[100%] h-[80%] bg-black '>
              <img className='w-[100%] h-[100%]  ' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-aged-cap%2Fhat-top.png&w=384&q=95" alt="" />
            </div>
            <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
              <h2 className='font-bold'>Badge Hoodie</h2>
              <p className='font-bold'>$ 87.95</p>
            </div>
          </div>
        </div>
        <div className='w-[60%] h-[100%]   gap-[30px] flex items-center text-white'>
          <div className='w-[350px] h-[450px] bg-white '>
            <div className='w-[100%] h-[80%] bg-black '>
              <img className='w-[100%] h-[100%]  ' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-inv-tape-tee%2Fblack-tee-portrait.png&w=384&q=95" alt="" />
            </div>
            <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6 '>
              <h2 className='font-bold'>Badge Hoodie</h2>
              <p className='font-bold'>$ 87.95</p>
            </div>
          </div>
          <div className='w-[350px] h-[450px] bg-white'>
            <div className='w-[100%] h-[80%] bg-gray-200'>
              <img className='w-[100%] h-[100%]' src="https://www.infinity-fx.com/_next/image?url=%2Fstorage%2Fproduct-media%2Forigins-tape-tee%2Fwhite-tee-portrait.png&w=384&q=95" alt="" />
            </div>
            <div className='w-[100%] h-[20%] bg-zinc-900 flex items-center justify-between px-6'>
              <h2 className='font-bold'>Mono Beanie</h2>
              <p className='font-bold'>$ 23.05</p>
            </div>
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

export default Collections
