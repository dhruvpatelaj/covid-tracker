import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
    //~ state to pass the data
    state = {
        data: {},
    };

    //~ gets the data and stores into data
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);

        //~ pass the data into the state
        this.setState({ data: data });
    }

    //~ renders the main app
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <h1>App.js</h1>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
