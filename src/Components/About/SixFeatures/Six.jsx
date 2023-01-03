import Afeatures from './Afeature'
import { Link } from 'react-router-dom'
let Six = () => {

    const handleCheck = (e) => {
        console.log(
            e.target.value
        );
    }
    return (
        <section className="features">
            <div className='container'>

                <ul className="nav nav-tabs Features row gy-4 d-flex">
                    <li className="nav-item col-6 col-md-4 col-lg-2" onClick={handleCheck} data-id="1" >
                        <Link className="nav-link"  >
                            <i className="bi bi-binoculars color-cyan"></i>
                            <h4>Modinest</h4>
                        </Link>
                    </li>

                    <li className="nav-item col-6 col-md-4 col-lg-2 ">
                        <Link className="nav-link" >
                            <i className="bi bi-box-seam color-indigo"></i>
                            <h4>Undaesenti</h4>
                        </Link>
                    </li>

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <Link className="nav-link" >
                            <i className="bi bi-brightness-high color-teal"></i>
                            <h4>Pariatur</h4>
                        </Link>
                    </li>

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <Link className="nav-link" >
                            <i className="bi bi-command color-red"></i>
                            <h4>Nostrum</h4>
                        </Link>
                    </li>

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <Link className="nav-link" >
                            <i className="bi bi-easel color-blue"></i>
                            <h4>Adipiscing</h4>
                        </Link>
                    </li>

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <Link className="nav-link" >
                            <i className="bi bi-map color-orange"></i>
                            <h4>Reprehit</h4>
                        </Link>
                    </li>

                </ul>

                <Afeatures />

            </div>
        </section>
    )
};
export default Six;