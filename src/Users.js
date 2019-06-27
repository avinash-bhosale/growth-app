import React from 'react';
import { Button, Icon } from 'antd';

const TableHeader = () => {
    return (
      <thead>
        <tr>
        <th>id</th>
        <th>Name</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Actions</th>
        </tr>
      </thead>
    )
  }
  const TableBody = props => {
    const rows = props.users.map((row, index) => {
      return (
        <tr key={index}>
            <td>{index}</td>
            <td>{row.name}</td>
            <td>{row.dob}</td>
            <td>{row.gender}</td>
            <td>
              <a href="#" onClick={() => props.updateUser(index)}><Icon type="edit" style={{ color: 'blue' }} /></a>
              <a href="#" onClick={() => props.delUser(index)}><Icon type="delete" style={{ color: 'red' }} /></a>
              <a href="#" onClick={() => props.displayGrowth(index)}><Icon type="eye" style={{ color: 'green' }} /></a>
            </td>
        </tr>
      )
    })
    return <tbody>{rows}</tbody>
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
                    <TableHeader />
                    <TableBody users={users} updateUser={this.props.updateUser}  delUser={this.props.delUser} displayGrowth={this.props.displayGrowth}/>
                </table>
            </div>
        )
      }
}

export default Users;
