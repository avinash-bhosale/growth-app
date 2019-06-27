import React from 'react';
import ReactDOM from 'react-dom';
import {
  Form,
} from 'antd';
import moment from 'moment';
import './App.css';
import Users from './Users';
import RegistrationForm from './UserRegistration';
import UserGrowth from './UserGrowths';

class App extends React.Component {
    state = {
        users: [
            {
                name: 'avinash',
                gender: 'male',
                dob: '1995-11-07',
                growths: [
                    {
                        height: 120,
                        weight: 50,
                        date: '1995-11-07',
                    },
                    {
                        height: 120,
                        weight: 50,
                        date: '1995-11-07',
                    }
                ]
            },
            {
                name: 'ajay',
                gender: 'male',
                dob: '1992-2-3',
                growths: [
                    {
                        height: 169,
                        weight: 120,
                        date: '2009-11-07',
                    },
                    {
                        height: 170,
                        weight: 40,
                        date: '2000-11-07',
                    }
                ]
            }
        ],
        updateUser: null,
        index:null
    }
    
    addUser = user => {
        if(user.edit){
            var index = user.index;
            var user_data = this.state.users;
            user_data[index].name = user.name;
            user_data[index].gender = user.gender;
            user_data[index].dob = moment(user.dob).format('YYYY-MM-DD');
            this.setState({        
                users: user_data
            })
        }else{
            const new_user = {'name': user.name, 'gender': user.gender, 'dob': moment(user.dob).format('YYYY-MM-DD'), 'growths': []}
            this.setState({
                users: [...this.state.users, new_user]
            });
        }
    }
    updateUserFun = index => {
        this.setState({
            updateUser: this.state.users[index],
            index: index
        })
    }
    delUser = (index) => {
        const { users } = this.state;
        this.setState({
            users: users.filter((user, i) => {
                return i !== index
            }),
        })
        ReactDOM.render(<p/>, document.getElementById('growth'));
    }
    delGrowth = (user_index, index) => {
        var user_data = this.state.users;
        var growth_data = user_data[user_index].growths;
        console.log(growth_data);
        var data = {growth_data: growth_data.filter((user, i) => {
            return i !== index
        }),}
        console.log(data);
        user_data[index].growths = data.growth_data;
        this.setState({        
            users: user_data
        })
        this.displayGrowth(user_index);
    }
    addGrowthForm = (index, growth) => {
        const new_growth = {'date': moment(growth.date).format('YYYY-MM-DD'),  'height': growth.height, 'weight': growth.weight};
        var user_data = this.state.users;
        user_data[index].growths.push(new_growth);
        this.setState({        
            users: user_data
        })
        this.displayGrowth(index=index);
    }
    displayGrowth = (index) => {
        ReactDOM.render(<UserGrowth  index={index} addGrowth={this.addGrowthForm} growths={this.state.users[index]} delGrowth={this.delGrowth}/>, document.getElementById('growth'));
    }
    render(){
        const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
        return (
            <div className="container">
                <h3 >Growth Tracker App</h3>
                <div className="row"><WrappedRegistrationForm addUser={this.addUser} userData={this.state.updateUser} index={this.state.index}/></div>
                <div className="row"><Users users={this.state.users} updateUser={this.updateUserFun} delUser={this.delUser} displayGrowth={this.displayGrowth}/></div>   
                <div className="row" id="growth">
                </div>
            </div>
        );
    }
}

export default App;
