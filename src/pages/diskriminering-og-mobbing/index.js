import React from 'react'
import { Link } from 'gatsby'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/layout'

const Mobbing = () => (
  <Layout>
    <Grid container className="container" spacing={24}>
      <Grid item xs={12}>
        <Link to="/">Hjem </Link>
      </Grid>
      <Grid item xs={12}><img src="/LawCommunity.png" /></Grid>
      <Grid item xs={12}>
        <div className="search-box">
          <TextField
            id="full-width"
            placeholder="Søk"
            fullWidth
            margin="normal"
          />
        </div>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h3>Saksarkiv</h3>
        </Grid>

        <Grid item xs={12}>
          <Card className="card-container">
            <Typography className="card-title" color="textSecondary">
              <p>Våre møterom er ikke tilrettelagt for rullestolbrukere</p>
            </Typography>
            <Typography className="card-text" color="textSecondary">
              <Link to="/sak/sak23485">Se beskrivelse av sak</Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card-container">
            <Typography className="card-title" color="textSecondary">
              <p>Sønnen min fikk beskjed om at han ikke var velkommen på fotballaget</p>
            </Typography>
            <Typography className="card-text" color="textSecondary">
              <Link to="/">Se beskrivelse av sak</Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={6} style={{ textAlign: 'center' }}>
        <h3>Kategorier</h3>
      </Grid>

      <Grid item xs={6} style={{ textAlign: 'center' }}>
        <h3>Advokater/jurister</h3>
      </Grid>

      <Grid item xs={6} className="menu-size">
        <Link to="/diskriminering-og-mobbing/diskriminering-paa-arbiedsplassen/">
          <Card className="card-container">
            <CardContent>
              <Typography className="card-title" color="textSecondary">
                <i className="card-icons fas fa-4x fa-building"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Diskriminering på arbiedsplassen
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6} className="menu-size">
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={10}>
                    <div><strong>Ansvarlig for Diskriminering</strong></div>
                    <div>Navn: Peter Hauglie</div>
                    <div>Kompetanseområde: Diskriminering, Diskriminering på arbiedsplassen</div>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6} className="menu-size">
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
      <Grid item xs={6} className="menu-size">
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={8}>
                    <div>Navn: Jan Berntsen</div>
                    <div>Kompetanseområde: Diskriminering</div>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6} className="menu-size">
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container">
            <CardContent>
              <Typography className="card-title" color="textSecondary">
                <i className="card-icons fas fa-4x fa-building"></i>
              </Typography>
              <Typography className="card-text" color="textSecondary">
                Mobbing på arbiedsplassen
          </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6} className="menu-size">
        <Link to="/diskriminering-og-mobbing/">
          <Card className="card-container card-lawer">
            <CardContent>
              <Typography className="card-text" color="textSecondary">
                <Grid item xs={12} sm container>
                  <Grid item xs={2}>
                    <i class="fas fa-4x fa-user"></i>
                  </Grid>
                  <Grid item xs={8}>
                    <div>Navn: Frank Ola Nilsen</div>
                    <div>Kompetanseområde: Diskriminering på skolen/univeristet</div>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={6} className="menu-size">
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
    </Grid>
  </Layout>
)

export default Mobbing
