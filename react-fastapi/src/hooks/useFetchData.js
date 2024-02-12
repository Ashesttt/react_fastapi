import { useState, useEffect } from 'react';
import axios from 'axios';


function useFetchData(path) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/${path}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [path]);  // 注意这里，当path改变时，useEffect会重新执行
    return [data, setData];
}
export default useFetchData;
