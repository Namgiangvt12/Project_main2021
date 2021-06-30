import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import Kqxsmn from '../components/kqxsmn';
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import {dai} from "../components/dai"
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
        <Layout title = {"XSMN SXMN KQXSMN Kết quả xổ số miền nam chính xác nhất"} >
            <Container className = "layout">
            <div >
                          {
                            
                                dai.map((item)=>{
                                  return (
                                    <li  className = "px-md-0 d-none d-lg-block col-lg-2" key={item.Mien.toString()}>

                                        <div className="side-item">
                                             <ul className="side-title">{item.Mien}</ul> 
                                              {item.CacDai.map((tenDai) =>{ return ( <div key={tenDai.id.toString()}><a className="dai_link" href={ "/"+tenDai.url}>{tenDai.name}</a></div>)})}
                                        </div>
                                    </li>
                                  )
                                })
                              }
                          </div>
                <div><Kqxsmn xsmn = {xsmn}>asdasd</Kqxsmn></div>
                <div>{
                            
                            dai.map((item)=>{
                              return (
                                <li  className = "px-md-0 d-none d-lg-block col-lg-2" key={item.Mien.toString()}>

                                    <div className="side-item">
                                         <ul className="side-title">{item.Mien}</ul> 
                                          {item.CacDai.map((tenDai) =>{ return ( <div key={tenDai.id.toString()}><a className="dai_link" href={ "/"+tenDai.url}>{tenDai.name}</a></div>)})}
                                    </div>
                                </li>
                              )
                            })
                          }</div>
                    
            </Container>       
        </Layout>
    )
};
export default xsmn;

