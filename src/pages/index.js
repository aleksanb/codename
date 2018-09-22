import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
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
      <Grid container className="container" spacing={24}>
        <Grid item xs={12}>
          <div className="search-box">
            <TextField
              id="full-width"
              placeholder="Søk"
              fullWidth
              margin="normal"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Arv
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Barn og familie
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Bolig og hytte
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Jobb
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Naboer
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Helse
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Forsikring
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/diskriminering-og-mobbing/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-gavel"></i>
                </Typography>
                <Typography className="card-text" color="textSecondary">
                  Diskriminering og mobbing
              </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  </MuiThemeProvider>
)

export default IndexPage
