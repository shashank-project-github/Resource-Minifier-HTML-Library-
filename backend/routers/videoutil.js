const ffmpegStatic = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');

// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

const compressVideo = (cb) => {

  // Run FFmpeg
  ffmpeg()

    // Input file
    .input('./static/uploads/video.mp4')

    // Scale the video to 720 pixels in height. The -2 means FFmpeg should figure out the
    // exact size of the other dimension. In other words, to make the video 720 pixels wide
    // and make FFmpeg calculate its height, use scale=720:-2 instead.
    .outputOptions('-vf', 'scale=-2:480')

    // Output file
    .saveToFile('./static/uploads/output.mp4')

    // Log the percentage of work completed
    .on('progress', (progress) => {
      if (progress.percent) {
        console.log(`Processing: ${Math.floor(progress.percent)}% done`);
      }
    })

    // The callback that is run when FFmpeg is finished
    .on('end', () => {
      console.log('FFmpeg has finished.');
      cb();
    })

    // The callback that is run when FFmpeg encountered an error
    .on('error', (error) => {
      console.error(error);
    });
}


module.exports = compressVideo;