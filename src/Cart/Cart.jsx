import React from 'react'
import axios from 'axios'

class Cart extends React.Component {
    state={
        data:{

        }
    }
    get=()=>{
        axios.get("https://fakestoreapi.com/products ").then(resposne=>{
            this.setState({data:resposne.data})
        })
    }
    render(){
        return (
            <div>
              <p>hello</p>
              {/* https://fakestoreapi.com/products */}
              <button onClick={this.get}>get </button>
              {/* <p>{this.state.data}</p> */}
            </div>
          )

    }
 
}

export default Cart