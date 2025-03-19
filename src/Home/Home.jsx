import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import axios from 'axios';
import CardDetails from '../CardDetails/CardDetails';
import {Link} from 'react-router-dom'


class Home extends React.Component {
  state={
    data:[]
  }
  componentDidMount=()=>{
    this.getLaunches()
  }

  getLaunches=()=>{
    console.log("Launches")
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      // console.log(response.data)
      this.setState({data: response.data})
      
    })
    .catch((error)=>{
      console.log(error)
    })

  }
  CardList=()=>{
    const cardList=this.state.data.map(data=>{
      console.log(data)
      return (
      <Link to="/CardDetails">
      <Card
  
  banner={data.image} 
  title={data.title} 
  price={data.price} 
/>


      </Link>
     
      
      )
    })
    return cardList
  }


  render(){
    console.log(this.state.data[0])
    return (
      <div className='cart'>
        {this.CardList()}
       
        {/* <Card banner={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} title={"Fjallraven-Foldsack No .1 Backpack, Fits 15 Laptops"} price={"109.95 rs."} rating={"3.9"} />
        <Card banner={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} title={"Mens Casual Premium Slim Fit T-Shirts"} price={"22.2 rs."} rating={"4.1"} />
        <Card banner={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"} price={"55.9 rs."} title={"Mens cotton jacket"} rating={"4.9"} />
        <Card banner={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}title={"Mens Casual Slim Fit"} price={"15.9 rs."} rating={"2.9"} /> */}
       
       
      </div>
    )

  }
  
}

export default Home
