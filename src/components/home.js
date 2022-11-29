import React from "react"
import "./styles/home.css"

const Home = () => {
    return (
        <>
            <section className='main'>
                <div className='top-header'></div>
                <div className='divider'></div>

                <h2>Taylor Swift's Midnights</h2>
                <div className='albums'>
                    <div className='album_container'>
                        <div className='album-cover'>
                            <img src={require('../images/album_ed1.png')} alt='Album Cover'></img>
                        </div>
                        <p>VINYL $29.99</p>
                    </div>

                    <div className='album_container'>
                        <div className='album-cover'>
                            <img src={require('../images/album_ed2.png')} alt='Album Cover'></img>
                        </div>
                        <p>VINYL $29.99</p>
                    </div>

                    <div className='album_container'>
                        <div className='album-cover'>
                            <img src={require('../images/album_ed3.png')} alt='Album Cover'></img>
                        </div>
                        <p>VINYL $29.99</p>
                    </div>
                </div>

                <h2>New Rock Music</h2>
                <div className='albums'>
                    <div className='album_container'>
                        <p>The Pretty Reckless</p>
                        <p>"Only Love Can Dave Me Now"</p>
                        <div className='album-cover'>
                            <img src={require('../images/singles_1.png')} alt='Album Cover'></img>
                        </div>
                        <p>DIGITAL $10.00</p>
                    </div>

                    <div className='album_container'>
                        <p>The Hardkiss</p>
                        <p>"Маяк"</p>
                        <div className='album-cover'>
                            <img src={require('../images/singles_2.png')} alt='Album Cover'></img>
                        </div>
                        <p>DIGITAL $10.00</p>
                    </div>

                    <div className='album_container'>
                        <p>Imagine Dragons</p>
                        <p>"Mercury"</p>
                        <div className='album-cover'>
                            <img src={require('../images/singles_3.png')} alt='Album Cover'></img>
                        </div>
                        <p>VINYL $40.00</p>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Home
