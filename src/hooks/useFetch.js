import { useEffect, useState } from "react";

let useFetch = (url, method = "GET") => {

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [postData, setPostData] = useState(null);

    useEffect(() => {

        // console.log(options);

        let abortController = new AbortController();
        let signal = abortController.signal;

        let options = {
            signal,
            method
        }

        let fetchData = () => {
            fetch(url, options)
                .then(res => {
                    if (!res.ok) {
                        setLoading(false);
                        throw Error('something went wrong!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(e => {
                    setError(e.message);
                })
        }

        setLoading(true);
        if (method === "POST" && postData) {
            options = {
                ...options,
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData)
            }
            fetchData();
        }

        if(method === "GET") {
            fetchData();
        }


        // cleanup function 
        return () => {
            abortController.abort();
        }
    }, [url, postData]);
    return { setPostData, data, loading, error };
}

export default useFetch;