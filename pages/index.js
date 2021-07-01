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
            <section className = "content main clearfix">
                <div className = "col-l" >
                          {
                                dai.map((item)=>{
                                  return (

                                        <div  className="content-right">
                                        <div className="title-r"key={item.Mien.toString()}>{item.Mien} </div>
                                             <ul className="content-item-menu">
                                              {item.CacDai.map((tenDai) =>{ return ( <li className ="bullet" key={tenDai.id.toString()}><a className="dai_link" href={ "/"+tenDai.url}>{tenDai.name}</a></li>)})}
                                              </ul>
                                        
                                      </div>
                                    
                                  )
                                })
                              }
                          </div>
                <div className = "col-center">
                  <Kqxsmn xsmn = {xsmn}></Kqxsmn></div>
                <div className = "col-right"> {
                                dai.map((item)=>{
                                  return (

                                        <div  className="content-right">
                                        <div className="title-r"key={item.Mien.toString()}>{item.Mien} </div>
                                             <ul className="content-item-menu">
                                              {item.CacDai.map((tenDai) =>{ return ( <li className ="bullet" key={tenDai.id.toString()}><a className="dai_link" href={ "/"+tenDai.url}>{tenDai.name}</a></li>)})}
                                              </ul>
                                        
                                      </div>
                                    
                                  )
                                })
                              }
                </div>
            </section>       
        </Layout>
    )
};
export default xsmn;

