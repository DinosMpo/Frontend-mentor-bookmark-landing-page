"use client"

import { useState } from 'react';
import Feature from '../Feature/Feature';
import "./FeaturesContainer.css";

export default function FeaturesContainer() {
    // const [activeTab, setActiveTab] = useState();
    const [activeCategory, setActiveCategory] = useState('Bookmark in one click');

    const features = [
        {
            img: './illustration-features-tab-1.svg',
            title: 'Bookmark in one click',
            description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            img_width: '536',
            img_height: '346'
        },
        {
            img: './illustration-features-tab-2.svg',
            title: 'Intelligent search',
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            img_width: '478',
            img_height: '416'
        },
        {
            img: './illustration-features-tab-3.svg',
            title: 'Share your bookmarks',
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            img_width: '440',
            img_height: '380'
        }
    ];

    const featureList = features.map((feature, key) => {
        return <Feature key={key} item={feature} activeCategory={activeCategory} order={key}/>
    });

    return (
        <div id="features-container">
            <h1 id="features-title">Features</h1>
            <div id="features-description">
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </div>

            <div id="features-categories">
                <div className={`features-category ${activeCategory === "Bookmark in one click" ? "features-category-active" : ''}`}
                    onClick={() => setActiveCategory("Bookmark in one click")}>
                    Simple Bookmarking
                </div>
                <div className={`features-category ${activeCategory === "Intelligent search" ? "features-category-active" : ''}`}
                    onClick={() => setActiveCategory("Intelligent search")}>
                    Speedy Searching
                </div>
                <div className={`features-category ${activeCategory === "Share your bookmarks" ? "features-category-active" : ''}`}
                    onClick={() => setActiveCategory("Share your bookmarks")}>
                    Easy Sharing
                </div>
            </div>

            {/* //auto to div prepei na doulepsw */}
            <div id="feature-categories-container">
                {featureList}
            </div>
        </div>
    )
}
