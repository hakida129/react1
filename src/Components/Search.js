import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state= {
            tempValue:'',
            userObj:{}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);

        
    }
    
    isShowEditForm = () => {
        if(this.props.editUserStatus === true ){
           return <EditUser 
           getUserEditInfo={(info) => this.getUserEditInfo(info)}
           editUserObiject={this.props.editUserObiject}
           changeeditUserStatus={() => {this.props.changeeditUserStatus()}}/>
        }
    }

    isChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
        
    }

    showButton = () => {
        if(this.props.showForm === false){
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.connect()} >Add Username</div>;
        }else{
            return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.connect()} >Close</div>;
        }
    }

    render() {
        return (
           
                <div className="col-12">
                    <div className="row">
                   
                         {this.isShowEditForm()}    
                   
                    </div>

                    {/* end edit User */}
                    <div className="form-group">
                        <div className="btn-group" >
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa " />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm</div>
                        </div>

                        <div className="btn-group1 mt-2">
                            {
                                this.showButton()
                            }
                            
                        </div>
                    </div>
                    <hr/>
                </div>      
   
        );
    }
}

export default Search;