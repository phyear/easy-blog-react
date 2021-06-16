import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';

 class ArticleView extends Component {
    render() {
        return (
            <div>
              <AwesomeSlider >
               <div data-src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png">
                <p>I want to see what you got.</p>
               </div>
               <div data-src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png">
                <p>I want to see what you got.</p>
               </div>
              </AwesomeSlider>
                
            </div>
        )
    }
}

export default  ArticleView;
