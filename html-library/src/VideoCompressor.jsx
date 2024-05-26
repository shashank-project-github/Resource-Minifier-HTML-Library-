import React, { useEffect, useState } from 'react';

const VideoCompressor = ({ source, style }) => {
    const [compressedVideoUrl, setCompressedVideoUrl] = useState('');
    // console.log(source);

    const compressVideo = async () => {
        try {

            const response = await fetch(source);
            const blob = await response.blob();
            // console.log(blob);
            const formData = new FormData();
            formData.append('video', blob, 'video.mp4'); // append blob directly
            console.log('compressing video...');
            const res = await fetch('http://localhost:5000/minify/minify-video', {
                method: 'POST',
                body: formData,
            });
            console.log(res.status);
            const { videoUrl } = await res.json();
            console.log(videoUrl);
            setCompressedVideoUrl(videoUrl);
            console.log('compression finished');
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        compressVideo();
    }, [])


    function convertCssToJsxStyle(cssString) {
        // Split the CSS string by semicolons
        const rules = cssString.split(';');

        const styleObject = {};

        for (const rule of rules) {
            // Trim whitespace
            const trimmedRule = rule.trim();

            // Check for empty rule or missing colon
            if (!trimmedRule || !trimmedRule.includes(':')) {
                continue;
            }

            // Split the rule by colon
            const [key, value] = trimmedRule.split(':');

            // Convert key to camelCase
            const camelCaseKey = key.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());

            // Add key-value pair to style object
            styleObject[camelCaseKey] = value.trim();
        }
        console.log(styleObject);

        return styleObject;
    }

    return (
        <div>
            <video controls style={convertCssToJsxStyle(style)} src={compressedVideoUrl}></video>
        </div>
    );
};

export default VideoCompressor;