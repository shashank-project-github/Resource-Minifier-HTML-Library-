import React, { useEffect, useRef } from 'react';

const MAX_WIDTH = 320;
const MAX_HEIGHT = 180;

// const INPUT = document.getElementById("imgId");


// INPUT.onchange = function (event) {
//   const file = event.target.files[0]; // get the file
//   const blobURL = URL.createObjectURL(file);
//   const img = new Image();
//   img.src = blobURL;

//   img.onload = 
// };



function calculateSize(img, maxWidth, maxHeight) {
    let width = img.width;
    let height = img.height;

    // calculate the width and height, constraining the proportions
    if (width > height) {
        if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
        }
    }
    return [width, height];
}

function readableBytes(bytes) {
    const i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}


const ImageCompressor = ({ src, alt, style }) => {
    // console.log(src);
    const imgRef = useRef(null);
    const imgLoaded = useRef(false);
    const compressedRef = useRef(null);

    const compress = () => {
        const [newWidth, newHeight] = calculateSize(imgRef.current, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgRef.current, 0, 0, newWidth, newHeight);
        canvas.toBlob(
            (blob) => {
                // Handle the compressed image.
                const displayTag = document.createElement('h1');
                displayTag.innerText = `Compressed Image - ${readableBytes(blob.size)}`;
                console.log(displayTag.innerText);
                // document.getElementById('container').append(displayTag);

                // const newImg = new Image();
                // newImg.onload = () => {
                //     compressedRef.current = newImg;
                // };
                compressedRef.current.src = URL.createObjectURL(blob);
                // remove the img ref
                // imgRef.current = null;
                imgRef.current.style.display = 'none';
                imgRef.current = null; 
            },
        );
    };

    function convertCssToJsxStyle(cssString) {
        if(!cssString) return {};
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

    useEffect(() => {
        imgRef.current.onload =
            () => {
                console.log("Image loaded");
                compress();
            }
    }, [imgRef.current]);


    return (
        <div>
            <img className='compressed' ref={compressedRef} src="" alt="" style={convertCssToJsxStyle(style)} />
            <img className='some' ref={imgRef} src={src} alt={alt} />
        </div>
    )
}

export default ImageCompressor