import React, {Component} from 'react';

export default class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
          <div>
            <div class="main-review-container">
            <hr />
            <br />
              <div class="review-container">
                <div class="avatar-container">
                  <div class="review-image-container">
                    <img class="review-image" src="https://tse2.mm.bing.net/th?id=OIP.0j98DMwFKuA0AtkGv2wVtAHaHa&w=190&h=190&c=8&o=5&pid=1.7" alt="Avatar"/>
                  </div>
                  <p class="w3-small">1x1_Lego</p>
                  <p class ="w3-small">Posted on: 2/3/06</p>
                </div>
                <div class="review-content-container">
                  <h1>This Fixed My Car!</h1>
                  <h3>Review: Positive</h3>
                  <p>So gas caps are cheap to replace. But the odor persisted and it wasn't a faulty gas cap, it could have been a more serious, and potentially dangerous, problem with my fuel system, like: Fuel tank leak, often accompanied by a rainbow puddle under my car. So I bought this during my visit at a mechanic shop. Buy this!!!</p>
                </div>
              </div>
            </div>
            <div class="main-review-container">
            <hr />
            <br />
              <div class="review-container">
                <div class="avatar-container">
                  <div class="review-image-container">
                    <img class="review-image" src="https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/13276675/gallery_hero_il_fullxfull.1008553644_i18y.jpg" alt="Avatar"/>
                  </div>
                  <p class="w3-small">xX_Hungry_Gh0$t_Xx</p>
                  <p class ="w3-small">Posted on: 11/10/09</p>
                </div>
                <div class="review-content-container">
                  <h1>Its Ok</h1>
                  <h3>Review: Neutral</h3>
                  <p>I've used it a couple of times. Usually livens up the pizza party but kind of overpriced.</p>
                </div>
              </div>
            </div>
            <div class="main-review-container">
            <hr />
            <br />
              <div class="review-container">
                <div class="avatar-container">
                  <div class="review-image-container">
                    <img class="review-image" src="https://i.dailymail.co.uk/i/pix/2013/08/27/article-2403463-1B77E31C000005DC-241_640x443.jpg" alt="Avatar"/>
                  </div>
                  <p class="w3-small">UpsetBadger</p>
                  <p class ="w3-small">Posted on: 6/4/18</p>
                </div>
                <div class="review-content-container">
                  <h1>Garbage!</h1>
                  <h3>Review: Negative</h3>
                  <p>I received this yesterday and expected a decent sized pizza cutter... My pizza is too big for this!! Absolute garbage product!!</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
