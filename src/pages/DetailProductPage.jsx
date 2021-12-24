import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../contexts/AppContext";

const DetailProductPage = () => {
    const params = useParams()
    const {tourId} = params
    const {tours} = useContext(AppContext)
    const [tour, setTour] = useState()
    console.log("tourId", tourId)
    useEffect(() => {
        const res = tours.find((item) => item.id == tourId)
        if (res) {
            setTour(res)
        }
    }, [])

    if (!tour) {
        return null
    }

    return (
        <div>
            Detailed Product Page Id: {tourId}
            {JSON.stringify(tour)}
        </div>
    );
};

export default DetailProductPage;
