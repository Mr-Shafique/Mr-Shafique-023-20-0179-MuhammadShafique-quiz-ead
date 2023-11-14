import React from 'react';

function Welcome() {
    return (
        <div className="container py-4 py-xl-5" style={{color: 'rgb(255,255,255)'}}>
            <div className="row gy-4 gy-md-0">
                <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center" style={{borderColor: 'red'}}>
                    <div style={{maxWidth: '350px'}}>
                        <h2 className="text-uppercase fw-bold">Discover, collect, and charity in extraordinary NFT marketplace</h2>
                        <p className="my-3" style={{color: 'rgb(213, 213, 213)'}}>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
                        <a className="btn btn-primary btn-lg me-2" role="button" href="#" style={{background: 'linear-gradient(70deg, rgb(155, 81, 224), rgb(66, 105, 205))', fontWeight: 'bold', width: '130.1px', height: '40.3px', padding: '0px', paddingTop: '2px', borderRadius: '8px', borderStyle: 'none'}}>Explore</a>
                        <a className="btn btn-outline-primary btn-lg" role="button" href="#" style={{borderWidth: '0.2px', borderColor: 'rgb(242,243,244)', color: 'rgb(246,246,246)', width: '130.7px', height: '40px', padding: '0px', paddingTop: '2px'}}>Create</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-xl-5 m-xl-5" style={{padding: '18px', borderRadius: '10px'}}>
                        <img className="rounded img-fluid w-100 fit-cover" style={{minHeight: '300px', borderRadius: '20px'}} src=''/>
                        <div className="d-flex justify-content-between" style={{padding: '0px', paddingTop: '10px', paddingBottom: '10px'}}>
                            <div className="d-flex">
                                <img style={{width: '50px', height: '50px', borderRadius: '30px', marginRight: '10px'}} src="assets/img/Ellipse%20427.png" />
                                <div className="d-flex flex-column">
                                    <span><strong>Laura</strong></span>
                                    <small style={{fontSize: '11px', color: 'rgb(202, 202, 202)'}}>0.12 width</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;