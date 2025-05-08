import React from 'react';

const Hero = () => (
    <section id="home" className="hero section-offset" tabIndex={-1}>

        <h1>ChatFun - Your Ultimate Live Chat App</h1>
        <p>
            Connect, chat, and share with friends and communities in real-time.
            Experience seamless communication with ChatFun.
        </p>
        <div className="btn-group">
            <a
                href="#download"
                className="btn-primary"
                role="button"
                tabIndex={0}
                aria-label="Download ChatFun APK"
            >
                <i className="fas fa-download" /> Download APK
            </a>
            <a
                href="#features"
                className="btn-secondary"
                role="button"
                tabIndex={0}
                aria-label="Learn more about ChatFun features"
            >
                Learn More
            </a>
        </div>
    </section>
);

export default Hero;
