import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: {},
    }
  }

  componentDidMount () {
    const pageId = this.props.match.params.id

    axios.get(`/api/page/${pageId}`).then(response => {
        this.setState({
          page: response.data,
        })
    }).catch(function (error) {
      return (
        <Redirect to="/"/>
      )
    })
  }

  render () {

    const { page } = this.state

    return (

      <div className='container-fluid py-4'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h1>{page.title}</h1>
              </div>
              <div className='card-body'>
                <div className="row">
                  <div className='col-md-12' dangerouslySetInnerHTML={{__html: page.content}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page
