import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'node-fetch';
import * as ph from './modules/placeholder';

// class App extends React.Component{
//     render(){
//         return(
//             <div>Hello World</div>
//         );
//     }
// }
class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        this.tick();
    }

    tick() {
        ph.users().then((users) => {
            this.setState({
                users: users
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {this.state.users.map((user, index) => {
                    return <li key={index}>{user.name}</li>;
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <UserList />,
    document.getElementById('content')
);
  
// ReactDOM.render(<App />, document.getElementById("content"))