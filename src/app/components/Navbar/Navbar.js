import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import logoH from "../../assets/images/logo.png";

 class Navbar extends Component {
  render() {
    const {history}=this.props;
    return (
      <nav class="navbar navbar-dark navbar-expand-sm bg-light navbarMenus">
        <div class="container mobdiv">
          <p class="navbar-brand navLogo">
            <img
              src={logoH}
              className="logoHeader"
              onClick={()=>history.push('/')}
            />
        
          </p>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto marLeft">
             {routes.map((item, index)=>{
               const isActive = window.location.pathname===item.path?"home":""
               return(
                <li class="nav-item" onClick={()=>history.push(item.path)}>
                <p class={`nav-link navClass active ${isActive}`}  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  {item.title}
                </p>
              </li>
               )
             })}
        
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar)
const routes=[
  {
    title:"Home",
    path:"/"
  },
  {
    title:"Profile",
    path:"/profile"
  },
  {
    title:"News & Events",
    path:"/NewsAndEvents"
  },
  
  {
    title:"Gallery",
    path:"/gallery"
  },
  {
    title:"Contact",
    path:"/contact"
  },

]