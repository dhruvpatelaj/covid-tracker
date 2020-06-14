import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    //~ [num infected] [num recovered] [num death]
    //~ materialUI is basically bootstrap for REACT
    console.log(confirmed);
    if (!confirmed) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">
                            Number of Active Cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">RealData </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">
                            Number of Recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">RealData </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">
                            Number of Deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
