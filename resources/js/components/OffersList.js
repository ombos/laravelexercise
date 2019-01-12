import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OffersList extends Component {
  constructor () {
    super()
    this.state = {
      offers: []
    }
  }

  componentDidMount () {
    axios.get('/api/offers').then(response => {
      this.setState({
        offers: response.data
      })
    })
  }

  render () {
    const { offers } = this.state
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>Oferty pracy</div>
              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                  Create new project
                </Link>
                <ul className='list-group list-group-flush'>
                  {offers.map(offer => (
                    <Link
                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                      to={`/${offer.id}`}
                      key={offer.id}
                    >
                      test test test nazwa oferty tytuł czy coś
                      <span className='badge badge-primary badge-pill'>
                        jakieś podsumowanie
                      </span>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsList
