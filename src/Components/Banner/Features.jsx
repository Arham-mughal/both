import { Link } from 'react-router-dom'
const BFeatures = (props) => {
    return (
        <div className="col-xl-3 col-md-6 d-flex m-2" >
            <div className="service-item position-relative">
                <div className="icon"><i className={props.Icon}></i></div>
                <h4 ><Link>{props.title} </Link></h4>
                <p>{props.p}</p>
            </div>
        </div>
    );
}
export default BFeatures;