import React from 'react'
import './home.css'
import Footer from './Footer'




function Home() {
//  
    return (
        <div className='container'>
            
            <main className="main">
                <div className="herotext">
                    <h1 style={{fontSize: 2.5 + 'rem'}} >
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
                    <img src="./images/Group 4028.png" alt="four-image-samples" />
                </div>
            </main>
            <section className="bodynav">
                <div className="navwrap">
                    <img src="./images/Group 59537.png" alt="mb-token-logo" />
                    <img src="./images/Group 4040.png" alt="metamask-logo" />
                    <img src="./images/Frame 4041.png" alt="opensea-logo" />
                </div>
            </section>

            <section id="ui">
                <div className="text">
                    <h2>Inspiration for your next adventure</h2>
                </div>
                <div className="grid">
                    <div>
                        <img src="./images/Frame 142.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 4049.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 4050.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 4051.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 4048.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 40499.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 40500.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Group 40511.png" alt="" />
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
                        <img src="./images/Frame 59546.png" alt="" />
                    </div>
                </div>
            </section>
            <Footer />
          

           
        </div>


    )
}

export default Home