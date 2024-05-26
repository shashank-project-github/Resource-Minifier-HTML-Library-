
# Project Resource Minifier 

## Overview

Resource Minifier is an HTML library designed to optimize web resources by compressing CSS and JavaScript files, performing image and video lazy loading, and providing image and video compression functionalities. This project aims to improve website performance by reducing load times and bandwidth consumption.




## Features

- CSS and JavaScript Minification: Compresses CSS and JS files by removing unnecessary characters and whitespace.
- Image and Video Lazy Loading: Delays the loading of images and videos until they are about to become visible to the user.
- Image Compression: Reduces the file size of images without significantly affecting their visual quality.
- Video Compression: Reduces the file size of videos while maintaining their visual quality.


## Documentation
### HTMLMinifier
HTMLMinifier compresses and optimizes CSS and JS files by removing extra characters and whitespace, making the resulting file smaller in size. This improves website performance by reducing load times and bandwidth consumption.
#### Advantages

- Speeding up Loading time: Faster loading of minified CSS and JS files.
- Reduced Bandwidth: Smaller files consume fewer network resources.
- Better Performance: Increased efficiency across web pages for improved user experience.
#### Usage
To use the file-minify tag for minifying CSS and JavaScript files, follow these steps:
#### Include the < file-minify > Tag:



```bash
<body>
    <file-minify data-file-source="styles.css" data-file-type="css"></file-minify>
    <script src="http://localhost:5000/main.js"></script>
    <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
</body>

```

#### Specify the CSS and JS Files:
```bash
<file-minify data-file-source="your_css_file.css" data-file-type="css"></file-minify>
<file-minify data-file-source="your_js_file.js" data-file-type="js"></file-minify>


```
 Save and Refresh: The < file-minify > tag will automatically minify the specified files during page load.

### Image Compression
Image compression reduces the file size of images without significantly affecting their visual quality.

#### Why Use Image Compression?
- Speeding up Loading time: Faster loading of minified CSS and JS files.
- Reduced Bandwidth: Smaller files consume fewer network resources.
- Better Performance: Increased efficiency across web pages for improved user experience.
#### Usage
#### Include the < img-minified > Element:
```bash
<img-minified src="img.jpg" alt="alt_name" style="height: 200px; width: 400px;"></img-minified>

```
#### Set the Attributes:
```bash
<img-minified data-image-source="path/to/your/image.jpg" data-output-format="webp" data-quality="75"></img-minified>

```
### Video Compression
Video compression reduces the file size of videos without significantly affecting their visual quality.
#### Why Use Video Compression?
- Faster Loading Times: Smaller video files load quicker.
- Bandwidth Reduction: Reduced file sizes save bandwidth.
- Improved SEO: Faster loading pages rank higher in search results.
- Enhanced User Experience: Reduced buffering for smoother playback.
#### Usage
#### Include the < video-minified > Element:
```bash
<video-minified src="video.mp4" style="height: 200px; width: 400px;"></video-minified>

```
#### Set the Attributes:
```bash
<video-minified data-video-source="path/to/your/video.mp4" data-output-format="webm" data-quality="80"></video-minified>


```

### Image Lazy Loading
Image lazy loading delays the loading of images outside the viewport until they are about to become visible to the user.



#### Benefits

- Faster Page Load Times: Only essential content loads initially.
- Improved User Experience: Users can interact with the page faster.
- Reduced Bandwidth Usage: Only images that enter the viewport are downloaded.
#### Usage
#### Include the < img-lazy > Element:

```bash
<img-lazy src="image-path.jpg" alt="img" style="height: 200px; width: 400px;"></img-lazy>

```
### Video Lazy Loading
Video lazy loading delays the loading of videos outside the viewport until they are about to become visible to the user.
#### Benefits
- Faster Page Load Times: Only essential content loads initially.
- Improved User Experience: Users can interact with the page faster.
- Reduced Bandwidth Usage: Only videos that enter the viewport are downloaded.
#### Usage
#### Include the < video-lazy > Element:
```bash
<video-lazy src="video-path.mp4" alt="vid" style="height: 200px; width: 400px;"></video-lazy>

```
### Conclusion
By using Resource Minifier, you can significantly enhance the performance of your website. This library provides a simple and efficient way to compress CSS, JavaScript, images, and videos, as well as implement lazy loading for improved load times and user experience.
