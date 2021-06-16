import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import * as AwesomeSliderStyles  from 'react-awesome-slider/src/styled/fold-out-animation/index';

 class ArticleView extends Component {
    render() {
        return (
            <div>
              <AwesomeSlider cssModule = {AwesomeSliderStyles}>
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
