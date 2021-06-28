import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import {MenuItems} from "./MenuItem";
import React, { Children } from "react";
import { faBaby, faBars, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Layout = ({children,title = "CL xổ số - XSMN - XSMB - XSMT - Kêt quả xổ số nhanh nhất VN"}) => {
      function clickkk(){
        welcome();
        setCollapseOpen(!collapseOpen)
        welcome();
      }
      const [collapseOpen, setCollapseOpen] = React.useState(false)      
      function welcome() {   
        console.log(collapseOpen);
        }   
      return (
              <div>
                    <Head >

                      <link rel = "icon"  type = "image/x-icon"/>
                      <title>{title}</title>
                      <meta property="og:title" content="CL xổ số - XSMN - XSMB - XSMT - Kêt quả xổ số nhanh nhất VN" key="XSMN - XSMB - XSMT - Kêt quả xổ số nhanh nhất VN" />
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <body className = "body">
                        <nav className="NavbarItems">
                            <a className="navbar-logo" href = "#">
                              <FontAwesomeIcon  icon = {faHome} href ="/asdasd"></FontAwesomeIcon>
                            </a>
                            <i className="fab fa-bars"></i>
                            <div className="menu-icon" onClick={clickkk} >
                                <div><FontAwesomeIcon className ="faBar" icon={collapseOpen ? faTimes : faBars } /></div>
                              
                            </div>
                            <ul className={collapseOpen ? "nav-menu active" : "nav-menu"}>
                              {
                                MenuItems.map((item,index)=>{
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
                        
                    </body>   
                    <main>{children}</main> 
              </div>
              
      )
}
export default Layout


