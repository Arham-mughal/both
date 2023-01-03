import { Link } from 'react-router-dom';
let Sectionb = () => {
    return (
        <>
            <section id="cta" className="cta">
                <div className="container" >
                    <div className="row g-5">
                        <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                            <h3>Alias sunt quas <em>Cupiditate</em> <br /> oluptas hic minima</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                            <Link className="cta-btn align-self-start tdnone" >Call To Action</Link>
                        </div>
                        <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                            <div className="img">
                                <img src="Images/cta.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="onfocus" className="onfocus">
                <div className="container-fluid p-0"  >

                    <div className="row g-0">
                        <div className="col-lg-6 video-play position-relative">
                            <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="content d-flex flex-column justify-content-center h-100">
                                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                        pariatur.</li>
                                </ul>
                                <Link className="read-more align-self-start tdnone"><span>Read More</span><i className="bi bi-arrow-right pt-5"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

};
export default Sectionb;