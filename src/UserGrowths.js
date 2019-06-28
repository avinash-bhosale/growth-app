import React from 'react';
import { Table, Icon, Form } from 'antd';
import GrowthForm from './GrowthForm';

const TableBody = props => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Height',
            dataIndex: 'height',
            key: 'height',
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Actions',
            dataIndex: 'Actions',
            key: 'Actions',
        },
    ];
    const data = [];
    props.growths.map((row, index) => {
        data.push(
            {
                Actions: <a href="#" onClick={() => props.delGrowth(props.index, index)}><Icon type="delete" style={{ color: 'red' }} /></a>,
                key: "'"+index+"'",
                id: index, 
                height: row.height,
                weight: row.weight,
                date: row.date,
            }
        )
    });
    return <Table dataSource={data} columns={columns} />;
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
                        <TableBody growths={growths} delGrowth={this.props.delGrowth} index={this.props.index} />
                    </table>
                </div>
                <WrappedGrowthForm growths={this.props.index} delGrowth={this.props.delGrowth} addGrowth={this.props.addGrowth} index={this.props.index}/>
            </div>
        )
    }
}

export default UserGrowth;
