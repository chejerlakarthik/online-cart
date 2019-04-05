import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'

class MensWear extends Component{
    constructor(props){
        super(props)
        this.state = {
            products : []
        }
    }

    componentDidMount = async() => {
        const response = await fetch('http://localhost:4000/api/products',{method : 'GET'})
        const products = await response.json()
        this.setState({
            products
        })
    }
    render(){
        const { products } = this.state
        return(
            <Container>
                <h1>Men's Wear Page</h1>
                {
                    products && products.map(product =>(
                        <div key={product._id}>{product.name} - <span>{product.price}</span></div>
                    ))
                }
            </Container>
        )
    }
}

export default MensWear