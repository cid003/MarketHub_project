import React, {Component} from 'react';

export default class AddReviews extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
          <div>
          <h2>Add Review</h2>
          <hr className="hrBar" />
            <div class="main-review-container">
              <div class="review-container">
                <div class="review-content-container">
                  <form>
                  <p class="w3-large">Title:</p>
                  <input type="text" name="title" value=""  size="98" />
                  <br />
                  <br />
                  <p class="w3-large">Rating:</p>
                  <select name="Review">
                  <option value="Positive">Positive</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Negative">Negative</option>
                  </select>
                  <br />
                  <br />
                  <p class="w3-large">Message:</p>
                  <textarea name="message" rows="10" cols="100">
                  </textarea>
                  <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
