import React, { Component } from 'react';
import { icons } from "assets/icons/icons-svg";
import './styles/delete.css' ; 

class Delete extends Component {
    state = {
        message: {},
    }

    displayMessageBox = () =>{
        const message = {...this.state.message}  ;
        message.display = true ;  
        this.setState({ message })
    }

    hiddenMessageBox = () => {
       const message = { display : false } ;  
       this.setState({ message })
    }

    handleDelete =() =>{
        const { onDelete , list , item } = this.props ; 
        const message = { display : false } ; 
        this.setState({ message }); 
        onDelete(item,list) ; 
    }

    render() {

        const { message } = this.state ; 
        return (
            <div>
                <div onClick={this.displayMessageBox} className=" btn-delete">
                {icons.iconDelete}
                </div>
                { message.display && <div className="box-message">
                    <h2>bạn ăn cơm chưa ?</h2>
                    <div>
                        <button onClick={this.hiddenMessageBox}>rồi</button>
                        <button onClick={this.handleDelete}>delete</button>
                    </div>
                </div> }
            </div>
            
        );
    }
}

export default Delete;