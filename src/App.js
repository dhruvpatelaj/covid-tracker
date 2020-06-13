import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className={styles.container}>
                <h1>App.js</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
