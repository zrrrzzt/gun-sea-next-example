import React from 'react'
import Layout from '../components/Layout'
import Gun from 'gun/gun'
import SEA from 'sea-canon'
Gun.SEA = SEA
const gun = new Gun('https://gunjs.herokuapp.com/gun')
const user = gun.user && gun.user()

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0,
      loggedIn: false
    }
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
    this.updateNumber = this.updateNumber.bind(this)
    this.doLogin = this.doLogin.bind(this)
    this.login = this.login.bind(this)
  }

  async componentDidMount () {
    gun.on('auth', () => {
      this.updateNumber()
    })
  }

  addOne () {
    const number = this.state.number || 0
    const newNumber = number + 1
    user.get('list').put({number: newNumber})
  }

  subtractOne () {
    const number = this.state.number || 0
    const newNumber = number - 1
    user.get('list').put({number: newNumber})
  }

  updateNumber () {
    user.get('list').val(data => {
      this.setState({number: data && data.number ? data.number : 0})
    })
  }

  doLogin (e) {
    const userField = document.getElementById('userField')
    const passField = document.getElementById('passField')
    user.auth(userField.value, passField.value, data => {
      if (data.err && /No user/.test(data.err) === true) {
        console.log('creating user')
        user.create(userField.value, passField.value, ack => {
          if (ack.err) {
            return
          }
          this.login({user: userField.value, pass: passField.value})
        })
      } else {
        this.setState({loggedIn: true})
        gun.on('auth', () => {
          this.updateNumber()
        })
      }
    })
  }

  login (data) {
    console.log('login...')
    user.auth(data.user, data.pass, () => {
      this.setState({loggedIn: true})
      gun.on('auth', () => {
        this.updateNumber()
      })
    })
  }

  render () {
    return (
      <Layout>
        <div>
          <h1>gun Next.js example</h1>
          <h2>{this.state.number}</h2>
          {this.state.loggedIn === true
          ? <div>
            <button onClick={this.subtractOne}>Subtract 1</button>
            <button onClick={this.addOne}>Add 1</button>
          </div>
          : <div>
              <input type='text' id='userField' placeholder='Username' /><br />
              <input type='password' id='passField' placeholder='Password' /><br />
              <button onClick={this.doLogin}>Login</button>
          </div>
          }
        </div>
        <style jsx>
          {`
            h2 {
              color: red;
              font-size: 48px;
              text-align: center;
            }
            a, a:visited {
              color: white;
            }
            button {
              background-color: white;
              border-radius: 2px;
              color: black;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              width: 150px;
              margin: 10px;
              cursor: pointer;
            }
            button:focus {
              outline:0;
            }
            
            button:active {
              outline: 0;
            }
          `}
        </style>
      </Layout>
    )
  }
}
