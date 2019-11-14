import React from 'react'
import axios from 'axios'
import Product from '../components/Product'

class Admin extends React.Component {
    state = {
        products: []
    }

    fetchProducts () {
        axios.get('http://localhost:5000/products').then(res => {
            console.log('=============== admin fetch works')
            console.log(res.data)
            this.setState({products: res.data})
          }).catch(err => {
            console.log(err, 'admin fetch failed')
          })
    }

    componentDidMount() {
        this.fetchProducts()
    }

    
    render() {
        const {products} = this.state 

        const showProducts = products

        return (
            <React.Fragment>
                <h1>Admin</h1>
                <div className='product-grid'>
                {showProducts.map((product, index) => (
                  <Product key={index} {...product} />
                ))}
                </div>
                
            </React.Fragment>
        )
    }
}

export default Admin