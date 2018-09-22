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
          <i className="main-icons fas fa-gavel"></i>Arv
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>Skatt
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>Arv
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>Skatt
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>Arv
        </div>
        <div className="col-xs-12 col-sm-6">
          <i className="main-icons fas fa-gavel"></i>ƒSkatt
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
