import React from 'react'
import Layout from '../components/layout'
import { createMuiTheme, MuiThemeProvider,} from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
    palette: {
        primary1Color: '#22647D',
    },
    appBar: {
        height: 57,
    },
    drawer: {
        width: 230,
        color: '#1a4d60',
    },
    raisedButton: {
        primaryColor: '#e64b89',
    },
});

const IndexPage = () => (
    <MuiThemeProvider theme={muiTheme}>
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
    </MuiThemeProvider>
)

export default IndexPage
