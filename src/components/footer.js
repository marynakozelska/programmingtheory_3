import React from "react";
import "./styles/footer.css";
import 'boxicons'

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='info'>
                    <h2>Music World</h2>
                </div>

                <div className='social_media'>
                    <a href=""><box-icon name='instagram' type='logo' color='#ffffff'></box-icon></a>
                    <a href=""><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></a>
                    <a href=""><box-icon name='youtube' type='logo' color='#ffffff' ></box-icon></a>
                    <a href=""><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
                </div>

                <p>© Copyright Music World 2022</p>
            </div>
        </>
    )
}

export default Footer