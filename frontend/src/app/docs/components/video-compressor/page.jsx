'use client';
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

const VideoCompression = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Video Compressor
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is video compression?
              </p>
              <br />
              Video compression is a technique used to reduce the file size of a video without significantly affecting its visual quality. Similar to image compression, it can involve removing redundant data or applying lossy compression methods.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Why use video compression?
              </p>
              <br />
              There are several benefits to using video compression, especially for web development:

              <br />
              <br />
              <ul>
                <li>Faster Loading Times: Smaller video files load quicker, improving website performance and user experience.</li>
                <li>Bandwidth Reduction: Reduced file sizes mean less data needs to be transferred, saving bandwidth and potentially lowering hosting costs.</li>
                <li>Improved SEO: Faster loading pages tend to rank higher in search engine results.</li>
                <li>Enhanced User Experience:</li>

              </ul>
              Enhanced User Experience: Users expect smooth video playback. Video compression helps reduce buffering and deliver a better viewing experience.
              <br />
              <br />
              How to use the Video Compressor Element:

              <br />
              <br />

              Include the video-compress element in your HTML code.
              <br />
              2. Set the following attributes:
              <ul>
                <li>data-video-source (required): Path to the video file you want to compress.</li>
                <li>data-output-format (optional): Specify the desired output format (e.g., "mp4", "webm"). Defaults to the original format if not specified.</li>
                <li>data-quality (optional): Set the compression quality for lossy formats (e.g., MP4) between 0 (lowest quality, smallest size) and 100 (highest quality, largest size). Defaults to 80.</li>
              </ul>

              <br />
              <br />
              Example Usage:

              <br />

              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<body>
          <video-minified src="video.mp4" style="height: 200px; width: 400px;"></video-minified>
          <script type="module" src="/src/main.jsx"></script>
          <script src="http://localhost:5000/main.js"></script>
          <!-- Other body content goes here -->
</body>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCompression