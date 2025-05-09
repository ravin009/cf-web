import React from 'react';

const Download = () => (
    <section id="download" className="download section-offset" tabIndex={-1}>

        <h2>Download ChatFun APK</h2>
        <p>
            Get the latest version of ChatFun for your Android device. Safe, secure,
            and easy to install.
        </p>
        <div className="download-buttons">
            <a
                href="https://drive.usercontent.google.com/download?id=1QZNCLDVxR3KebfBhtfKrgGRrLzBJTdGn&export=download&authuser=0&confirm=t&uuid=c95e470b-d003-4bbe-a8a1-29eb4a80bf7a&at=ALoNOgm6xvB_x-TTSQHJagxxEiS2%3A1746813098720"
                className="download-button"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download ChatFun APK"
            >
                <i className="fas fa-android" /> Download APK v1.0.0
            </a>
        </div>
    </section>
);

export default Download;
