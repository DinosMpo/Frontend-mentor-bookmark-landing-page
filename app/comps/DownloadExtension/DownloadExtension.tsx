import React from 'react'
import './DownloadExtension.css';
import Extension from '../Extension/Extension';

export default function DownloadExtension() {
    const extensions = [
        {
            img: './logo-chrome.svg',
            title: 'Chrome',
            description: '62',
            url: ''
        },
        {
            img: './logo-firefox.svg',
            title: 'Firefox',
            description: '55',
            url: ''
        },
        {
            img: './logo-opera.svg',
            title: 'Opera',
            description: '46',
            url: ''
        }
    ];

    const extensionList = extensions.map((item, key) => {
        return <Extension key={key} order={key} item={item} />
    });

    return (
        <div id="download-extensions-container">
            <h1>Download the extension</h1>

            <div id="download-extensions-description">
                We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
            </div>

            <div id="extensions-list-container">
                {extensionList}
            </div>

            {/* Add to Chrome
            Minimum version 62
            Add & Install Extension

            Add to Firefox
            Minimum version 55
            Add & Install Extension

            Add to Opera
            Minimum version 46
            Add & Install Extension */}
        </div>
    )
}
