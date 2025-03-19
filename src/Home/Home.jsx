import React from 'react'
import './Home.css'
import Card from '../Card/Card'


const Home = () => {
  return (
    <div className='cart'>
     
      <Card banner={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} title={"Fjallraven-Foldsack No .1 Backpack, Fits 15 Laptops"} price={"109.95 rs."} rating={"3.9"} />
      <Card banner={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} title={"Mens Casual Premium Slim Fit T-Shirts"} price={"22.2 rs."} rating={"4.1"} />
      <Card banner={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"} price={"55.9 rs."} title={"Mens cotton jacket"} rating={"4.9"} />
      <Card banner={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}title={"Mens Casual Slim Fit"} price={"15.9 rs."} rating={"2.9"} />
     
    </div>
  )
}

export default Home
