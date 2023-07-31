import React from 'react'
import {ReactComponent as Avatar} from '../../assets/avatar_1.svg'
import Button from '../../components/Button'
import Input from '../../components/input'
import postImg from '../../assets/postImg.jpg'
import { stats } from './data'


const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] flex overflow-hidden'>
        <div className='w-[20%] bg-white flex flex-col'>
            <div className='h-[30%] flex justify-center items-center border-b'>
                <div className='flex flex-col justify-center items-center'>
                    <Avatar width={'95px'} height={'95px'} className='border-4 rounded-full p-2'/>
                    <div className='my-4 text-center'>
                        <h3 className='text-xl font-semibold'>Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>

                    </div>
                   
                    <div className=' h-[50px] flex justify-around w-[300px] text-center'>
                        {

                            stats.map(({ id , name , stats})=>{
                                return(
                                <div key={id}>
                                    <h4 className='font-bold'>{stats}</h4>
                                    <p className='font-light text-m'>{name}</p>
                                </div>
                                )
                        })
                    } 
                    </div>

                </div>
            </div>
            <div className='h-[55%]  flex  flex-col justify-evenly pl-12 border-b'>
                <div>Home</div>
                <div>Trending</div>
                <div>Feed</div>
                <div>Messages</div>
                <div>Profile</div>
                <div>Status</div>
                <div>Setting</div>

            </div>
            <div className='h-[15%] pt-10'>
                <div className='ml-12 cursor-pointer'>Log Out</div>  
            </div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide '>
            <div className='bg-white h-[75px] border-l flex justify-evenly items-center pt-4
            sticky top-0 shadow-lg'>
               
                <div className='flex justify-center items-center'>
                    <Input placeholder='Enter your search' className='w-[400px] rounded-full'/>
                    <Button label='Search' className='mb-4 ml-4'/>
                </div>
                <Button label='Create new post'  className='rounded-lg bg-red-400 hover:bg-red-500 mb-4'/>
            </div>
            <div className='bg-white w-[60%] mx-auto mt-24 p-8'>
                <div className='border-b flex items-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                    <div className='ml-4'>
                        <h3 className='text-lg leading-none font-semibold'> Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>
                    </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src= {postImg} className='rounded-xl'/>
                    <p className='my-4 text-sm font-bold'>Lorem Ispum is simply dummy textof the 
                    printing and typesetting industry. lorem Ispum has been the industry stabdard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>10.5k Likes</div>
                    <div>5.5k Comments</div>
                    <div>3.5k Shares</div>
                </div>


            </div>
            <div className='bg-white w-[60%] mx-auto mt-24 p-8'>
                <div className='border-b flex items-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                    <div className='ml-4'>
                        <h3 className='text-lg leading-none font-semibold'> Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>
                    </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src= {postImg} className='rounded-xl'/>
                    <p className='my-4 text-sm font-bold'>Lorem Ispum is simply dummy textof the 
                    printing and typesetting industry. lorem Ispum has been the industry stabdard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>10.5k Likes</div>
                    <div>5.5k Comments</div>
                    <div>3.5k Shares</div>
                </div>


            </div>
            <div className='bg-white w-[60%] mx-auto mt-24 p-8'>
                <div className='border-b flex items-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                    <div className='ml-4'>
                        <h3 className='text-lg leading-none font-semibold'> Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>
                    </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src= {postImg} className='rounded-xl'/>
                    <p className='my-4 text-sm font-bold'>Lorem Ispum is simply dummy textof the 
                    printing and typesetting industry. lorem Ispum has been the industry stabdard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>10.5k Likes</div>
                    <div>5.5k Comments</div>
                    <div>3.5k Shares</div>
                </div>


            </div>
            <div className='bg-white w-[60%] mx-auto mt-24 p-8'>
                <div className='border-b flex items-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                    <div className='ml-4'>
                        <h3 className='text-lg leading-none font-semibold'> Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>
                    </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src= {postImg} className='rounded-xl'/>
                    <p className='my-4 text-sm font-bold'>Lorem Ispum is simply dummy textof the 
                    printing and typesetting industry. lorem Ispum has been the industry stabdard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>10.5k Likes</div>
                    <div>5.5k Comments</div>
                    <div>3.5k Shares</div>
                </div>


            </div>
            <div className='bg-white w-[60%] mx-auto mt-24 p-8'>
                <div className='border-b flex items-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                    <div className='ml-4'>
                        <h3 className='text-lg leading-none font-semibold'> Lara Jane</h3>
                        <p className='text-sm font-light'>@lara_jane</p>
                    </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src= {postImg} className='rounded-xl'/>
                    <p className='my-4 text-sm font-bold'>Lorem Ispum is simply dummy textof the 
                    printing and typesetting industry. lorem Ispum has been the industry stabdard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>10.5k Likes</div>
                    <div>5.5k Comments</div>
                    <div>3.5k Shares</div>
                </div>


            </div>
        </div>
        <div className='w-[20%] bg-[#F2F5F8]'></div>
    </div>
  )
}

export default Home



