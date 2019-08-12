import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObiject.id,
            name: this.props.editUserObiject.name,
            tel: this.props.editUserObiject.tel,
            Permission: this.props.editUserObiject.Permission
        }
        
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        
        this.props.getUserEditInfo(info);
       
        this.props.changeeditUserStatus();// hidden form
    }
    isChange = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       this.setState({[name]:value});
    }
    render() {
       // console.log(this.state);
        return (
           
               
                <div className="col-12">
                   <form>
                   <div className="card text-while bg-secondary mb-3 mt-2">
                       <div className="card-header text-center">Edit Infomation User</div>
                       <div className="card-body">
                       <div className="form-group">
                           <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObiject.name} type="text" name="name" className="form-control" placeholder="Username" />
                       </div>
                       <div className="form-group">
                           <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObiject.tel} type="text" name="tel" className="form-control" placeholder="Phone number" />
                       </div>
                       <div className="form-group">
                           <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObiject.Permission} className="custom-select my-1 mr-sm-2" name="Permission" id="inlineFormCustomSelectPref">
                           
                           <option value={1}>Admin</option>
                           <option value={2}>Moderator</option>
                           <option value={3}>Menber</option>
                           </select>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-block btn-warning" onClick={() => {this.saveButton()}} >Save</button>
                       </div>
                       </div>
                   </div>
                   </form>
                </div>
              
            
        );
    }
}

export default EditUser;