import React, { Component } from 'react';

const defaultProps = {
 };
 
  type dataCardProps = {
      data: any,
      icon?: string
  } & Partial<typeof defaultProps>;

class DataCard extends Component<dataCardProps> {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DataCard;