import Footer from "./Footer";
import {Link} from 'react-router-dom'
import './places.css'
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
                <button className="location-btn">Location <span><img src="./images/setting-5.png" alt="" /></span>
                </button>
            </nav>

            <div className="grid">
                <div>
                    <a href="/"><img src="./images/Frame 142.png" alt="desert-" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 4049.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 4050.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 4051.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 4048.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 40499.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"><img src="./images/Group 40500.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 40511.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="images/Group 404999.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images\Group 404888.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 405111.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 405000.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 4050000.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 4048888.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 4049999.png" alt="desert" /></a>
                </div>
                <div>
                    <a href="/"> <img src="./images/Group 4051111.png" alt="desert" /></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Places;