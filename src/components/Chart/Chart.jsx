import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    //! async use effect does not exist. effect callbacks are SYNCHRONOUS
    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    const lineChart = (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map((data) => data.confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        data: dailyData.map((data) => data.deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true,
                    },
                ],
            }}
        />
    );

    return <div> {lineChart} </div>;
};

export default Chart;
