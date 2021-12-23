import React, {useEffect} from 'react';
import axios from "axios";

const DetailProductPage = (props) => {

    useEffect(()=> {
        //axios.get(`api/product/products_by_id?id=${tourId}&type=single`)
    }, [])

    return (
        <div>
            Detailed Product Page
        </div>
    );
};

export default DetailProductPage;