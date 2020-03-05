import React from 'react'
import {Icon} from 'semantic-ui-react'

class LandFooter extends React.Component{
    render(){
        return(
            <div style={{width:"100%"}} className="container-fluid float-left">
                <footer className="page-footer font-small unique-color-dark" style={{backgroundColor:"#263238"}}>
                    <div style={{backgroundColor:"#1565C0"}}>
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                                </div>

                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                    <a className="fb-ic" style={{fontSize:"20px",color:"white",cursor:"pointer"}}>
                                        <Icon name="facebook official"/>
                                    </a>

                                    <a className="gplus-ic" style={{fontSize:"20px",color:"white",cursor:"pointer"}}>
                                        <Icon name="google plus square" />   
                                    </a>

                                    <a className="li-ic" style={{fontSize:"20px",color:"white",cursor:"pointer"}}>
                                        <Icon name="linkedin"/>
                                    </a>

                                    <a className="ins-ic" style={{fontSize:"20px",color:"white",cursor:"pointer"}}>
                                       <Icon name="instagram"/>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="container text-center text-md-left mt-5" >

                        <div className="row mt-3">


                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                            <h6 className="text-uppercase font-weight-bold text-white">Dort Blog</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                            <p className="text-white">You can easy create a blog for anyone anywhere in the world to see your blog. Trust us our services
                                are good. Write on any subject at all.
                            </p>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                            <p>
                            <a className="text-white">MDBootstrap</a>
                            </p>
                            <p>
                            <a className="text-white">MDWordPress</a>
                            </p>
                            <p>
                            <a className="text-white">BrandFlow</a>
                            </p>
                            <p>
                            <a className="text-white">Bootstrap Angular</a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                            <p>
                            <a className="text-white">Your Account</a>
                            </p>
                            <p>
                            <a className="text-white">Become an Affiliate</a>
                            </p>
                            <p>
                            <a className="text-white">Shipping Rates</a>
                            </p>
                            <p>
                            <a className="text-white">Help</a>
                            </p>

                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                            <p className="text-white">
                                <i className="fas fa-home mr-3"></i> India, Punjab LPU</p>
                            <p className="text-white">
                                <i className="fas fa-envelope mr-3"></i> boanergeskwaku253@gmail.com</p>
                            <p className="text-white">
                                <i className="fas fa-phone mr-3"></i> 8264174451</p>

                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3" className="text-white">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/" > MDBootstrap.com</a>
                    </div>
                </footer>
        </div>
        )
    }
}

export default LandFooter