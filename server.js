const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  // Prevent path traversal attacks
  const normalizedPath = path.normalize(filePath);
  const resolvedPath = path.resolve(normalizedPath);
  const baseDir = path.resolve('.');
  
  if (!resolvedPath.startsWith(baseDir)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>', 'utf-8');
    return;
  }

  const extname = String(path.extname(normalizedPath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(normalizedPath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        console.error('Server error:', error);
        res.writeHead(500);
        res.end('<h1>500 - Internal Server Error</h1>', 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Cabinet Design Pro development server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Error: Port ${PORT} is already in use.`);
    console.error(`   Please stop the other process or set a different port:`);
    console.error(`   PORT=3001 npm run dev`);
    process.exit(1);
  } else if (error.code === 'EACCES') {
    console.error(`❌ Error: Permission denied to use port ${PORT}.`);
    console.error(`   Try using a port number above 1024:`);
    console.error(`   PORT=3001 npm run dev`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});
