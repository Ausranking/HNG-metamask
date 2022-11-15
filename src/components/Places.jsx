import Footer from "./Footer";
import {Link} from 'react-router-dom'
import './places.css'
import set from "../images/setting-5.png"
import p1 from "../images/Frame 142.png"
import p2 from "../images/Group 4049.png"
import p3 from "../images/Group 4050.png"
import p4 from "../images/Group 4050.png"
import p5 from "../images/Group 4051.png"
import p6 from "../images/Group 4048.png"
import p7 from "../images/Group 40499.png"
import p8 from "../images/Group 40500.png"
import p9 from "../images/Group 40511.png"
import p10 from "../images/Group 404999.png"
import p11 from "../images/Group 405111.png"
import p12 from "../images/Group 405000.png"
import p13 from "../images/Group 4050000.png"
import p14 from "../images/Group 4048888.png"
import p15 from "../images/Group 4049999.png"
import p16 from "../images/Group 4051111.png"

const Places = () => {
    return (
        <div className="places">

            <nav className="nav-places">
                <Link to="/">Restaurant</Link>
                <Link to="/">Cottage</Link>
                <Link to="/">Council</Link>
                <Link to="/">fantast city</Link>
                <Link to="/">beach</Link>
                <Link to="/">Carbins</Link>
                <Link to="/">Off-grid</Link>
                <Link to="/">farm</Link>
                <button className="location-btn">Location <span><img src={set} alt="" /></span>
                </button>
            </nav>

            <div className="grid">
                <div>
                    <a href="/"><img src={p1} alt="desert-" /></a>
                </div>
                <div>
                    <a href="/"><img src={p2} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src={p3} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src={p4} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src={p5} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src={p6} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src={p7} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p8} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p9} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p10} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p11} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p12} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p13} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p14} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p15} alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src={p16} alt="desert" /></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Places;