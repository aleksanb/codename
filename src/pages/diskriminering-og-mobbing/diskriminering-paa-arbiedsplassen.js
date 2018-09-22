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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Layout from '../../components/layout'

const MobbingArbeid = () => (
  <Layout>
    <Grid container className="container" alignItems="stretch" justify="center" spacing={12}>
      <Grid item xs={12}>
        <Link to="/">Hjem </Link>
        <i class="fas fa-arrow-right"></i>
        <Link to="/diskriminering-og-mobbing/"> Diskriminering og mobbing </Link>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h3>Bestillingsskjema</h3>
      </Grid>

      <Grid item xs={9} container>
        <Grid item xs={12}>
          <h4>Fyll ut om hendlesen </h4>
        </Grid>

        <Grid item xs={12} container className="form-input">
          <Grid item xs={2}>
            <InputLabel htmlFor="problem">Problemområde</InputLabel>
          </Grid>
          <Grid item xs={6}>
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

        <Grid item xs={12} container className="form-input">
          <Grid item xs={2}>
            <InputLabel htmlFor="sakstype">Sakstype</InputLabel>
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

        <Grid item xs={12} sm container className="form-input">
          <Grid item xs={2}>
            <InputLabel htmlFor="problem">Kostnadsramme</InputLabel>
          </Grid>
          <Grid item xs={10}>
            1000 kr - 10000 kr
        </Grid>
        </Grid>

        <Grid item xs={12} container className="form-input">
          <Grid item xs={12} className="decribe-input">
            <InputLabel htmlFor="problem">Problembeskrivelse/hendlesen</InputLabel>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="multiline-flexible"
              multiline
              fullWidth
              value="En ansatt og hans sjef møtes på sommerens firmafest. De har det hyggelig og tafser smått på hverandre. Den ansatte forteller så at han skal hjem til hans mann, og ikke ønsker å være mer på festen. Sjefen sier så at den ansatte ikke vil bli tatt opp som seniorpartner hvis han avviser hennes proposisjon.Saken ble tatt opp for forliksrådet, og den ansatte ble tilkjent hundre milliarder kroner i erstatning. Saken ble avsluttet med 1 ukes arbeid."
              margin="normal"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3} container>
        <Grid item xs={12}>
          <h4>Valg av advokat/jurist</h4>
        </Grid>

        <Grid item xs={12}>
          <RadioGroup
            name="advokater"
            value="all"
          >
            <FormControlLabel value="spesial" control={<Radio />} label="En spesiell jurist" />
            <FormControlLabel value="chosen" control={<Radio />} label="Mine utvalgte jurister" />
            <FormControlLabel value="criteria" control={<Radio />} label="Mine kriterier" />
            <FormControlLabel value="all" control={<Radio />} label="Alle" />
          </RadioGroup>
        </Grid>

      </Grid>

      <Grid item xs={12}>
        <Link to="/din-sak-23485-tilbudsside/">
          <Button variant="contained" color="primary">
            Opprett din sak
        </Button>
        </Link>
      </Grid>


      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h3>Saksarkiv</h3>
      </Grid>

      <Grid item xs={12}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Tilretteleggelse for rullestolbrukere</p>
          </Typography>
          <Typography className="card-text" color="textSecondary">
            <Link to="/sak/sak23485">Se beskrivelse av sak</Link>
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className="card-container">
          <Typography className="card-title" color="textSecondary">
            <p>Kjønnsdiskriminering ved ansettelse</p>
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
                    <div>Navn: Peter Hauglie</div>
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
