import React from 'react'
import Image from 'next/image';
import "./BottomNav.css";

export default function BottomNav() {
    return (
        <div id="bottom-nav">
            <div id='bottom-nav-wrapper'>
                <div id='bottom-nav-left'>
                    <Image
                        src="./logo-bookmark-light.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        // sizes="100vw"
                        style={{ width: '148px', height: '25px' }} // optional
                    />
                    <a className="bottom-link" href="#features-container">
                        <div className='bottom-nav-category'>FEATURES</div>
                    </a>
                    <a className="bottom-link" href="#download-extensions-container">
                        <div className='bottom-nav-category'>PRICING</div>
                    </a>
                    <a className="bottom-link" href="#contact-container">
                        <div className='bottom-nav-category'>CONTACT</div>
                    </a>
                </div>

                <div id="socials">
                    <a target="_blank" href="https://www.facebook.com">
                        <Image
                            src="./icon-facebook.svg"
                            alt="socials"
                            width={0}
                            height={0}
                            style={{ width: '24px', height: '24px' }}
                            className="social-icon"
                        />
                    </a>
                    <a target="_blank" href="https://www.x.com">
                        <Image
                            src="./icon-twitter.svg"
                            alt="socials"
                            width={0}
                            height={0}
                            style={{ width: '24px', height: '24px' }}
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
