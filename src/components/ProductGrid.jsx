import React, {Component} from 'react';
import ProductCard from './ProductCard';

export default class ProductGrid extends Component{
    constructor(props) {
        super(props)

        this.state = {
            message: 'Vendors Products',
            products: []
        }
        this.createColumn = this.createColumn.bind(this);
    }

    createColumn = () => {
        const currentProducts = this.state.products;
        return(
            <div>
                    <div className = "w3-col l3 s6">
                    <ProductCard />
                </div>
            
                    <div className = "w3-col l3 s6">
                    <ProductCard />
                </div>

                    <div className = "w3-col l3 s6">
                    <ProductCard />
                </div>

                    <div className = "w3-col l3 s6">
                    <ProductCard />
                </div>
            </div>
        );
    }

    render(){
        return(
            <div>
                <div className="w3-row w3-grayscale">
                    {/* this row is auto generated */}
                    {this.createColumn()}
                </div>
                <div className="row2">
                    {this.createColumn()}
                </div>
                <div className="row3">
                    {this.createColumn()}
                </div>
                <div className="row4">
                    {this.createColumn()}
                </div>
            </div>
        );
    }

   

}