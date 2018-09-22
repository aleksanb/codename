import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const IndexPage = () => (
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

        <Grid item xs={12} style={{textAlign: 'center'}}>
        <h3>Saksarkiv</h3>
      </Grid>
      <Grid item xs={6}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Naboen felte treet som jeg mener er på min eiendom</p>
          </Typography>
          <Typography className="card-text" color="textSecondary">
            <Link to="/sak/sak23485">Se beskrivelse av sak</Link>
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Hjelp til utforming av testamente</p>
          </Typography>
          <Typography className="card-text" color="textSecondary">
            <Link to="/">Se beskrivelse av sak</Link>
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} style={{textAlign: 'center'}}>
        <h3>Kategorier</h3>
      </Grid>

        <Grid item xs={6}>
          <Link to="/">
            <Card className="card-container">
              <CardContent>
                <Typography className="card-title" color="textSecondary">
                  <i className="card-icons fas fa-4x fa-hand-holding-usd"></i>
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
                  <i className="card-icons fas fa-4x fa-child"></i>
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
                  <i className="card-icons fas fa-4x fa-home"></i>
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
                  <i className="card-icons fas fa-4x fa-briefcase"></i>
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
                  <i className="card-icons fas fa-4x fa-user-friends"></i>
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
                  <i className="card-icons fas fa-4x fa-heartbeat"></i>
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
                  <i className="card-icons fas fa-4x fa-file-invoice-dollar"></i>
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
                  <i className="card-icons fas fa-4x fa-frown"></i>
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
)

export default IndexPage
