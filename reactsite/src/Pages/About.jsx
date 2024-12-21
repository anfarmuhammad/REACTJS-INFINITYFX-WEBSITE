import React from 'react'
import Header from '../Componets/Header'

function About() {
  return (
    <div>
      <Header/>
        <div className='w-full h-[780px] bg-black flex items-center justify-center gap-[30px] text-white font-bold'>
           <div className='w-[500px] h-[400px] '>
             <img className='w-full h-full rounded-md'src="https://www.infinity-fx.com/_next/image?url=%2Fimages%2Fabout.png&w=384&q=100" alt="" />
           </div> 
            <p>The brand <br />
                InfinityFX is a clothing brand and digital technology company based in the <br />
                Netherlands. Founded in 2019, our focus is sustainability. We want to <br />
                create premium clothing in an ethical way, whilst incorporating our unique <br />
                design language inherited from our love for digital art.
            </p>
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

export default About
