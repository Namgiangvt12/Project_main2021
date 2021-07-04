import Layout from "../components/layout"
import Kqxsmn from '../components/kqxsmn';
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import React from "react";
export const getServerSideProps = async () => {
    const res = await fetch("https://s1.ketquaveso.com/ttkq/json_kqmn/");
    const data = await res.json();
    return {
        props: {
            xsmn:data,
        },
    }
}
const xsmn = ({xsmn}) => {
    return(
        <Layout children = {<Kqxsmn xsmn = {xsmn}></Kqxsmn>} title = {"XSMN SXMN KQXSMN Kết quả xổ số miền nam chính xác nhất"} >
        </Layout>
    )
};
export default xsmn;

