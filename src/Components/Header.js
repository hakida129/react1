import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                <h1 className="display-3">Quản lý thành viên với ReactJs</h1>
                <p className="lead">với dữ liệu Json</p>
                <hr className="my-2" />
                </div>

            </div>
        );
    }
}

export default Header;