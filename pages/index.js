import Layout from "../components/layout"
import Kqxsmn from '../components/kqxsmn';
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import {dai} from "../components/dai"
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
var gettoday = new Date()
let temP = ['']
function checkDate(idDai)
{
    switch(gettoday.getDay()) {
        case 1:
            if(idDai == "HN"|| idDai == "HCM"|| idDai == "CM" || idDai == "DT" || idDai == "TTH" || idDai == "PY" )
            {
                temP = ['bullet1']
            }
            else temP = ['bullet']
            break;       
        case 2:
            if(idDai == "QNi"|| idDai == "VT"|| idDai == "BT" || idDai == "BL" || idDai == "DLk" || idDai == "QNa" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
          break; 
        case 3:
            if(idDai == "BN"|| idDai == "DNai"|| idDai == "CT" || idDai == "ST" || idDai == "DNa" || idDai == "KH" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
          break;
        case 4:
            if(idDai == "HN"|| idDai == "BDi"|| idDai == "TN" || idDai == "AG" || idDai == "BTh" || idDai == "QB" || idDai == "QT" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
            break;
        case 5:
            if(idDai == "HP"|| idDai == "VL"|| idDai == "BD" || idDai == "TV" || idDai == "GL" || idDai == "NT" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
            break;
        case 6:
            if(idDai == "ND"|| idDai == "HCM"|| idDai == "HG" || idDai == "BP" || idDai == "LA" || idDai == "DNa" || idDai == "QNg" || idDai == "DNo" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
            break;
        default:
           { if(idDai == "TB"|| idDai == "TG"|| idDai == "KG" || idDai == "DL" || idDai == "KH" || idDai == "KT" )
            {
              temP = ['bullet1']
            }
            else temP = ['bullet']
        }
      
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

                                        <div  className="content-right" key={item.Mien.toString()}>
                                        <div className="title-r">{item.Mien} </div>
                                             <ul className="content-item-menu">
                                              {item.CacDai.map((tenDai) =>{ {checkDate(tenDai.id.toString())} return ( <li className ={temP} key={tenDai.id.toString()}><a className="dai_link" href={ "/"+tenDai.url}>{tenDai.name}</a></li>)})}
                                              </ul>
                                        
                                      </div>
                                    
                                  )
                                })
                              }
                          </div>
                <div className = "col-center">
                  <Kqxsmn xsmn = {xsmn}></Kqxsmn></div>
                <div className = "col-right"> 
                </div>
            </section>       
        </Layout>
    )
};
export default xsmn;

