import './header.css'



const Header = () => {
  
  return (
    <div className="sidebar"role="cdb-sidebar" color="white">
                           
      
      <h5>S B ADMIN</h5>
      <br></br>
  <div className="sidebar-container"><br></br>
    <div className="sidebar-header">
      <a className="sidebar-brand">Dashboard</a>
      <a className="sidebar-toggler"><i class="fa fa-bars"></i></a>
        </div>
        <br></br>
        <div className="sidebar-nav">
          
      <div className="sidenav">
        <a className="sidebar-item">
              <div className="sidebar-item-content">
               <h6>INTERFACE</h6> 
                 
            <i className="fa fa-th-large sidebar-icon sidebar-icon-lg"></i>
            <span>Components</span>
              </div>
            <br></br>
        </a>
        <a className="sidebar-item">
              <div class="sidebar-item-content">
                <h6>ADDONS</h6>
          
                <i className="fa fa-sticky-note sidebar-icon"></i>


                <span>pages</span>
                <br>
                </br>


                <div className='condainar'>

                 <i className="fa fa-sticky-note sidebar-icon"></i> 
                   <samp>charts</samp>
                </div>
                <div className='condainar_full'>
                  <i className="fa fa-sticky-note sidebar-icon"></i>
                  <samp>tables</samp>
                  
</div>
                
          </div>
        </a>
      </div>
      
    </div>
  </div>
</div>
  )
}


















export default Header;