import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {cols} from 'react-bootstrap';

export default class EditProductBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
          description: '',
          price: '',

        }
    }

    render() {
        return (
          <form>
          <div class="main-modifyProduct-container">
          <div class="modifyProduct-container">
          <div>
            <p>Inventory</p>
            <textarea className="textAreaResizeNone" name="inventory" rows="1" cols="5" >
            50
            </textarea>
          </div>
          <div>
            <p>Item</p>
            <textarea className="textAreaResizeNone" name="item" rows="1" cols="35" >
            Maroon - Pullover Hoodie - XL
            </textarea>
          </div>
          <div>
            <p>Price</p>
            <textarea className="textAreaResizeNone" name="price" rows="1" cols="8" >
            $39.99
            </textarea>
          </div>
          <div>
            <p>Tag</p>
            <textarea className="textAreaResizeNone" name="tag" rows="1" cols="10" >
             Apparel
            </textarea>
          </div>
          <div>
          <p>Category:</p>
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
          <div className="textArea">
            <p>Description</p>
            <textarea class="form-control" name="description" >
            A lovely medium thickness 100% cotton eco-friendly free-range grown sustainable pullover to keep you warm against medium cold weather!
            </textarea>
            <input type="submit" name="submit" />
            </div>
          </div>
          <br />
          </form>
        );
    }
}
