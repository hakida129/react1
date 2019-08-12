import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

   

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser)
    }

    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow 
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        editFunClick = {(user) => this.props.editFun(value)} 
        stt={key} 
        userName={value.name}
         key={key} 
         phone={value.tel} 
         permission={value.Permission}
         id={value.id}
         changeeditUserStatus={() => {this.props.changeeditUserStatus()}}
         />
    ))

    //this.props.editFun

    render() {
        
        return (
            
                <div className="col">
                    <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                   {this.mappingDataUser()}
                
                </tbody>
            </table>
</div>

           
        );
    }
}

export default TableData;