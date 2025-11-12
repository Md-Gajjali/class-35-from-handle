import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import img from "../assets/react.svg"
import Button from './Button'
import { AiOutlineBars } from "react-icons/ai";


const NavBer = () => {

    const [change,setChange] = useState(false);
    const [color,setColor] = useState(false);


    // const [color,setColor] = useState("black")
    
    // const handleColor = () =>{
    //     color=="white" ? setColor("pink-400") : setColor("white")
    // }

 
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //     setCount((count) => count + 1);
    //     }, 10);
    // },[color]);



  return (
    <>
    <nav className={`flex justify-between  items-center  px-4 py-0 h-[70px] bg-black  text-white bg font-Lubrifont '`}>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className={`${color ? "hidden" : "block" } absolute lg:relative  top-17 lg:top-0 left-0 lg:left-0 w-full lg:w-70 bg-black px-4  lg:flex`}>
            <ul className='lg:flex text-white text-2xl  gap-10  leading-10 items-center '>
                <li><span>Home</span><hr className="lg:hidden " /></li>
                <li><span>About</span><hr className="lg:hidden" /></li>
                <li><span>Contact</span><hr  className="lg:hidden" /></li>
                <li><span>Blog</span></li>
            </ul>
        </div>
        <div className='hidden lg:flex'>
            <Button apon="hello " onClick={() => setChange(!change) }/>
        </div>
        <AiOutlineBars  className='lg:hidden text-3xl  ' onClick={()=> setColor(!color)}/>
    </nav>
    {
        change ?
        <div className='py-8  bg-pink-300 text-white'>
            <div className='w-[500px] h-[300px] m-auto'>
                <label htmlFor="email" className='text-2xl'>email</label>
                <input type="password" placeholder='inter your name'cassName='bg-black rounded-full py-2 px-3 ' />
            </div>
        </div> : null
    }
    </>
  )
}
export default NavBer
