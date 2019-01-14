import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoadingScreen from 'react-loading-screen'
import Header from './Header'
import Page from './Page'
import OffersList from './OffersList'
import Offer from './Offer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 1500);
  }

  render () {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <LoadingScreen
            loading={this.state.isLoading}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc='/img/mbe_logo_preloader.png'
            text='MBE Group - oferty pracy'
          >
          </LoadingScreen>
          <Switch>
            <Route exact path='/' component={OffersList} />
            <Route path='/offer/:id' component={Offer} />
            <Route path='/page/:id' component={Page} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
