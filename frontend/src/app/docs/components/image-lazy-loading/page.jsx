'use client';
import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const ImageLazyLoading = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Image Lazy Loading
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold text-2xl'>
                What is image lazy loading?
              </p>
              <br />
              Image lazy loading is an optimization technique that delays the loading of images outside the viewport (the visible area of the web page) until they are about to become visible to the user. This improves perceived website performance by prioritizing the loading of content that users see first.

              <br />
              <br />
              <p className='text-black font-semibold text-2xl'>
                Benefits of image lazy loading:
              </p>
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>Faster Page Load Times: </span>By deferring image loading, only essential content loads initially, leading to a quicker initial page load.</li>
                <li><span className='underline text-black'>Improved User Experience:</span>  Users don't have to wait for all images to load before interacting with the page.</li>
                <li><span className='underline text-black'>Reduced Bandwidth Usage:</span>  Only images that enter the viewport are downloaded, saving bandwidth and potentially lowering data costs for users.</li>
              </ul><br />
              <p className='text-black font-semibold text-2xl'>
                How to Use the '{'<image-lazy-loading>'}' Element
              </p>
              <br />
              <p className='text-black font-semibold '>
                Step-by-Step Instructions
              </p><br />
              <p className='text-black font-semibold '>
                1. Include the '{'<image-lazy-loading>'}' Element in Your HTML Code
              </p>
              <br />
              To use the '{'<image-lazy-loading>'}' element, you need to add it to your HTML code where you want the image to appear.
              <br /><br />
              <p className='text-black font-semibold '>
                2. Set the 'data-image-source' Attribute
              </p><br />
              The data-image-source attribute is required and should be set to the path of the image you want to lazy load.
              <br />
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<img-lazy src="image-path.jpg" alt="img" style=""><img-lazy>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />

              <p className='text-black font-semibold text-2xl'>
                Example
              </p><br />
              Below is an example of how to add the '{'<image-lazy-loading>'}' element to your HTML file: <br />
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lazy Loading Image Example</title>
</head>
<body>
          <h1>Welcome to the Image Lazy Loading Example</h1>
                      
        <!-- Lazy Loading Image Element -->
        <img src="img.jpg" alt="img" style="height: 200px; width: 400px;">
        <img-lazy src="img.jpg" alt="img" style="height: 200px; width: 400px;"><img-lazy>
        <script type="module" src="/src/main.jsx"></script>
        <script src="http://localhost:5000/main.js"></script>                  
</body>
</html>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />


              {/* <p className='text-black font-semibold text-2xl'>
                Advanced Usage
              </p><br />
              To lazy load multiple images, simply include multiple '{'<image-lazy-loading>'}' elements with different 'data-image-source' attributes. <br />
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Multiple Lazy Loading Images</title>
</head>
<body>
          <h1>Multiple Lazy Loading Images Example</h1>
                      
          <!-- First Lazy Loading Image -->
          <image-lazy-loading data-image-source="path/to/your/image1.jpg"></image-lazy-loading>
                      
          <!-- Second Lazy Loading Image -->
          <image-lazy-loading data-image-source="path/to/your/image2.jpg"></image-lazy-loading>
                      
          <!-- Third Lazy Loading Image -->
          <image-lazy-loading data-image-source="path/to/your/image3.jpg"></image-lazy-loading>
                      
</body>
</html>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br /> */}

              <p className='text-black font-semibold text-2xl'>
              Conclusion
              </p><br />
              By using the '{'<image-lazy-loading>'}' element, you can significantly improve the load time and performance of your web pages, providing a better user experience.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLazyLoading