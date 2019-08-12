import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:'',
      tel:'',
      Permission:''

    }
  }
  

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });

    //pack to item

  //  var item = {};
  //  item.id = this.state.id;
  //  item.name = this.state.name;
  //  item.tel = this.state.tel;
  //  item.Permission = this.state.Permission;

  //  console.log(item)

  }
  

  checkStatus = () => {
    if(this.props.showForm === true ){
      return(
        <div className="col">
          <form>
        <div className="card mb-3 mt-2">
            <div className="card-header">Add News User</div>
            <div className="card-body">
              <div className="form-group">
                <input type="text" name="name" onChange = {(event) => this.isChange(event)} className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="text" name="tel" onChange = {(event) => this.isChange(event)} className="form-control" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <select className="custom-select my-1 mr-sm-2" name="Permission" onChange = {(event) => this.isChange(event)} id="inlineFormCustomSelectPref">
                  <option defaultValue>Select </option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Menber</option>
                </select>
              </div>
              <div className="form-group">
                <button type="reset" className="btn btn-block btn-primary" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} >Add User</button>
              </div>
            </div>
          </div>
          </form>
          </div>
      )
    }
  }

    render() {
    // console.log(this.state)
        return (
            
            <div>
              {this.checkStatus()}
              
           
          </div>
          
        );
    }
}

export default AddUser;