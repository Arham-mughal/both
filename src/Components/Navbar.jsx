import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
    const [Nav, ActiveNav] = useState(false);

    let ChangeBg = () => {
        if (window.scrollY > 150) {
            ActiveNav(true);
        } else {
            ActiveNav(false);
        }
    }
    window.addEventListener('scroll', ChangeBg);
    return (
        <header id="header" className={Nav ? 'header fixed-top active' : 'header fixed-top'} data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between" >

                <Link className="logo tdnone d-flex align-items-center scrollto me-auto me-lg-0">
                    <h1  >HeroBiz<span>.</span></h1>
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>

                        <li><Link className='tdnone' ><span>Home</span></Link>
                        </li>

                        <li><Link className="nav-link scrollto" >About</Link></li>
                        <li><Link className="nav-link scrollto" >Services</Link></li>
                        <li><Link className="nav-link scrollto" >Portfolio</Link></li>
                        <li><Link className="nav-link scrollto" >Team</Link></li>
                        <li><Link href="blog.html" className="tdnone" >Blog</Link></li>
                        <li className="dropdown megamenu"><Link href="#1a" className="tdnone"><span>Mega Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                            <ul>
                                <li>
                                    <Link >Column 1 link 1</Link>
                                    <Link >Column 1 link 2</Link>
                                    <Link >Column 1 link 3</Link>
                                </li>
                                <li>
                                    <Link >Column 2 link 1</Link>
                                    <Link >Column 2 link 2</Link>
                                    <Link >Column 3 link 3</Link>
                                </li>
                                <li>
                                    <Link >Column 3 link 1</Link>
                                    <Link >Column 3 link 2</Link>
                                    <Link >Column 3 link 3</Link>
                                </li>
                                <li>
                                    <Link >Column 4 link 1</Link>
                                    <Link >Column 4 link 2</Link>
                                    <Link >Column 4 link 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link className="tdnone"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                            <ul>
                                <li><Link >Drop Down 1</Link></li>
                                <li className="dropdown"><Link ><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                    <ul>
                                        <li><Link >Deep Drop Down 1</Link></li>
                                        <li><Link >Deep Drop Down 2</Link></li>
                                        <li><Link >Deep Drop Down 3</Link></li>
                                        <li><Link >Deep Drop Down 4</Link></li>
                                        <li><Link >Deep Drop Down 5</Link></li>
                                    </ul>
                                </li>
                                <li><Link >Drop Down 2</Link></li>
                                <li><Link >Drop Down 3</Link></li>
                                <li><Link >Drop Down 4</Link></li>
                            </ul>
                        </li>
                        <li><Link className="nav-link scrollto" href="index.html#1contact">Contact</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle d-none"></i>
                </nav>

                <Link className="btn-getstarted scrollto tdnone" >Get Started</Link>

            </div>
        </header>

    );
}
export default Navbar;