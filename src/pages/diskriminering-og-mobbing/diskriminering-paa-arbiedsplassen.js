import React from 'react'
import { Link } from 'gatsby'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout'

const MobbingArbeid = () => (
  <Layout>
    <Grid container className="container" alignItems="stretch" justify="center" spacing={24}>
      <Grid item xs={12}>
        <Link to="/">Hjem </Link>
        <i class="fas fa-arrow-right"></i>
        <Link to="/diskriminering-og-mobbing/"> Diskriminering og mobbing </Link>
      </Grid>

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

      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h3>Bestillingsskjema</h3>
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={2}>
          <InputLabel htmlFor="problem">Problemområde  </InputLabel>
        </Grid>
        <Grid item xs={10}>
          <Select
            value={10}
            inputProps={{
              name: 'problemområde',
              id: 'problem',
            }}
          >
            <MenuItem value={10}>Diskriminering på arbiedsplassen</MenuItem>
            <MenuItem value={20}>Diskriminering på skolen/universitetet</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={2}>
          <InputLabel htmlFor="sakstype">Sakstype  </InputLabel>
        </Grid>
        <Grid item xs={10}>
          <Select
            value={10}
            inputProps={{
              name: 'sakstype',
              id: 'sakstype',
            }}
          >
            <MenuItem value={10}>Rådgivning</MenuItem>
            <MenuItem value={20}>Nytt prosjekt</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid item xs={12} sm container>
        <Grid item xs={2}>
          <InputLabel htmlFor="problem">Kostnadsramme  </InputLabel>
        </Grid>
        <Grid item xs={10}>
          1000 - 10000
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={12}>
          <InputLabel htmlFor="problem">Problembeskrivelse/hendlesen  </InputLabel>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="multiline-flexible"
            multiline
            rowsMax="4"
            fullWidth
            value="En ansatt og hans sjef møtes på sommerens firmafest. De har det hyggelig og tafser smått på hverandre. Den ansatte forteller så at han skal hjem til hans mann, og ikke ønsker å være mer på festen. Sjefen sier så at den ansatte ikke vil bli tatt opp som seniorpartner hvis han avviser hennes proposisjon.Saken ble tatt opp for forliksrådet, og den ansatte ble tilkjent hundre milliarder kroner i erstatning. Saken ble avsluttet med 1 ukes arbeid."
            margin="normal"
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Opprett din sak
        </Button>
      </Grid>


      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h3>Saksarkiv</h3>
      </Grid>

      <Grid item xs={12}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Sommerfest 20. juni 2018</p>
          </Typography>
          <Typography className="card-text" color="textSecondary">
            <Link to="/sak/sak23485">Se beskrivelse av sak</Link>
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Overgrepsfestivalen 10. mai 2000</p>
          </Typography>
          <Typography className="card-text" color="textSecondary">
            <Link to="/">Se beskrivelse av sak</Link>
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h3>Advokater/jurister spesialisert under diskriminering på arbiedsplassen</h3>
      </Grid>

      <Grid item xs={12}>
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
                    <div>Navn: Donald Duck</div>
                    <div>Kompetanseområde: Diskriminering, Diskriminering på arbiedsplassen</div>
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

export default MobbingArbeid
