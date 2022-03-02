import React, { Component } from 'react';

// waiting for sort featered in process.... 

class Filter extends Component {

    state = {   
        selected : 'price-asc' ,
    }

    render() {
        const { sortProduct } = this.props ; 

        return (
            <div className='filter'>
                <h6>sắp xếp theo :</h6>
                <div className="wrapper">
                    <button className='active' onClick={() => this.raiseSort('price-asc')}>giảm - tăng</button>
                    <button>tăng - giảm</button>
                </div>
                <span>|</span>
                <div className='wrapper'>
                    <button className='active'>A - Z</button>
                    <button>Z - A</button>
                </div>
            </div>
        );
    }

    getButtonClass = (name) =>{
        return this.state.selected === name ? 'active' : '' ; 
    }
}

export default Filter;
