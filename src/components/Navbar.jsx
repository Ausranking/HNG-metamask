import { Link } from 'react-router-dom'


const Navbar = ({ showModal }) => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/"> <img src="images\Group.png" alt="logo" /></a>


            </div>
            <nav className="navlist">
                <Link to="/">Home</Link>
                <Link to="places">place to stay</Link>
                <Link to="/">NFTs</Link>
                <Link to="/">Community</Link>

            </nav>
            <button onClick={showModal} className="walletbtn">Connect Wallet</button>


        </header>
    )
}

export default Navbar