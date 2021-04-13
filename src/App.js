import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import LoginPage from './LoginPage';
import { data } from './Data'


class App extends React.Component {

  constructor(props) {
    super();
    this.formValidation = this.formValidation.bind(this);
    this.state = { isLoginPage: true }
  }
  formValidation = (values) => {
    if (!(values.username === 'hruday@gmail.com' && values.password === 'hruday123')) {
      alert("Please try with correct username and password")
    }
    else {
      this.setState({ isLoginPage: false })
    }
  }

  render() {
    const { isLoginPage } = this.state;
    return <Provider store={store}>
      <div style={{ padding: 15 }}>
        {isLoginPage ?
          <LoginPage validateFun={this.formValidation} />
          :
          <div>
            <h1 style={{ textAlign: 'center', borderBottom: '6px solid green' }}>Dashboard</h1>
            <table width="100%">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
              {data.map(users =>
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.age}</td>
                  <td>{users.gender}</td>
                  <td>{users.email}</td>
                  <td>{users.phoneNo}</td>
                </tr>
              )}
            </table>
          </div>
        }
      </div>
    </Provider>
  }
}

export default App;
