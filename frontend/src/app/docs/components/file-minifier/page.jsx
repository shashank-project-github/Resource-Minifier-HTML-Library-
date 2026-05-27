'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const FileMinifier = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6">
              File Minifier
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold text-2xl'>
                What is file minifier?

              </p>
              <br />
              HTMLMinifier compresses and optimizes CSS and JS files by removing extra characters and whitespace, thus making the resulting file smaller in size. This procedure improves website performance by reducing load times and bandwidth consumption.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Advantages of using File Minifier.
              </p>
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li>Speeding up Loading time: Minified CSS and JS files are faster to load because they are smaller in size and take less time for data transfer from the server to the user’s browser.</li>
                <li>Reduced bandwidth: Smaller files consume fewer network resources, which could be particularly useful on mobile networks users or cutting server costs.
                </li>
                <li>Better performance: When you minimize your CSS and JS, you increase efficiency across each of your web pages which ultimately leads to an improved user experience.
                </li>
              </ul>

              <p className='text-black font-semibold text-2xl'>
                Why do we use file minifier?

              </p>
              <br />
              A file minifier HTML library is a tool designed to reduce the size of CSS and JS files by eliminating unnecessary characters such as whitespace, line breaks, and comments without affecting the functionality or appearance of the webpage. This process, known as minification, helps to improve website performance by decreasing load times and reducing bandwidth usage. Minified HTML files are quicker to download and render, resulting in a better user experience, especially on mobile devices and slower internet connections. Popular HTML minifiers include HTMLMinifier, Terser, and Minify. These libraries can often be integrated into build processes using task runners like Gulp or Webpack.<br /><br />

              To use an HTML minifier, you typically install the library through a package manager like npm and configure it to process your CSS and JS files. For instance, with HTMLMinifier, you would install it via npm and then set up a script in your build process to automatically minify your CSS and JS files. The configuration allows you to specify which elements to preserve, such as certain whitespace or comments, and to control the degree of minification. This automation ensures that your HTML is always optimized without requiring manual intervention, making it an essential tool for modern web development.<br /><br />

              {/* Css minifier  */}
              <p className='text-black font-semibold text-2xl'>
                How to Minify Your CSS File Using {'<file-minify>'}
              </p>
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                <li className='text-xl'>Overview</li>
              </ul>
              The '{'<file-minify>'}' tag is a convenient tool for minifying your CSS files directly within your HTML document. This feature allows you to reduce the size of your CSS files, optimizing them for faster loading times and improved website performance.
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 "><br />
                <li className='text-xl'>Usage</li>
              </ul>
              To minify your CSS file using '{'<file-minify>'}', follow these simple steps:
              <br />
              <br />
              
              <p className='text-black font-semibold '>
              Step 1: Include the '{'<file-minify>'}' Tag <br /> <br /> 
              </p>
              Replace ' "your_js_file.js" ' with the path to your JavaScript file that you want to minify. <br />
              Place the '{'<file-minify>'}' tag within the '{'<body>'}' section of your HTML document, like this:
              <div className="container mx-auto p-4">
                <div className="demo">
                  <CopyBlock
                    language={'html'}
                    text={`<body>
        <file-minify data-file-source="styles.css" data-file-type="css"></file-minify>
        <script src="http://localhost:5000/main.js"></script>
        <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
        <!-- Other head content goes here -->
</body>`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />

                </div>
              </div>
              <br />
              <p className='text-black font-semibold '>
              Step 2: Specify the CSS File
              </p>
              <p className='mt-3'>You need to provide <strong>data-file-type</strong> "css" attribute inside the element</p>
              In the 'data-file-source' attribute, specify the path to your CSS file that you want to minify. For example:
              <div className="container mx-auto p-4">
                <div className="demo">
                  <CopyBlock
                    language={'html'}
                    text={`<file-minify data-file-source="your_css_file.css" data-file-type="css"></file-minify>`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />

                </div>
              </div>
              Replace "your_css_file.css" with the relative or absolute path to your CSS file.
              <br /><br />
              <p className='text-black font-semibold '>
              Step 3: Save and Refresh 
              </p><br />
              Save your HTML file, and then refresh your web page. The {'<file-minify>'} tag will automatically minify your specified CSS file during page load.
              <br />
              <br />
              <p className='text-black font-semibold'>
                Example:
              </p>
              <br />
              Consider the following example:
              <br />
              <div className="container mx-auto p-4">
                <div className="demo">
                  <CopyBlock
                    language={'html'}
                    text={`<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Minify CSS Example</title>
</head>
<body>
        <file-minify data-file-source="styles.css" data-file-type="css"></file-minify>
        <script src="http://localhost:5000/main.js"></script>
        <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
        <!-- Your HTML content goes here -->
</body> `}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />

                </div>
              </div>
              In this example, styles.css is the CSS file located in the same directory as the HTML file. Replace "styles.css" with the path to your own CSS file.
              <br />
              <br />
              <p className='text-black font-semibold'>
                Conclusion
              </p>
              <br />
              Using '{'<file-minify>'}' tag is a straightforward way to minify your CSS files directly within your HTML document, helping to optimize your website's performance without the need for external tools or plugins.
              <br />
              <br />
              <br />


              {/* js minifier  */}
              <p className='text-black font-semibold text-2xl'>
              Minify Your JavaScript Files with {'<file-minify>'}
              </p>
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li className='text-xl'>Introduction</li>
              </ul>
              The '{'<file-minify>'}' component provides an easy way to minify your JavaScript files directly within your HTML code. By simply adding a few attributes to the '{'<file-minify>'}' tag, you can optimize your JavaScript files for faster loading times and improved performance.
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 "><br />
                <li className='text-xl'>Getting Started</li>
              </ul>
              To minify your JavaScript file, follow these simple steps:
              <br />
              <br />
              
              <p className='text-black font-semibold '>
              Step 1: Include the '{'<file-minify>'}' Tag 
              </p><br />
              You need to provide 'data-file-type' "css" attribute inside the element
              Place the '{'<file-minify>'}' tag within the '{'<body>'}' section of your HTML document, like this:
              <div className="container mx-auto p-4">
                <div className="demo">
                  <CopyBlock
                    language={'html'}
                    text={`<body>
        <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
        <script src="http://localhost:5000/main.js"></script>
        <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
        <!-- Other body content goes here -->
</body>`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />

                </div>
              </div>
              <br />
              <p className='text-black font-semibold '>
              Step 2: Specify Your JavaScript File 
              </p><br />Replace ' "your_js_file.js" ' with the path to your JavaScript file that you want to minify.
              <p className='mt-3'>You need to provide <strong>data-file-type</strong> "js" attribute inside the element</p>
              <br />
              <br />
              <p className='text-black font-semibold '>
              Step 3: Enjoy Minified JavaScript
              </p><br />
              That's it! Your JavaScript file will now be minified automatically when the page loads, thanks to the '{'<file-minify>'}' tag.
              <br />
              <br />
              <p className='text-black font-semibold text-2xl'>
              Attributes
              </p>
              <br />
              The '{'<file-minify>'}' tag supports the following attributes:
              <br />
              <br />
              <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8 ">
                <li>'data-file-source' : Specifies the path to your JavaScript file.</li>
                <li>'data-file-type' : Specifies the type of file to minify (in this case, "js" for JavaScript).</li>
              </ul>
              <p className='text-black font-semibold'>
                Example:
              </p>
              <br />
              Here's a complete example of how to use the '{'<file-minify>'}' tag:
              <br />
              <div className="container mx-auto p-4">
                <div className="demo">
                  <CopyBlock
                    language={'html'}
                    text={`<body>
          <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
          <script src="http://localhost:5000/main.js"></script>
          <file-minify data-file-source="script.js" data-file-type="js"></file-minify>
</body>`}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />

                </div>
              </div>
              In this example, styles.css is the CSS file located in the same directory as the HTML file. Replace "styles.css" with the path to your own CSS file.
              <br />
              <br />
              <p className='text-black font-semibold'>
                Conclusion
              </p>
              <br />
              Using the '{'<file-minify>'}' tag, you can easily optimize your JavaScript files for better performance without the need for external tools or libraries. Start minifying your JavaScript files today and see the difference it makes in your web applications!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileMinifier;