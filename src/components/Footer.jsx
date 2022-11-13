const Footer = () => {
    return (
        <footer>
            <div class="footwrap">
                <div>
                    <ul>
                        <li><a href=""><img src="./images/logo-footer.png" alt="" /></a></li>
                        <li>
                            <div className="social-icons">
                                <a href=""><img src="./images/logo-fb.png" alt="" /></a>
                                <a href=""><img src="./images/twitter-241-721979.png" alt="" /></a>
                                <a href=""><img src="./images/instagram-216-721958.png" alt="" /></a>
                            </div>
                        </li>
                        <li><img src="./images/copyright-ft.png" alt="" /></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">Community</h4>
                        <li><a href="">NFT</a></li>
                        <li><a href="">Tokens</a></li>
                        <li><a href="">Landlords</a></li>
                        <li><a href="">Discord</a></li>

                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">Places</h4>
                        <li><a href="">Castle</a></li>
                        <li><a href="">Farms</a></li>
                        <li><a href="">Beach</a></li>
                        <li><a href="">Learn more</a></li>

                    </ul>
                </div>
                <div>
                    <ul>
                        <h4 className="link-titles">About us</h4>
                        <li><a href="">Road map</a></li>
                        <li><a href="">Creators</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Contact us</a></li>



                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;