import React, { Component } from 'react';
import { saveProduct } from '../fakeServer/productChaillo';
import { getValueModal } from '../utils/getValueModal';

class Form extends Component {
    state = {
        data: {
            _id : '' , 
            title: '',
            content: '',
        }
    }

    componentDidMount(){
        const itemId = this.props.match.params._id ; 
        if(itemId){
            const value = this.getValueProduct(itemId) ; 
            this.setState({ data : this.mapToViewModel(value)})
        }
    }

    getValueProduct = (id) => {
        const { products } = this.props ; 
        for(let key in products){
            if(products[key]._id === id){
                return products[key] ; 
            }
        } 
        return 'error in form' ; 
    }

    mapToViewModel (item){
        return {
            _id : item._id , 
            title : item.title , 
            content : item.content ,
        }
    }

    raiseCreateModal = () => {
        const value = getValueModal(this.props.products);
        this.props.onCreate(value);
        this.props.history.replace('/admin/all-products');
    }

    cancelModal = () => {
        this.props.history.replace('/admin/all-products');
    }

    handleSubmit = e => {
        e.preventDefault();

        saveProduct(this.state.data) ; 

        this.props.history.push('/admin/all-products') ; 
    }

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    render() {
        return (
            <div className='modal-form'>
                <h1>Create a product :</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title :</label>
                        <input id="title" name='title' value={this.state.data.title} onChange={this.handleChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content :</label>
                        <input id="content" name='content' value={this.state.data.content} onChange={this.handleChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">image :</label>
                        <input id="image" type="file" multiple />
                    </div>
                    <div className='button-control'>
                        <button onClick={this.cancelModal} className="btn-info">cancel</button>
                        <button onClick={this.handleSubmit} className="btn-success">save change</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;