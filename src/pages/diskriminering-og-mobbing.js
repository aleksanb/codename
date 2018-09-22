import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Mobbing = () => (
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
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Arv</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Barn og familie</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Bolig og hytte</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Jobb</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Naboer</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Helse</span>
          </div>
        </Link>
        <Link to="/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Forsikring</span>
          </div>
        </Link>
        <Link to="/diskriminering-og-mobbing/">
          <div className="col-xs-12 col-sm-6">
            <i className="under-icons fas fa-gavel"></i>
            <span className="under-category">Diskriminering og mobbing</span>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Mobbing
