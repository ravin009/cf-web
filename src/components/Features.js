import React from 'react';

const features = [
    {
        icon: 'fas fa-comments',
        title: 'Real-Time Messaging',
        desc: 'Instantly send and receive messages in public rooms or private chats.',
    },
    {
        icon: 'fas fa-user-friends',
        title: 'Friend & Block Lists',
        desc: 'Manage your friends and block unwanted users easily.',
    },
    {
        icon: 'fas fa-lock',
        title: 'Private & Secure',
        desc: 'Create private rooms and control access with invitations and read-only modes.',
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'Customizable Themes',
        desc: 'Personalize your chat experience with color settings and avatars.',
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Friendly',
        desc: 'Optimized for mobile devices with smooth UI and offline support.',
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Admin Controls',
        desc: 'Admins can manage roles, ban users, and moderate rooms effectively.',
    },
];

const Features = () => (
    <section id="features" className="features section-offset" tabIndex={-1}>

        <h2>Features</h2>
        <div className="features-grid">
            {features.map(({ icon, title, desc }, idx) => (
                <div className="feature-card" key={idx} tabIndex={0}>
                    <i className={`feature-icon ${icon}`} aria-hidden="true" />
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-desc">{desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
