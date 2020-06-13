import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//~ using async with await
export const fetchData = async () => {
    try {
        //~ gets the data using axios and specifies those four
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(url);

        //~ returns those four values
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {}
};
