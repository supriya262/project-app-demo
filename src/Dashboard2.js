import React, { Component } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

export default class Dashboard extends Component {
    render() {
        return (
              
          
  <div className="content-wrapper sidebar-dark-primary">
    
    {/* Content Header (Page header) */}
    <div className="content-header">
<div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6 ">
            <h4 className="text-white ml-auto" >Dashboard</h4>
            <h4 className="text-white ml-auto">Monday,31-05-2021</h4>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
               <li classname="breadcrumb-item"><a href="/Home.js">Home</a></li>
              <form className="form-inline ml-3" >
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search " placeholder="Search Applicants" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit" style={{ button:'right'}}>
            <i className="fas fa-search" />
          </button></div>
          <button type="button" className="btn bg-info float-right">
            <i className="fas fa-plus"/> Add New Applicants</button>
          </div></form></ol></div></div></div></div>

    
                  
     <div className="content">
            <div className="container-fluid">
              <div className="row mb-2">

              <div className="col-lg-3  col-6 sidebar-dark-primary ">
          <div className="small-box ">
              <div className="inner">
               
                <p>Total Applications</p>
                <h3>7956</h3>
              </div>
              <div className="icon">
             <i className="far fa-circle nav-white " />
            </div>
              <a href="#" className="small-box-footer">3.59%<i className="fas fa-edit " /></a>
            </div>
          </div>

          
          <div className="col-lg-3 col-6 sidebar-dark-primary ">
          <div className="small-box ">
              <div className="inner">
              
                <p>Shorlisted Candidates</p>
                <h3>4658</h3>
              </div>
              <div className="icon">
                <i className="far fa-cicle" />
              </div>
              <a href="#" className="small-box-footer">0.6%<i className="fas fa-edit" /></a>
            </div>
          </div>
        
          <div className="col-lg-3 col-6 sidebar-dark-primary">
            
            <div className="small-box ">
              <div className="inner">
                
                <p>Total Applications</p>
                <h3>1501</h3>
              </div>
              <div className="icon">
                <i className="far fa-circle nav-white" />
              </div>
              <a href="#" className="small-box-footer">0.4%
              <i className="fas fa-edit " /></a>
            </div>
            </div>

            
            <div className="col-lg-3 ">
              <div className="card direct-chat  sidebar-dark-primary">
            <div className="card-header">
              <h5 className="card-title float-left">
                <h6 className="text-white ml-auto">Hello John Bayer, <br></br> You have 4 Applicatns Today !</h6>
                <a href="https://www.flaticon.com/free-icon/choice_1516989"></a>
                <strong className="text-white ml-auto" > New Applicants</strong></h5></div>
              <div style={{ height:'100px', lineheight:'3em',overflow: 'scroll',
               border: 'sidebar-dark-primary', padding: 5}}>


              <ul className="contacts-list"> 
              <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                          Miss Miss Miss
                          <small className="contacts-list-date  float-right">2/28/2020</small></span>
                          <span className="contacts-list-phone float-right" >8832435355</span></div>
                         </a></li>
                         <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                          Miss drakula
                          <small className="contacts-list-date  float-right">2/20/2021</small></span>
                          <span className="contacts-list-phone float-right" >992435355</span></div>
                         </a></li>
                      <li><a href="#">
                        <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Nadia Jolie
                            <small className="contacts-list-date float-right">2/20/2015</small></span>
                          <span className="contacts-list-phone float-right">5367343557</span></div>
                        </a>
                    </li>
                    
                    </ul></div></div></div></div>


                    <div className="row">
                    <section className="col-lg-4 connectedSortable ">
                    <div className="card sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title" >
                  <i className="fas fa-chart-pie mr-1" />
                  Sales
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    </ul>
                </div>
              </div>
               <div className="chart tab-pane " id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                  </div>
          </div>  
        </section> 

        <section className="col-lg-4 connectedSortable ">
        <div className="card  sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title">
                  <i  />
                Donut
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                  <li className="nav-item active">
                      <a className="nav-link active" href="#sales-chart" data-toggle="tab">Donut</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                  
                  
                  </div>
                  </div>
                </section>
                <div className="col-lg-4">
                <div className="card sidebar-dark-primary">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="far fa-calendar-alt" />
                  Calendar
                </h3>
                {/* tools card */}
                <div className="card-tools">
                  {/* button with a dropdown */}
                  <div className="btn-group">
                    <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                      <i className="fas fa-bars" /></button>
                    <div className="dropdown-menu float-right" role="menu">
                      <a href="#" className="dropdown-item">Add new event</a>
                      <a href="#" className="dropdown-item">Clear events</a>
                      <div className="dropdown-divider" />
                      <a href="#" className="dropdown-item">View calendar</a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
                {/* /. tools */}
              </div>
              {/* /.card-header */}
              <div className="card-body pt-0">
                {/*The calendar */}
                <div id="calendar" style={{width: '100%'}} />
              </div>
              {/* /.card-body */}
            </div>
            </div>

                </div>



                <div className="row">
          
          <section className="col-lg-4 connectedSortable ">
          
            <div className="card  sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="far fa-chart-pie mr-1" />
                  Sales
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                    </li>
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                  </div>  
                </div>
                </div>
                </div>
                </section>
                <div className="col-lg-4 col-6">
                <div className="card sidebar-dark-primary">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="fas fa-th mr-1" />
                  Sales Graph
                </h3>
                <div className="card-tools">
                  <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <canvas className="chart" id="line-chart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
              {/* /.card-body */}
              <div className="card-footer bg-transparent">
                <div className="row">
                  <div className="col-4 text-center">
                    <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                    <div className="text-white">Mail-Orders</div>
                  </div>
                  {/* ./col */}
                  <div className="col-4 text-center">
                    <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                    <div className="text-white">Online</div>
                  </div>
                  {/* ./col */}
                  <div className="col-4 text-center">
                    <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                    <div className="text-white">In-Store</div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-footer */}
            </div>
            </div>

            <div className="col-lg-4" >
<div className="card ">
  <h2 className="title-header">PieChart</h2>
          
    <div class="piechar"style={{ margintop: '300px',
  display: 'block',
  position: 'absolute',
  width: '400px',
  height: '400px',
  borderradius: '50%',
  backgroundimage:  '  lightblue ' }} >
    </div>
</div>

    </div>
    </div>
    
              
              
              
              <div className="row">
              <div className="col-lg-5">
              <div className="card direct-chat direct-chat-primary sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>
                <div className="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge badge-primary">3</span>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                    <i className="fas fa-comments" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {/* Conversations are loaded here */}
                <div className="direct-chat-messages">
                  {/* Message. Default to the left */}
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message to the right */}
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message. Default to the left */}
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      Working with AdminLTE on a great new app! Wanna join?
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message to the right */}
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      I would love to.
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                </div>
                {/*/.direct-chat-messages*/}
                {/* Contacts are loaded here */}
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Sarah Doe
                            <small className="contacts-list-date float-right">2/23/2015</small>
                          </span>
                          <span className="contacts-list-msg">I will be waiting for...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Nadia Jolie
                            <small className="contacts-list-date float-right">2/20/2015</small>
                          </span>
                          <span className="contacts-list-msg">I'll call you back at...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Nora S. Vans
                            <small className="contacts-list-date float-right">2/10/2015</small>
                          </span>
                          <span className="contacts-list-msg">Where is your new...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            John K.
                            <small className="contacts-list-date float-right">1/27/2015</small>
                          </span>
                          <span className="contacts-list-msg">Can I take a look at...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Kenneth M.
                            <small className="contacts-list-date float-right">1/4/2015</small>
                          </span>
                          <span className="contacts-list-msg">Never mind I found...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                  </ul>
                  {/* /.contacts-list */}
                </div>
                {/* /.direct-chat-pane */}
              </div> 
              </div>
              </div>
 
</div>
 </div>





                         
                        

                        
       </div></div>                  
                        
            
            

        )
    
}
}
