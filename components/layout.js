import Head from 'next/head'
import {dai} from "../components/dai"
import {MenuItems} from "./MenuItem";
import  ReactDOM  from 'react';
import React from "react";
import { faBars, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
 const Layout = ({children,title } ) => {
      function clickkk(){
        setCollapseOpen(!collapseOpen)
      }
      React.useEffect(() => {
        window.addEventListener("scroll",function(){     
          var header = document.querySelector("header")
          header.classList.toggle("sticky", window.scrollY >0)
      });
      },[])
      const [collapseOpen, setCollapseOpen] = React.useState(false)    
  
      return (
        <div>
              <body className = "body"></body>
                    <Head >

                      <link rel = "icon"  type = "image/x-icon"/>
                      <title>{title}</title>
                      <meta property="og:title" content="CL xổ số - XSMN - XSMB - XSMT - Kêt quả xổ số nhanh nhất VN" key="XSMN - XSMB - XSMT - Kêt quả xổ số nhanh nhất VN" />
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <header>
                        <nav className="NavbarItems">
                            <a className="navbar-logo" href = "#">
                              <FontAwesomeIcon  icon = {faHome} href ="/"></FontAwesomeIcon>
                            </a>
                            <i className="fab fa-bars"></i>
                            <div className="menu-icon" onClick={clickkk} >
                                <div><FontAwesomeIcon className ="faBar" icon={collapseOpen ? faTimes : faBars } /></div>                            
                            </div>
                            <ul className={collapseOpen ? "nav-menu active" : "nav-menu"}>
                              {console.log("Load Menu")}
                              {
                                MenuItems.map((item)=>{
                                  return (
                                    <li key={item.id.toString()}>
                                      <a className={item.cNam} href={item.url}>
                                              {
                                                item.title
                                              }                                  
                                      </a>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                        </nav>
                    </header>   
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
                  {children}
                  </div>
                <div className = "col-right"> 
                </div>
            </section> 
         </div>     
      )
}
export default Layout

