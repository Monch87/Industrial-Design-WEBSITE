import { Component } from 'react'
import './App.css'
import Routes from './routes/Routes'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'
import AuthService from '../service/auth.service'


class App extends Component {

constructor(){
  super()
  this.state={
    loggedUser:undefined /// aqui tengo que hacer algo
    
  }
  this.authService = new AuthService()
}

appUser(loggedUser){
  this.setState({ loggedUser }, () => console.log('User modify:', this.state.loggedUser))
}


fetchUser(){
  this.authService
  .isLoggedIn()
  .then(response => this.appUser(response.data))
  .catch(() => this.appUser(undefined))
}


componentDidMount(){
  this.fetchUser()
}


render (){
  return (
    <>
      <Navigation appUser={user => this.appUser(user)} loggedUser={this.state.loggedUser} />
      <main>
        <Routes appUser={user => this.appUser(user)} loggedUser={this.state.loggedUser} />
      </main>
      <Footer />
    </>
  )
}
}

export default App;
