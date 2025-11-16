import express from 'express';
import path from 'path';
import fs from 'fs';
import { registerRoutes } from '../server/routes';

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}

app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Register API routes
let routesInitialized = false;

const initializeRoutes = async () => {
  if (!routesInitialized) {
    const { createServer } = await import('http');
    const server = createServer(app);
    await registerRoutes(app);
    routesInitialized = true;
  }
};

// Serve static files from dist/public
const publicPath = path.join(process.cwd(), 'dist', 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Fallback to index.html for React routing
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

// Export handler for Vercel
export default async (req: any, res: any) => {
  try {
    await initializeRoutes();
    return app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
