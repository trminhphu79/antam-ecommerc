import React, { Component } from 'react';
import _, { camelCase } from "lodash";
// waiting for sort featered in process.... 

class Filter extends Component {

    state = {
        selected: 'price-asc',
    }

    raiseSort = (items) => {
        this.setState({ selected: items.name })
        const sortProduct = { ...this.props.sortProduct }
        switch (items.name) {
            case "price-asc": console.log('abc');
            case "price-desc": console.log('xyz');
            case "title-asc": console.log('4wd');
            case "title-desc": console.log('rfef');
        }
    }

    render() {
        const { sortProduct, buttons: btn } = this.props;

        return (
            <div className='filter'>
                <h6>sắp xếp theo :</h6>
                <div className="wrapper">
                    <button
                        className={this.getButtonClass(_.get(btn, btn.priceAsc.name))}
                        onClick={() => this.raiseSort(btn.priceAsc)}>
                        giảm - tăng
                    </button>
                    <button
                        className={this.getButtonClass(_.get(btn, btn.priceDesc.name))}
                        onClick={() => this.raiseSort(btn.priceDesc)}
                    >tăng - giảm</button>
                </div>
                <span>|</span>
                <div className='wrapper'>
                    <button
                        className={this.getButtonClass(_.get(btn, btn.titleAsc.name))}
                        onClick={() => this.raiseSort(btn.titleAsc)}
                    >A - Z</button>
                    <button
                        className={this.getButtonClass(_.get(btn, btn.titleDesc.name))}
                        onClick={() => this.raiseSort(btn.titleDesc)}
                    >Z - A</button>
                </div>
            </div>
        );
    }

    getButtonClass = (name) => {
        return this.state.selected === name ? 'active' : '';
    }
}

export default Filter;
