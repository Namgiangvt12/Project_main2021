import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import {MenuItems} from "./MenuItem";
import  ReactDOM  from 'react';
import React from "react";
import { faBars, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Layout = ({children,title } ) => {
      function clickkk(){
        setCollapseOpen(!collapseOpen)
      }
      React.useEffect(() => {
        window.addEventListener("scroll",function(){     
          var header = document.querySelector("header")
          header.classList.toggle("sticky", window.scrollY >0)
      });
      })
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
                    <main>{children}</main> 
         </div>
          


              
              
      )
}
export default Layout

