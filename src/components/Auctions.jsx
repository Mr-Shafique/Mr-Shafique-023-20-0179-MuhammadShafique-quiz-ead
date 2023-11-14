import React from 'react';

function Auctions() {
    return (
        <div className="container py-4 py-xl-5">
            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                {[...Array(4)].map((_, i) => (
                    <div className="col" style={{width: '304px', paddingRight: '22px'}} key={i}>
                        <div className="card" style={{borderRadius: '27px', borderStyle: 'none', background: 'rgba(255,255,255,0)'}}>
                            <img className="card-img-top w-100 d-block fit-cover" style={{height: '312px', background: 'url("assets/img/unsplash_ruJm3dBXCqw.png") center / cover', borderRadius: '23px'}} src="assets/img/unsplash_ruJm3dBXCqw.png" />
                            <div className="card-body p-4" style={{background: 'rgb(31, 29, 43)'}}>
                                <div className="d-flex justify-content-between" style={{color: 'rgb(255,255,255)', padding: '-1px'}}>
                                    <span>LOREM Ipsum</span>
                                    <h4 style={{fontSize: '13px'}}>1.20 weth</h4>
                                </div>
                                <hr style={{color: 'rgb(255,255,255)'}} />
                                <div className="d-flex justify-content-between" style={{color: 'rgb(0,0,0)', padding: '-1px'}}>
                                    <span style={{color: 'rgb(255,255,255)'}}>ENDS IN 12 12 1999</span>
                                    <button className="btn btn-primary" type="button" style={{background: 'rgba(13,110,253,0)', borderColor: 'rgb(255,255,255)', padding: '0px', height: '27.3px', width: '49.8px'}}>Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Auctions;