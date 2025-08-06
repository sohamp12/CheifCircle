import React from 'react'
import food from '../assets/food.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItem from '../components/RecipeItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'
export default function home() {
  const navigate = useNavigate()
  const [isOpen,setIsOpen]=useState(false)
  const addRecipe=()=>{
    let token = localStorage.getItem("token")
    if(token)
    navigate("/addRecipe")
  else{
    setIsOpen(true)
  }
  }
  return (
    <>
    <Navbar/>
    <section className='home'>
        <div className='left'>
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis omnis unde ratione optio sapiente? Illum voluptates ab obcaecati placeat eligendi vel dolore odit quisquam magni illo. Optio, odit tenetur.</h5>
            <button onClick={addRecipe}>Share your recipe</button>
        </div>
        <div className='right'>
          <img src={food} width="360 px" height="340 px"></img>
        </div>
    </section>
    <div className="bg">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,96L40,90.7C80,85,160,75,240,85.3C320,96,400,128,480,133.3C560,139,640,117,720,117.3C800,117,880,139,960,160C1040,181,1120,203,1200,208C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
     {(isOpen) && <Modal onClose ={()=>setIsOpen(false)}> <InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
   <div className="recipe">
    <RecipeItem/>
   </div>


    <Footer/>
    </>
  )
}
