import React, { Component } from 'react'
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
    showForm : false,
    data : [],
    searchText : '',
    editUserStatus:false,
    editUserObiject :{}
   }
 }

componentWillMount() {
  if(localStorage.getItem('userData') === null){
    localStorage.setItem('userData',JSON.stringify(DataUser))
  }else{
    var temp = JSON.parse(localStorage.getItem('userData'));
    this.setState({
      data:temp
    });
    
  }
}

 deleteUser = (idUser) => {
  var tempData = this.state.data.filter(item => item.id !== idUser)
  this.setState({
    data:tempData
  });
  localStorage.setItem('userData',JSON.stringify(tempData));
 }

 changeeditUserStatus = () => {
   this.setState({
     editUserStatus : !this.state.editUserStatus
   });
 }

 editUser = (user) => {
 
  this.setState({
    editUserObiject:user
  });

  }

 getDataNewUser = (name, tel, Permission) => {
  var item = {};
  item.id = '';
  item.name = name;
  item.tel = tel;
  item.Permission = Permission;

  var items = this.state.data;
  items.push(item);

  this.setState({
    data:items
  });
  localStorage.setItem('userData',JSON.stringify(items));
  
 }

 getUserEditInfoApp = (info) => {
   
   this.state.data.forEach((value,key) => {
    if(value.id === info.id){
      value.name = info.name;
      value.tel = info.tel;
      value.Permission = info.Permission;
    }

   })
   localStorage.setItem('userData',JSON.stringify(this.state.data));
 }

 getTextSearch = (dl) => {
   this.setState({
     searchText:dl
   });
   
 }
 
 changeStatus = () => {
   this.setState({
     showForm : !this.state.showForm
   });
 }
  
    render() {
      //localStorage.setItem('userData',JSON.stringify(DataUser));

      var ketqua = [];
      this.state.data.forEach((item) => {
        if(item.name.indexOf(this.state.searchText) !== -1){
          ketqua.push(item)
        }
      })
   
      return (
        <div >
         <Header/>
         <div className="searchForm">
            <div className="container">
                <div className="row">
                  <Search 
                  getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                  editUserObiject={this.state.editUserObiject}
                  checkConnectProps={(dl)=> this.getTextSearch(dl)}
                  showForm={this.state.showForm}
                  editUserStatus={this.state.editUserStatus}
                  connect={()=>this.changeStatus()} 
                  changeeditUserStatus={() => {this.changeeditUserStatus()}}/>
                  <TableData 
                  deleteUser = {(idUser) => this.deleteUser(idUser)}
                  editFun = {(user) => this.editUser(user)} 
                  dataUserProps={ketqua}
                  changeeditUserStatus={() => {this.changeeditUserStatus()}}
                  />
                  <AddUser 
                  add={(name, tel, Permission) => this.getDataNewUser(name, tel, Permission)} 
                  showForm={this.state.showForm}/>
                </div>
              </div>
            </div>
        </div>
      );
    }
  
}
 

export default App;
