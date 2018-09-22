import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/layout'

const Mobbedommen = () => (
    <Layout>
        <Grid container className="container" spacing={24}>
            <Grid item xs={12}>
                <h1>Sommerfest 20. juni 2018</h1>
                <h2>
                    Vil du være med meg hjem i natt? Det ville hvertfall ikke denne ansatte.
                </h2>
                <p>
                    En ansatt og hans sjef møtes på sommerens firmafest. De har
                    det hyggelig og tafser smått på hverandre. Den ansatte
                    forteller så at han skal hjem til hans mann, og ikke ønsker å
                    være mer på festen. Sjefen sier så at den ansatte ikke vil
                    bli tatt opp som seniorpartner hvis han avviser hennes
                    proposisjon.
                </p>
                <p>
                    Saken ble tatt opp for forliksrådet, og den ansatte ble
                    tilkjent hundre milliarder kroner i erstatning. Saken ble
                    avsluttet med 1 ukes arbeid.
                </p>

                <h3>
                    Denne saken ble løst av Jurist Vroldal.
                </h3>
                <p>
                    Se Vrodals profil <Link>her</Link>
                </p>
            </Grid>
        </Grid>
    </Layout>
)

export default Mobbedommen;
