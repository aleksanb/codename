import React from 'react'
import { Link } from 'gatsby'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout'

const Mobbing = () => (
  <Layout>
    <Grid container className="container" alignItems="stretch" justify="center" spacing={24}>
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
        <Link to="/sak/mobbedommen/">
          <Card className="card-container">
            <CardContent>
              <Typography className="card-title" color="textSecondary">
                <i className="card-icons fas fa-4x fa-gavel"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Diskriminering på arbiedsplassen
          </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={10}>
                    <div>Navn: Donald Duck</div>
                    <div>Kompetanseområde: Diskriminering, Diskriminering på arbiedsplassen</div>
                  </Grid>
                </Grid>
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
                <i className="card-icons fas fa-4x fa-user-graduate"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Diskriminering på skolen/univeristet
          </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={8}>
                    <div>Navn: Donald Duck</div>
                    <div>Kompetanseområde: Diskriminering</div>
                  </Grid>
                </Grid>
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
                <i className="card-icons fas fa-4x fa-gavel"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Mobbing på arbiedsplassen
          </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={8}>
                    <div>Navn: Donald Duck</div>
                    <div>Kompetanseområde: Diskriminering på skolen/univeristet</div>
                  </Grid>
                </Grid>
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
                <i className="card-icons fas fa-4x fa-comments"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Diverse
          </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={8}>
                    <div>Navn: Donald Duck</div>
                    <div>Kompetanseområde: Diskriminering på arbiedsplassen</div>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  </Layout>
)

export default Mobbing
