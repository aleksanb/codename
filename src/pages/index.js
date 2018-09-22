import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <div className="row search-box">
        <div className="form-group">
          <div className="col-12">
            <input type="search" class="form-control" id="searchBox" placeholder="Fritt søk" />
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Arv</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Barn og familie</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Bolig og hytte</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Jobb</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Naboer</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Helse</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Forsikring</span>
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>
          <span className="main-category">Diskriminering og mobbing</span>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
