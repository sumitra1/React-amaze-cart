

const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links-div'>
                        <h4>Man</h4>
                        <a href="#">
                            <p>Shirts</p>
                        </a>
                        <a href="#">
                            <p>Paints</p>
                        </a>
                        <a href="#">
                            <p>Watch</p>
                        </a>

                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Woman</h4>
                        <a href="#">
                            <p>Dresses</p>
                        </a>
                        <a href="#">
                            <p>Bags</p>
                        </a>
                        <a href="#">
                            <p>Jump Suits</p>
                        </a>

                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Kids</h4>
                        <a href="#">
                            <p>Frocks</p>
                        </a>
                        <a href="#">
                            <p>Toys</p>
                        </a>
                        <a href="#">
                            <p>Dresses</p>
                        </a>

                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Grocery</h4>
                        <a href="#">
                            <p>Fruits</p>
                        </a>
                        <a href="#">
                            <p>Vegetables</p>
                        </a>
                        <a href="#">
                            <p>Wheat</p>
                        </a>

                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Coming soon on</h4>

                        <a href="#">
                            <p>Facebook</p>
                        </a>
                        <a href="#">
                            <p>Twitter</p>
                        </a>
                        <a href="#">
                            <p>LinkedIn</p>
                        </a>
                        <a href="#">
                            <p>Instagram</p>
                        </a>

                    </div>

                </div>
                <hr></hr>
                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} AmazeKart. All right reserved.
                        </p>

                    </div>
                    <div className='sb__footer-below-links socialMedia'>
                        <a href='/terms'><p> Terms & Condition</p></a>
                        <a href='/terms'><p>Privacy</p></a>
                        <a href='/terms'><p> Policy</p></a>
                        <a href='/terms'><p> Cookie Declaration</p></a>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;