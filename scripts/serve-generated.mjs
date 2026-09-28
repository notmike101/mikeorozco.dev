import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';

const root = resolve(process.argv[2] || '.output/public');
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff' };

createServer(async (req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  const file = resolve(root, `.${pathname}`);
  if (pathname.includes('\\') || pathname.includes('\0') || (file !== root && !file.startsWith(root + sep))) {
    res.writeHead(400).end(); return;
  }
  try {
    const info = await stat(file);
    if (info.isDirectory() && !pathname.endsWith('/')) {
      res.writeHead(301, { location: new URL(req.url, 'http://localhost').pathname + '/' + new URL(req.url, 'http://localhost').search }).end();
      return;
    }
    const path = info.isDirectory() ? resolve(file, 'index.html') : file;
    const body = await readFile(path);
    res.writeHead(200, { 'content-type': types[extname(path)] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (error) {
    if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') {
      console.error(error);
      res.writeHead(500).end(); return;
    }
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(await readFile(resolve(root, '404.html')));
  }
}).listen(port, '127.0.0.1', () => console.log(`Static preview: http://127.0.0.1:${port}`));
