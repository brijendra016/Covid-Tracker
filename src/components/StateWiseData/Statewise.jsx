import React, { useEffect, useState } from "react";
import "./Statewise.css";

const Statewise = () => {
    const [data,setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <>
        <div className="bgbody">
        {/* <h1>INDIA COVID-19 Dashboard</h1> */}
        <div className="container-fluid">
            <div className="main-heading">
                <h1 className="mb-5 text-center text-black"><span className="font-weight-bold"> INDIA </span>COVID-19 Dashboard</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark sticky-top">
                        <tr>
                            <th> State </th>
                            <th> Confirmed </th>
                            <th> Recovered </th>
                            <th> Deaths</th>
                            <th> Active </th>
                            <th> Updated </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map ((curElem,ind) => {
                            return (
                                <tr key={ind}>
                            <td> {curElem.state} </td>
                            <td> {curElem.confirmed} </td>
                            <td> {curElem.recovered} </td>
                            <td> {curElem.deaths}</td>
                            <td> {curElem.active} </td>
                            <td> {curElem.lastupdatedtime} </td>
                        </tr>
                            )
                        })
                    }

                        {/* <tr>
                            <td> State </td>
                            <td> Confirmed </td>
                            <td> Recovered </td>
                            <td> Deaths</td>
                            <td> Active </td>
                            <td> Updated </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
};

export default Statewise;