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
      <div className='container-fluid py-4'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>Oferty pracy</div>
              <div className='card-body'>
                {offers.map(offer => (
                  <div className='row offer-element'>
                    <div className="col-md-5">{offer.content.title}</div>
                    <div className="col-md-4">{offer.cities}</div>
                    <div className="col-md-2">
                    <Link
                        className='btn btn-primary btn-sm mb-3'
                        to={`/offer/${offer.id}`}
                        key={offer.id}
                      >
                        Szczegóły
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OffersList
