import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className="container-fuild hero-animated d-flex align-items-center" id="hero-animated">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative">
                <img src="Images/hero-carousel/hero-carousel-3.svg" alt="" className="img-fluid animated" />
                <h2>Welcome to <span>HeroBiz</span></h2>
                <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>

                <div className="d-flex">
                    <Link className="btn-get-started scrollto tdnone">Get Started</Link>
                    <Link href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        className="glightbox tdnone btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch
                            Video</span></Link>
                </div>
            </div>

        </section>

    );
}
export default Banner;