import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md  py-3">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span style={{fontWeight: 'bold', color: 'blue'}}>FASTECH</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-3">
                <ul className="navbar-nav mx-auto" style={{fontSize: '14px'}}>
                    <li className="nav-item"><a className="nav-link active"  style={{color:'white'}}href="#">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" style={{color:'white'}} href="#">My profile</a></li>
                    <li className="nav-item"><a className="nav-link"  style={{color:'white'}}href="#">Activity</a></li>
                    <li className="nav-item"><a className="nav-link"  style={{color:'white'}}href="#">How it works</a></li>
                </ul><button className="btn btn-primary" type="button" style={{marginRight: '6px', background: 'rgba(13,110,253,0)', color: 'white', borderColor: 'var(--bs-btn-active-color)'}}>Create</button><button className="btn btn-primary" type="button" style={{background: 'rgba(13,110,253,0)', borderStyle: 'none', color: 'white'}}>Sign in</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;