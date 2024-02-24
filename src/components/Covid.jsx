import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
    // console.log("hii");
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(res);
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <section className="mainbody">
        <h2>🔴LIVE</h2>
        <h1>COVID-19 TRACKER</h1>
        <ul>
            <li className="card country">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> OUR </span> COUNTY</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card recovered">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> RECOVERED</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card confirmed">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> CONFIRMED</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card deaths">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> DEATHS</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card active">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> ACTIVE</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card updated">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> LAST </span> UPDATED</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
        </>
    );
};

export default Covid;