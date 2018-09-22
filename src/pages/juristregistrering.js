import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Paper, Button, TextField, Grid } from '@material-ui/core'

const style = {
    button: {
        margin: '1em',
    },
    textfield: {
        width: '80%',
    }
}

class JuristRegistreringPAge extends React.Component {
    state = {
        url: ""
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <Layout>
                <Grid container className="container" justify="center" spacing={24}>
                    <Grid item xs={12}>
                        <Link to="/">Hjem </Link>
                        <i class="fas fa-arrow-right"></i>
                        <Link to="/juristregistrering/"> Juristregistrering </Link>
                    </Grid>
                    <Paper className="register-jurist-paper">
                        <h1>Meld deg inn som jurist <i className="fas fa-gavel"></i></h1>

                        <div>Legg til LinkedIn profilen din her og opprett bruker
                        </div>
                        <form>
                            <TextField
                                id="linkedin-url"
                                label=" Url til profil:"
                                value={this.state.url}
                                onChange={this.handleChange('url')}
                                margin="normal"
                                style={style.textfield}
                            />
                        <div>
                        <Button type="submit" variant="contained" color="primary" style={style.button}>
                            Legg til
                        </Button>
                        </div>

                        </form>
                    </Paper>
                </Grid>
            </Layout>)
}    }

export default JuristRegistreringPAge
