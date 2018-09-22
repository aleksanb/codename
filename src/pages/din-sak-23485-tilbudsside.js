import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Paper, Button, Grid, Chip, Avatar } from '@material-ui/core'

const style = {
    paper: {
        padding: '2em',
        margin: '1em',
    },
    chip: {
        marginRight: '1em',
    },
    title: {
        textAlign: 'center',
    }
}

class DinSakPage extends React.Component {


    render() {
        return (
            <Layout>
                <Grid container className="container" justify="center" spacing={24}>
                    <Grid item xs={12}>
                        <Link to="/">Hjem </Link>
                        <i class="fas fa-arrow-right"></i>
                        <Link to="/din-sak-23485/"> Din sak 23485</Link>
                    </Grid>
                    <Grid alignItems="center" justify="center" item xs={6}>
                        <h2 style={style.title}>Din sak 23485</h2>
                        <Paper style={style.paper}>
                            <h2>Sommerfest 20. juni 2018</h2>
                            <p>
                                Sjefen min og jeg møttes på sommerens firmafest.
                                Vi hadde det hyggelig og tafset litt smått på
                                hverandre. Jegfortalte så at jeg måtte hjem til
                                min mann, og ønsket ikke lenger å være mer på festen.
                                Sjefen min sa så at jeg ikke vil bli tatt opp som
                                seniorpartner hvis jeg avviste hennes proposisjon.
                                Hva kan jeg gjøre?
                            </p>
                            <Chip style={style.chip} label="Diskriminering"/>
                            <Chip style={style.chip} label="Mobbing"/>
                            <Chip style={style.chip} label="Ansettelse"/>
                        </Paper>
                    </Grid>
                    <Grid alignContent='center' justify="center" item xs={6}>
                        <h2 style={style.title}>Tilbud</h2>
                        <Paper style={style.paper}>
                            <h2>Tilbud fra Jurist Juristesen</h2>
                            <Grid direction="row">
                                <p>
                                    Hei, jeg ønsker å ta din sak. Jeg har mye erfaring med saker som dette fra tidligere.
                                </p>
                                <Button variant="contained" color="primary">Godta tilbud</Button>
                            </Grid>
                        </Paper>
                        <Paper style={style.paper}>
                            <h2>Tilbud fra Justisia Juss</h2>
                            <p>
                                Dette er et fagfelt som jeg brenner for og jeg ønsker derfor å gi deg et ekstra godt tilbud!
                            </p>
                            <Button variant="contained" color="primary">Godta tilbud</Button>
                        </Paper>
                        <Paper style={style.paper}>
                            <h2>Tilbud fra Domrian Dommsen</h2>
                            <p>
                                Heisann. Jeg har lest igjennom saken din og ønsker å gi deg et tilbud.
                            </p>
                            <Button variant="contained" color="primary">Godta tilbud</Button>
                        </Paper>
                    </Grid>


                </Grid>
            </Layout>)
}    }

export default DinSakPage
