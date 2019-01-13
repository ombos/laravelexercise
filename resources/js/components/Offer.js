import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Offer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offer: {},
      content: {},
    }
  }

  componentDidMount () {
    const offerId = this.props.match.params.id

    axios.get(`/api/offer/${offerId}`).then(response => {
      this.setState({
        offer: response.data,
        content: response.data.content
      })
    })
  }

  render () {
    const { offer, content } = this.state

    return (

      <div className='container-fluid py-4'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h1>{content.title}</h1>
              </div>
              <div className='card-body'>
                <div className="row">
                  <div className='col-md-8' dangerouslySetInnerHTML={{__html: content.content}}></div>
                  <div className='col-md-4'>
                    <div className='col-md-12'>
                      <a href={`${content.apply_url}`} target="_blank" className='btn btn-primary btn-lg btn-block mb-5'>Aplikuj</a>
                    </div>
                    <div className='col-md-12 mb-3'>Lokalizacja: <strong>{offer.cities}</strong></div>
                    <div className='col-md-12 mb-3'>Oferta ważna do: <strong>{offer.date_end}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer
