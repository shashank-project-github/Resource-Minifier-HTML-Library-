'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const ImageCompressor = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Image Compressor
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is image compression?
              </p>
              <br />
              Image compression is a technique used to reduce the file size of an image without significantly affecting its visual quality. This is achieved by removing redundant data or applying lossy compression methods that discard some less noticeable information.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Why use image compression?
              </p>
              <br />
              There are several benefits to using image compression, especially for web development:

              <br />
              <br />
              <ul>
                <li>Faster Loading Times: Smaller image files load quicker, improving website performance and user experience.</li>
                <li>Bandwidth Reduction: Reduced file sizes mean less data needs to be transferred, saving bandwidth and potentially lowering hosting costs.</li>
                <li>Improved SEO: Faster loading pages tend to rank higher in search engine results.</li>
                <li>Enhanced User Experience: Users expect fast loading times. Image compression helps deliver a smoother browsing experience.</li>
              </ul>

              <br />
              <br />
              **How to use the Image Compressor Element:**

              <br />
              <br />
              1. Include the image-compress element in your HTML code.

              <br />
              2. Set the following attributes:
              <ul>
                <li>**data-image-source** (required): Path to the image file you want to compress.</li>
                <li>**data-output-format** (optional): Specify the desired output format (e.g., "jpg", "png", "webp"). Defaults to the original format if not specified.</li>
                <li>**data-quality** (optional): Set the compression quality for lossy formats (e.g., JPG, WEBP) between 0 (lowest quality, smallest size) and 100 (highest quality, largest size). Defaults to 80.</li>
              </ul>

              <br />
              <br />
              **Example Usage:**

              <br />

              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<<img-minified src="img..jpg" style="height: 200px; width: 400px;" alt="alt_name" />`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>





              {/* my content  */}
              <br />
              <br />

              <p className='text-black font-semibold text-2xl'>
                What is image compression?
              </p>
              <br />
              Image compression is a technique used to reduce the file size of an image without significantly affecting its visual quality. This is achieved by removing redundant data or applying lossy compression methods that discard some less noticeable information.
              <br />
              <br />
              <p className='text-black font-semibold text-2xl'>
                Why use image compression?
              </p>
              <br />
              There are several benefits to using image compression, especially for web development:
              <br />
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>Faster Loading Times:</span>  Smaller image files load quicker, improving website performance and user experience.</li>
                <li><span className='underline text-black'>Bandwidth Reduction:</span>  Reduced file sizes mean less data needs to be transferred, saving bandwidth and potentially lowering hosting costs.</li>
                <li><span className='underline text-black'>Improved SEO:</span>  Faster loading pages tend to rank higher in search engine results.</li>
                <li><span className='underline text-black'>Enhanced User Experience:</span>  Users expect fast loading times. Image compression helps deliver a smoother browsing experience.</li>
              </ul><br /><br />
              <p className='text-black font-semibold text-2xl'>
                Step-by-Step Instructions
              </p>
              <br />
              <p className='text-black font-semibold'>
                Step 1: Include the Image-Compress Element in Your HTML Code
              </p><br />
              First, add the '{'<img-minified>'}' element to your HTML file. This element will be responsible for compressing the specified image.
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<img-minified src="img_path.png" alt="alt_name" />`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />
              <p className='text-black font-semibold'>
                Step 2: Set the Required and Optional Attributes
              </p><br />
              To configure the image compression, you need to set the following attributes on the '{'<img-minified>'}' element:
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>data-image-source (required):</span>This attribute specifies the path to the image file you want to compress.</li>
                <li><span className='underline text-black'>data-output-format (optional):</span> This attribute allows you to specify the desired output format for the compressed image (e.g., "jpg", "png", "webp"). If not specified, the image will default to its original format.</li>
                <li><span className='underline text-black'>data-quality (optional): </span>  This attribute sets the compression quality for lossy formats like JPG and WEBP. The value should be between 0 (lowest quality, smallest size) and 100 (highest quality, largest size). The default value is 80 if not specified.</li>
              </ul>
              Here is an example of how to use these attributes in your HTML code:
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<img src="img.jpg" style="height: 200px; width: 400px;" alt="aa"/>
<img-minified src="img..jpg" style="height: 200px; width: 400px;" alt="alt_name" />
<script type="module" src="/src/main.jsx"></script>
<script src="http://localhost:5000/main.js"></script>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />
              <p className='text-black font-semibold text-2xl'>
                Detailed Attribute Descriptions
              </p><br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li><span className='underline text-black'>data-image-source (required): </span> This attribute is the path to the image you want to compress. Ensure that the path is correct and points to the existing image file.</li>
                <div className='mt-4 px-8'>
                  <CopyBlock
                    language={'html'}
                    text={`data-image-source="path/to/your/image.jpg"`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </div><br />
                <li><span className='underline text-bold text-black'>data-output-format (optional): </span> Use this attribute to specify the format in which the compressed image should be saved. Supported formats include "jpg", "png", and "webp". If you do not specify this attribute, the image will retain its original format.</li>
                <div className='mt-4 px-8'>
                  <CopyBlock
                    language={'html'}
                    text={`data-output-format="webp"`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </div><br />
                <li><span className='underline text-black'>data-quality (optional):</span> This attribute sets the compression quality for formats that support lossy compression. Valid values range from 0 to 100, with higher values indicating better quality and larger file sizes. The default is set to 80.</li>
                <div className='mt-4 px-8'>
                  <CopyBlock
                    language={'html'}
                    text={`data-quality="75"`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </div>
              </ul>
              <p className='text-black font-semibold text-2xl'>
                Example Usage
              </p><br />
              Below is a complete example demonstrating how to include and configure the '{'<img-minified>'}' element in your HTML file:
              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image Compression Example</title>
</head>
<body>
        <img src="img.jpg" alt="aa"/>
        <img-minified src="img..jpg" alt="alt_name" />
        <script type="module" src="/src/main.jsx"></script>
        <script src="http://localhost:5000/main.js"></script>
</body>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div><br />
              In this example, the '{'<img-minified>'}' element compresses the image located at "images/large_photo.jpg" into a WebP format with a quality setting of 75. The compressed image is then displayed on the webpage with the specified alt text.
            </p><br />
            <p className='text-black font-semibold text-2xl'>
            Conclusion
            </p><br />
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>By following these steps, you can efficiently compress images on your website using the '{'<img-minified>'}' element. This will help improve your site's load time and overall performance. For further customization and advanced usage, refer to additional documentation and resources provided with your image compression tool.</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCompressor;