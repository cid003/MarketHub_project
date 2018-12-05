import React, {Component} from 'react';

import LinkButton from './LinkButton';
{/*this component goes inside the component ProductGrid*/}

export default class ProductGrid extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: 'Product Info'
        }

        this.injectProducts = this.injectProducts.bind(this);
    }
    
    injectProducts(){
        const inventory = this.state.inventory;
        return(
            <div className = "populate info">
             <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{width:'50%'}}/>
                    <h1>Tailored Jeans</h1>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans..</p>
                    <p><LinkButton to= "/product">Add to Cart</LinkButton></p>
            </div>
        );
    }

    render(){
        return(
            <div>
                <div class="card">
                    {this.injectProducts()}
                </div>
            </div>
        );
    }
}