import React from 'react'
import './home.css'
import Footer from './Footer'
import g4028 from '../images/Group 4028.png'
import mb from '../images/Group 59537.png'
import metamask from "../images/Group 4040.png"
import opensea from "../images/Frame 4041.png"
import f142 from "../images/Frame 142.png"
import g4049 from "../images/Group 4049.png" 
import g4050 from "../images/Group 4050.png" 
import g4051 from "../images/Group 4051.png"
import g4048 from "../images/Group 4048.png"
import g40499 from "../images/Group 40499.png"
import g40500 from "../images/Group 40500.png"
import g40511 from "../images/Group 40511.png"
import frame from "../images/Frame 59546.png"


function Home() {
//  
    return (
        <div className='container'>
            
            <main className="main">
                <div className="herotext">
                    <h1>
                        Rent a <span>Place</span> away from <span>Home</span> in the
                        <span> Metaverse</span>
                    </h1>
                    <p>
                        We provide you access to luxury and affordable houses in the
                        metaverse, get a chance to turn your imagination to a reality at
                        your comfort zone
                    </p>
                    <form action="" className="search">
                        <input type="search" id="srch" placeholder="Search for location" />
                        <button type="submit" id="srch-btn">Search</button>
                    </form>
                </div>
                <div className="heroimg">
                    <img src={g4028} alt="four-image-samples" />
                </div>
            </main>
            <section className="bodynav">
                <div className="navwrap">
                    <img src={mb} alt="mb-token-logo" />
                    <img src= {metamask}alt="metamask-logo" />
                    <img src={opensea} alt="opensea-logo" />
                </div>
            </section>

            <section id="ui">
                <div className="text">
                    <h2>Inspiration for your next adventure</h2>
                </div>
                <div className="grid">
                    <div>
                        <a href=""><img src={f142} alt="desert-" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g4049} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g4050} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g4051} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g4048} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g40499} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""><img src={g40500} alt="desert" /></a>
                    </div>
                    <div>
                        <a href=""> <img src={g40511}/></a>                       
                    </div>
                </div>
            </section>
            <section className="nft">
                <div className="nft-wrap">
                    <div>
                        <h3>Metabnb NFTs</h3>
                        <p>
                            Discover our NFT gift cards collection. Loyal<br /> customers gets amazing
                            gift cards which are traded as NFTs. These NFTs gives our cutomer
                            access to loads of our exclusive services.
                        </p>
                        <button>Learn More</button>
                    </div>

                    <div>
                        <img src={frame} alt="" />
                    </div>
                </div>
            </section>
            <Footer />
          

           
        </div>


    )
}

export default Home