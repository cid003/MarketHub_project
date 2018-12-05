import React, {Component} from 'react';
import AddReviews from './AddReviews';

export default class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
          description: '',
          price: '',

        }
    }

    render() {
        return (
            <div>
              <h2>Add Products</h2>
              <hr className="hrBar" />
              <div class="main-modifyProduct-container">

              <form>
              <div class="product-image-container">
                <img class="product-image" src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png" alt="AddImage"/>
              </div>
              <br />
                <div class="modifyProduct-container">
                <div className="addProductSpacing">
                  <p class="w3-large">Inventory:</p>
                  <input type="text" size="5" name="title" value=""  />
                </div>
                  <div className="addProductSpacing">
                    <p class="w3-large">Item:</p>
                    <input type="text" name="title" value="" size="20" />
                  </div>
                  <div className="addProductSpacing">
                    <p class="w3-large">Price:</p>
                    <input type="text" name="price" value="" />
                  </div>
                  <div className="addProductSpacing">
                    <p class="w3-large">Tag:</p>
                    <input type="tag"  size="8" name="tag" value="" />
                  </div>
                  <div className="addProductSpacing">
                    <p class="w3-large">Category:</p>
                    <select>
                      <option value="1">Jeans</option>
                      <option value="2">Pants</option>
                      <option value="3">Shoes</option>
                      <option value="4">Jewelry</option>
                      <option value="5">Furniture</option>
                      <option value="6">Tools</option>
                    </select>
                  </div>
                </div>
                <div className="textArea2">
                <br />
                  <p class="w3-large">Description:</p>
                    <textarea class="form-control" name="description" >
                    </textarea>
                  <br />
                  <input type="submit" value="Submit" />
                </div>
            </form>
            </div>
            </div>
        );
    }
}
