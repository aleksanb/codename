import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const style = {
    button: {
        margin: '1em',
    },
    title: {
        textAlign: 'center',
        paddingBottom: '-10em',
    },
    paper: {
        padding: '2em',
        margin: '1em',
    },
    container: {
        paddingTop: '-5em',
    },
    chipleft: {
        margin: '1em',
        padding: '1em',
    },
    chipright: {
        margin: '1em',
        padding: '1em',
        backgroundColor: '#A6A8ED',
    },
    div: {
        width: '100%'
    }
};

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class DinSakPage extends React.Component {
    state = {
        taskschecked: [1, 3],
        docschecked: [1],
        tasks: ["Konsultasjon", "Korrespondanse med motparten", "Rettskildesøk", "Korrespondanse med arbeidsgiver", "Tilbakemelding", "Oppfølgningssamtale"],
        documents: ["Tekstmeldinger til og fra sjefen", "Referat av samtaler", "Liste på eventuelle vitner"],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Layout>
                <Grid container className="container" justify="center" spacing={0} direction="row">
                    <Grid item xs={10}>
                        <Link to="/">Hjem </Link>
                        <i className="fas fa-arrow-right"></i>
                        <Link to="/sak23485-prosjektrom/"> Prosjektrom sak 23485</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={style.title}>Prosjekt 23485</h2>
                    </Grid>

                    <Grid item xs={12} container>
                        <Grid item xs={7}>
                            <Paper style={style.paper}>
                                <h2>Oppgaveliste</h2>
                                <List>
                                    {[0, 1, 2, 3, 4, 5].map(value => (
                                        <ListItem key={value} dense button className={classes.listItem}>
                                            <ListItemText primary={`${this.state.tasks[value]}`} />
                                            <ListItemSecondaryAction>
                                                <Checkbox
                                                    onChange={this.handleToggle(value)}
                                                    checked={this.state.taskschecked.indexOf(value) !== -1}
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                            <Paper style={style.paper}>
                                <h2>Dokumenter</h2>
                                <List>
                                    {[0, 1, 2].map(value => (
                                        <ListItem key={value} dense button className={classes.listItem}>
                                            <ListItemText primary={`${this.state.documents[value]}`} />
                                            <ListItemSecondaryAction>
                                                <Checkbox
                                                    onChange={this.handleToggle(value)}
                                                    checked={this.state.docschecked.indexOf(value) !== -1}
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container className="container" direction="row" >
                                <Grid item xs={12}>
                                    <h2>Din chat med Frank</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipright} label="Hei Frank! Takk for at du tar saken min:)" /></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipleft} label="Hei:) Bare hyggelig, glad jeg kan hjelpe" /></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipleft} label={"Har du mulighet til å laste opp en liste over eventuelle vitner?"} /></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipright} label="Ja, det kan jeg fikse!" /></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipright} label="Sånn, da er den lastet opp" /></div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div><Chip style={style.chipleft} label="Supert!" /></div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>)
    }
}

DinSakPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DinSakPage);