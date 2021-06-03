import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
  <div className="content-wrapper sidebar-dark-primary">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="text-white ml-auto">Dashboard</h1>
            <h4 className="text-white ml-auto">Monday,31-05-2021</h4>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Welcome</a></li>
              
              <form className="form-inline ml-3" >
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search " 
                  placeholder="Search Applicants" aria-label="Search" />
                  <div className="input-group-append">
          <button className="btn btn-navbar" type="submit" style={{ button:'right'}}>
            <i className="fas fa-search" />
          </button></div>
          <button type="button" className="btn bg-info float-right">
            <i className="fas fa-plus"/> Add New Applicants</button>
          </div></form>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6 sidebar-dark-primary">
            {/* small box */}
            <div className="small-box ">
              <div className="inner">
              <p>Total Applications</p>
                <h3>7956</h3>
              </div>
              <div className="icon">
                <i className="far fa-circle" />
              </div>
              <a href="#" className="small-box-footer">3.59%<i className="fas fa-edit" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box ">
              <div className="inner">
                <p>Shorlisted Candidate<sup style={{fontSize: 20}}>%</sup></p>
                <h3>4658</h3>
              </div>
              <div className="icon">
                <i className="far fa-circle" />
              </div>
              <a href="#" className="small-box-footer">0.6% <i className="fas fa-edit" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6 sidebar-dark-primary">
            {/* small box */}
            <div className="small-box ">
              <div className="inner">
              <p>Total Applications</p>
                <h3>1501</h3>
              </div>
              <div className="icon">
                <i className="far fa-circle" />
              </div>
              <a href="#" className="small-box-footer">0.4% <i className="fas fa-edit" /></a>
            </div>
          </div>
          <div className="col-lg-3 ">
              <div className="card direct-chat  sidebar-dark-primary">
            <div className="card-header">
              <h5 className="card-title float-left">
                <h6 className="text-white ml-auto">Hello John Bayer, <br></br>
                 You have 4 Applicatns Today !</h6>
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
                    
                    </ul></div></div></div>
          {/* ./col */}
          
          {/* ./col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <section className="col-lg-7 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Application Received    This year   This Week
                </h3>
                
                

                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">DownloadReports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#sales-chart" data-toggle="tab">Department</a>
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
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}
            {/* DIRECT CHAT */}
            <div className="card direct-chat direct-chat-primary sidebar-dark-primary">
              <div className="card-header sidebar-dark-primary">
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
              <div className="card-body sidebar-dark-primary">
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
                <div className="direct-chat-contacts sidebar-drk-primary">
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
              {/* /.card-body */}
              <div className="card-footer sidebar-dark-primary">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="button" className="btn btn-primary">Send</button>
                    </span>
                  </div>
                </form>
              </div>
              {/* /.card-footer*/}
            </div>
            {/*/.direct-chat */}
            {/* TO DO List */}
            <div className="card sidebar-dark-primary">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  To Do List
                </h3>
                <div className="card-tools">
                  <ul className="pagination pagination-sm">
                    <li className="page-item"><a href="#" className="page-link">«</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">»</a></li>
                  </ul>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body sidebar-dark-primary">
                <ul className="todo-list" data-widget="todo-list">
                  <li>
                    {/* drag handle */}
                    <span className="handle sidebar-dark-primary">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    {/* checkbox */}
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                      <label htmlFor="todoCheck1" />
                    </div>
                    {/* todo text */}
                    <span className="text">Design a nice theme</span>
                    {/* Emphasis label */}
                    <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                    {/* General tools such as edit or delete*/}
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                      <label htmlFor="todoCheck2" />
                    </div>
                    <span className="text">Make the theme responsive</span>
                    <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                      <label htmlFor="todoCheck3" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                      <label htmlFor="todoCheck4" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                      <label htmlFor="todoCheck5" />
                    </div>
                    <span className="text">Check your messages and notifications</span>
                    <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                  <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    <div className="icheck-primary d-inline ml-2">
                      <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                      <label htmlFor="todoCheck6" />
                    </div>
                    <span className="text">Let theme shine like a star</span>
                    <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                    <div className="tools">
                      <i className="fas fa-edit" />
                      <i className="fas fa-trash-o" />
                    </div>
                  </li>
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
              </div>
            </div>
            {/* /.card */}
          </section>
          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable)*/}
          <section className="col-lg-5 connectedSortable">
            {/* Map card */}
            <div className="card sidebar-dark-primary">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="fas fa-map-marker-alt mr-1" />
                  Visitors
                </h3>
                {/* card tools */}
                <div className="card-tools">
                  <button type="button" className="btn btn-primary btn-sm daterange" data-toggle="tooltip" title="Date range">
                    <i className="far fa-calendar-alt" />
                  </button>
                  <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
                {/* /.card-tools */}
              </div>
              <div className="card-body">
                <div id="world-map" style={{height: 250, width: '100%'}} />
              </div>
              {/* /.card-body*/}
              <div className="card-footer bg-transparent">
                <div className="row">
                  <div className="col-4 text-center">
                    <div id="sparkline-1" />
                    <div className="text-white">Visitors</div>
                  </div>
                  {/* ./col */}
                  <div className="col-4 text-center">
                    <div id="sparkline-2" />
                    <div className="text-white">Online</div>
                  </div>
                  {/* ./col */}
                  <div className="col-4 text-center">
                    <div id="sparkline-3" />
                    <div className="text-white">Sales</div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
              </div>
            </div>
            {/* /.card */}
            {/* solid sales graph */}
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
            {/* /.card */}
            {/* Calendar */}
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
            {/* /.card */}
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}
