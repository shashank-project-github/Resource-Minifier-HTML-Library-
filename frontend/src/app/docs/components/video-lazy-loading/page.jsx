'use client';
import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const VideoLazyLoading = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Video Lazy Loading
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold text-2xl'>
                What is video lazy loading?
              </p>
              <br />
              Video lazy loading is an optimization technique that delays the loading of videos outside the viewport until they are about to become visible to the user. Similar to image lazy loading, it prioritizes the loading of content that users see first, leading to a faster perceived performance.

              <br />
              <br />
              <p className='text-black font-semibold text-2xl'>
                Benefits of video lazy loading:
              </p>
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>Faster Page Load Times:</span> By deferring video loading, only essential content loads initially, leading to a quicker initial page load.</li>
                <li><span className='underline text-black'>Improved User Experience:</span>  Users don't have to wait for all videos to load before interacting with the page.</li>
                <li><span className='underline text-black'>Reduced Bandwidth Usage:</span>Only videos that enter the viewport are downloaded, saving bandwidth and potentially lowering data costs for users.</li>
              </ul><br />
              <p className='text-black font-semibold text-2xl'>
                How to Use the '{'<video-lazy-loading>'}' Element
              </p>
              <br />
              <p className='text-black font-semibold '>
                Step 1: Include the Element in Your HTML
              </p>
              <br />
              First, you need to add the '{'<video-lazy-loading>'}' element to your HTML file where you want the video to appear.
              <br />
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<video-lazy src="video-path.mp4" alt="vid""></video-lazy>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />
              <p className='text-black font-semibold '>
              Step 2: Set the Required Attribute
              </p>
              <br />
              The '{'<video-lazy-loading>'}' element requires one attribute to function correctly:
              <br /><br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>'data-video-source' (required): </span> This attribute specifies the path to the video file you want to lazy load. Make sure to replace ' "path/to/your/video.mp4" ' with the actual path to your video file.</li>
              </ul><br />
              {/* <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<image-lazy-loading data-image-source="path/to/your/image.jpg"></image-lazy-loading>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br /> */}

              <p className='text-black font-semibold text-2xl'>
              Example Usage
              </p><br />
              Here's a complete example of how to include and use the '{'<video-lazy-loading>'}' element in your HTML: <br />
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Video Lazy Loading Example</title>
          <!-- Include any necessary stylesheets or scripts here -->
</head>
<body>
          <!-- Your website content goes here -->
                  
          <!-- Add the video-lazy-loading element -->
          <video src="video-path.mp4"  controls></video>
          <video-lazy src="video.mp4" alt="vid" style="height: 200px; width: 400px;"></video-lazy>
          <script type="module" src="/src/main.jsx"></script>
          <script src="http://localhost:5000/main.js"></script>
                  
          <!-- Additional content can go here -->
</body>
</html>
`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />
              <p className='text-black font-semibold text-2xl'>
              Notes
              </p><br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li>Ensure the path provided in the 'data-video-source' attribute is correct and accessible from your website.</li>
                <li>You can include multiple '{'<video-lazy-loading>'}' elements on the same page if you need to lazy load multiple videos.</li>
              </ul><br />
              By following these steps, you can efficiently use the '{'<video-lazy-loading>'}' element to enhance the performance and user experience of your web pages.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoLazyLoading;