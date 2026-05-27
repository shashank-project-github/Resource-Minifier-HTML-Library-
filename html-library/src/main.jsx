import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageCompressor from './ImageCompressor.jsx';
import VideoLazyLoader from './VideoLazyLoader.jsx';
import FileMinifier from './FileMinifier.jsx';
import ImageLazyLoader from './ImageLazyLoader.jsx';
import VideoCompressor from './VideoCompressor.jsx';
// import FileMinifier from './FileMinifier.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const imgElement = document.getElementsByTagName('img-minified');
if (imgElement) {
  for (let i = 0; i < imgElement.length; i++) {
    const src = imgElement[i].getAttribute('src');
    const alt = imgElement[i].getAttribute('alt');
    const style = imgElement[i].getAttribute('style');
    ReactDOM.createRoot(imgElement[i]).render(
      <ImageCompressor src={src} alt={alt} style={style} />
    )
  }
}

const videoLazyElement = document.getElementsByTagName('video-lazy');
if (videoLazyElement) {
  for (let i = 0; i < videoLazyElement.length; i++) {
    const src = videoLazyElement[i].getAttribute('src');
    const alt = videoLazyElement[i].getAttribute('alt');
    const style = videoLazyElement[i].getAttribute('style');

    ReactDOM.createRoot(videoLazyElement[i]).render(
      <VideoLazyLoader src={src} alt={alt} style={style} />
    )
  }
}

const imgLazyElement = document.getElementsByTagName('img-lazy');
if (imgLazyElement) {
  for (let i = 0; i < imgLazyElement.length; i++) {
    const src = imgLazyElement[i].getAttribute('src');
    const alt = imgLazyElement[i].getAttribute('alt');
    const style = imgLazyElement[i].getAttribute('style');

    ReactDOM.createRoot(imgLazyElement[i]).render(
      <ImageLazyLoader src={src} alt={alt} style={style} />
    )
  }
}

const minifyElement = document.getElementsByTagName('file-minify');
if (minifyElement) {
  for (let i = 0; i < minifyElement.length; i++) {
    const fileType = minifyElement[i].getAttribute('data-file-type');
    const fileSource = minifyElement[i].getAttribute('data-file-source');
    ReactDOM.createRoot(minifyElement[i]).render(
      <FileMinifier fileSource={fileSource} fileType={fileType} />    
    )
  }
}
const videoCompressorElement = document.getElementsByTagName('video-minified');
if (videoCompressorElement) {
  // console.log(videoCompressorElement);
  for (let i = 0; i < videoCompressorElement.length; i++) {
    const source = videoCompressorElement[i].getAttribute('src');
    const style = videoCompressorElement[i].getAttribute('style');
    ReactDOM.createRoot(videoCompressorElement[i]).render(
      <VideoCompressor source={source} style={style} />
    )
  }
}