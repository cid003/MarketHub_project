import React, {Component} from 'react';
import Reviews from './Reviews';
import AddReviews from './AddReviews';

export default class ProductDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
          description: '',
          price: '',

        }
    }

    render() {
        return (
          <div class="main-product-container">
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image" src="https://i.imgur.com/TbPLRvZ.jpg" alt="Pizza"/>
              </div>
            </div>
            <div class="product-container">
              <div class="w3-container">
                <p class="w3-xlarge">shorts</p>
                <p class="w3-large">Seller: Dominitos</p>
                <p class="w3-large">Price: $59.99</p>
                <p class="w3-large">Quantity: &nbsp;
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select>
                  </p>
                  <button type="button" class="w3-button w3-red w3-margin-bottom">Add To Cart</button>
                </div>
            </div>
            <div class="product-container">
              <div class="product-details">
                <p>For all your tiny pizza cutting needs, this top of the line 3cm x 3cm x 4cm stainless steel pizza cutter will carry you to victory royale.</p>
              </div>
            </div>
            <AddReviews />
            <Reviews />
          </div>
        );
    }
}
