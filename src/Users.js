import React from 'react';
import {Table, Button, Icon } from 'antd';

  const TableBody = props => {
    const columns = [
      {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
      },
      {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
      },
      {
          title: 'Date',
          dataIndex: 'dob',
          key: 'dob',
      },
      {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
      },
      {
          title: 'Actions',
          dataIndex: 'Actions',
          key: 'Actions',
      },
  ];
  const data = [];
  props.users.map((row, index) => {
    data.push(
        {
            Actions: <div>
              <a href="#" onClick={() => props.updateUser(index)}><Icon type="edit" style={{ color: 'blue' }} /></a>
              <a href="#" onClick={() => props.delUser(index)}><Icon type="delete" style={{ color: 'red' }} /></a>
              <a href="#" onClick={() => props.displayGrowth(index)}><Icon type="eye" style={{ color: 'green' }} /></a>
              </div>,
            key: "'"+index+"'",
            id: index, 
            name: row.name,
            dob: row.dob,
            gender: row.gender,
        }
    )
  });
  return <Table dataSource={data} columns={columns} />;
  }
class Users extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { users } = this.props
        return (
            <div className="container table-responsive-lg">
                <table className="table"> 
                    <TableBody users={users} updateUser={this.props.updateUser}  delUser={this.props.delUser} displayGrowth={this.props.displayGrowth}/>
                </table>
            </div>
        )
      }
}

export default Users;
