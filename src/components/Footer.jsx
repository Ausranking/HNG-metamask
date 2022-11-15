import foot_logo from "../images/logo-footer.png"
import fb from "../images/logo-fb.png"
import twit from "../images/twitter-241-721979.png"
import insta from "../images/instagram-216-721958.png"
import copy from "../images/copyright-ft.png"

const Footer = () => {
    return (
        <footer>
            <div class="footwrap">
                <div>
                    <ul>
                        <li>
                            <a href="">
                                <img src={foot_logo} alt="logo" />
                            </a>
                        </li>
                        <li>
                            <div className="social-icons">
                                <a href="">
                                    <img src={fb} alt="facebook logo" />
                                </a>
                                <a href="http://twitter.com/_kingaustinn">
                                    <img src={twit} alt="twitter logo" />
                                </a>
                                <a href="">
                                    <img src={insta} alt="instagram logo" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={copy} alt="copyright logo" />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">Community</h4>
                        <li>
                            <a href="">NFT</a>
                        </li>
                        <li>
                            <a href="">Tokens</a>
                        </li>
                        <li>
                            <a href="">Landlords</a>
                        </li>
                        <li>
                            <a href="">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">Places</h4>
                        <li>
                            <a href="">Castle</a>
                        </li>
                        <li>
                            <a href="">Farms</a>
                        </li>
                        <li>
                            <a href="">Beach</a>
                        </li>
                        <li>
                            <a href="">Learn more</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">About us</h4>
                        <li>
                            <a href="">Road map</a>
                        </li>
                        <li>
                            <a href="">Creators</a>
                        </li>
                        <li>
                            <a href="">Career</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
