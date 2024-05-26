import React, { useEffect, useState } from 'react';

const FileMinifier = ({ fileSource, fileType }) => {

    const [minifiedContent, setMinifiedContent] = useState('');

    useEffect(() => {
        fetch(fileSource)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                if (fileType === 'css') {
                    minifyCSS(data);
                } else if (fileType === 'js') {
                    minifyJS(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [fileSource, fileType]);

    const minifyCSS = (css) => {
        fetch('http://localhost:5000/minify/minify-css', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ css }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setMinifiedContent(data);
            return data;
        }).catch((err) => {
            console.log(err);
        });
    };

    const minifyJS = (js) => {
        fetch('http://localhost:5000/minify/minify-js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ js }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setMinifiedContent(data);
            return data;
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        fileType === 'css' ? <style>{minifiedContent}</style> : <script>{minifiedContent}</script>
    );
};

export default FileMinifier;