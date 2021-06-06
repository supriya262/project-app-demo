import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
  
    
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className=" user-panel mt-3 pb-3 mb-3 d-flex " >
        
        <div className="image">
          <img src="dist/img/SUPRIYAPHOTO.jpg" className="img-circle elevation-5" alt="User Image" />
          
        </div>
        <div className="info">
          <a href="#" className="d-block ">@USERNAME</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" 
        role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          
            
          <li className="nav-item" className="user-panel  mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                <i class="fas fa-user    "></i>
                  <p>Account</p>
                </a>
              </li>
              
              
              <li className="nav-item" className="user-panel mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                  <i class="fas fa-wallet    "></i>
                  <p>My Wallet</p>
                </a>
              </li>
              <li className="nav-item" className="user-panel   mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                  <i className="	fa fa-american-sign-language-interpreting" />
                  <p>Refer and Earn</p>
                </a>
              </li>
              <li className="nav-item" className="user-panel  mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                  <i class="fas fa-registered    "></i>
                  <p>Withdraw Money</p>
                </a>
              </li>
              <li className="nav-item" className="user-panel   mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                  <i class="fas fa-cog" aria-hidden="true"></i>
                  <p>Setting</p>
                </a>
              </li>
              <li className="nav-item" className="  mb-3 d-flex">
                <a href="./index3.html" className="nav-link">
                <i class="fa fa-power-off" aria-hidden="true"></i>
                  
                  <p>Logout</p>
                </a>
              </li>
</ul>
</nav>  
</div> 
</aside>  
</div>       
          
          

        )
    }
}
