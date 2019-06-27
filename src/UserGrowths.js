import React from 'react';
import { Icon, Form } from 'antd';
import GrowthForm from './GrowthForm';

const TableHeader = () => {
    return (
      <thead>
        <tr>
        <th>id</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Date</th>
        <th>Actions</th>
        </tr>
      </thead>
    )
  }
  const TableBody = props => {
    const rows = props.growths.map((row, index) => {
      return (
        <tr key={index}>
            <td>{index}</td>
            <td>{row.height}</td>
            <td>{row.weight}</td>
            <td>{row.date}</td>
            <td>
            <a href="#" onClick={() => props.delGrowth(props.index, index)}><Icon type="delete" style={{ color: 'red' }} /></a>
            </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

class UserGrowth extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const WrappedGrowthForm = Form.create({ name: 'register' })(GrowthForm);
        const { growths } = this.props.growths
        return (
            <div className="container">
                <div className="container table-responsive-lg">
                    <h3>
                        User Growth Data
                    </h3>
                    <table className="table"> 
                        <TableHeader />
                        <TableBody growths={growths} delGrowth={this.props.delGrowth} index={this.props.index} />
                    </table>
                </div>
                <WrappedGrowthForm growths={this.props.index} delGrowth={this.props.delGrowth} addGrowth={this.props.addGrowth} index={this.props.index}/>
            </div>
        )
    }
}

export default UserGrowth;
