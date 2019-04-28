const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: 'src/sw-template.js',
    swDest: 'public/sw.js',
    globDirectory: 'build',
    globPatterns: [
      '**\/*.{js,json,css,html,png,webp,woff,ttf,svg,eot}',
    ],
    maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
  }).then(({count, size, warnings}) => {
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();
