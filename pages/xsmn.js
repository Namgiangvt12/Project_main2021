
import React from "react"
import Layout from "../components/layout"
import Kqxsmn from "../components/kqxsmn"
import Container from 'react-bootstrap/Container'

export const getServerSideProps = async () => {
    const res = await fetch("https://s1.ketquaveso.com/ttkq/json_kqmt/");
    const data = await res.json();
    return {
        props: {
            xsmn:data,
        },
    }
}
const xsmn = ({xsmn}) => {
    return(

        <Layout title = "XSMN SXMN KQXSMN Kết quả xổ số miền nam chính xác nhất" >
            <Container>
                <Kqxsmn xsmn = {xsmn}></Kqxsmn>
            </Container>       
        </Layout>
    )
};
export default xsmn;
 