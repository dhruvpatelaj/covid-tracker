import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
    //~ state to pass the data
    state = {
        data: {},
        country: "",
    };

    //~ gets the data and stores into data
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);

        //~ pass the data into the state
        this.setState({ data: data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    };

    //~ renders the main app
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
