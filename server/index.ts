import dotenv from "dotenv";
dotenv.config();

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // CRITICAL: Add sitemap route FIRST, before anything else
  console.log("🚨 REGISTERING SITEMAP ROUTE IN INDEX.TS");
  app.get("/sitemap.xml", (req, res) => {
    console.log("🗺️ SITEMAP ROUTE HIT FROM INDEX.TS - SUCCESS!");
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://petwellbot.com/</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo.svg</image:loc>
      <image:caption>PetWellBot - AI Pet Health Assistant</image:caption>
      <image:title>PetWellBot Logo</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-health-guide</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Comprehensive Dog Health Guide - Expert Care Tips</image:caption>
      <image:title>Dog Health Care</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-care-tips</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Complete Cat Care Tips - Feline Health &amp; Wellness</image:caption>
      <image:title>Cat Health Care</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/bird-health-basics</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Bird Health Basics - Avian Care &amp; Wellness Guide</image:caption>
      <image:title>Bird Health Care</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/small-pet-care</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Small Pet Care Guide - Rabbits, Hamsters &amp; More</image:caption>
      <image:title>Small Pet Health</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/digestive-issues</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Pet Digestive Issues - Causes, Symptoms &amp; Treatment</image:caption>
      <image:title>Digestive Health for Pets</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/vomiting-nausea</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Pet Vomiting &amp; Nausea - When to Worry &amp; How to Help</image:caption>
      <image:title>Pet Vomiting Treatment</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/loss-of-appetite</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Pet Loss of Appetite - Causes &amp; Solutions</image:caption>
      <image:title>Pet Appetite Problems</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/lethargy-fatigue</loc>
    <lastmod>2025-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Pet Lethargy &amp; Fatigue - Understanding &amp; Treatment</image:caption>
      <image:title>Pet Energy &amp; Wellness</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/about</loc>
    <lastmod>2025-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://petwellbot.com/contact</loc>
    <lastmod>2025-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://petwellbot.com/privacy-policy</loc>
    <lastmod>2025-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://petwellbot.com/terms-of-service</loc>
    <lastmod>2025-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://petwellbot.com/medical-disclaimer</loc>
    <lastmod>2025-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;
    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemapContent);
  });

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
