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
    <loc>https://petwellbot.com/symptoms</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Pet Symptom Library - 30+ Expert Guides</image:caption>
      <image:title>Pet Symptom Directory</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-vomiting-yellow-foam</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Vomiting Yellow Foam - Causes &amp; Treatment</image:caption>
      <image:title>Dog Vomiting Yellow Foam</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-ate-chocolate</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Ate Chocolate - Emergency Response Guide</image:caption>
      <image:title>Dog Chocolate Toxicity</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-limping-no-pain</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Limping But No Pain - What It Means</image:caption>
      <image:title>Dog Limping No Pain</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-wont-drink-water</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Won't Drink Water - Causes &amp; Solutions</image:caption>
      <image:title>Dog Not Drinking Water</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-diarrhea-blood</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Diarrhea with Blood - Emergency Guide</image:caption>
      <image:title>Dog Bloody Diarrhea</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/senior-dog-weak-hind-legs</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Senior Dog Weak Hind Legs - Causes &amp; Care</image:caption>
      <image:title>Senior Dog Weak Legs</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/puppy-eating-grass-frantically</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Puppy Eating Grass Frantically - What to Do</image:caption>
      <image:title>Puppy Eating Grass</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-shaking-wont-eat</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Shaking and Won't Eat - Emergency Signs</image:caption>
      <image:title>Dog Shaking Not Eating</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-breathing-fast-sleeping</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Breathing Fast While Sleeping - Normal or Not?</image:caption>
      <image:title>Dog Fast Breathing Sleep</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/dog-licking-paws-frantically</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Dog Licking Paws Frantically - Causes &amp; Relief</image:caption>
      <image:title>Dog Licking Paws</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-vomiting-undigested-food</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Vomiting Undigested Food - Causes &amp; Treatment</image:caption>
      <image:title>Cat Vomiting Undigested</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-not-eating-drinking</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Not Eating or Drinking - Emergency Guide</image:caption>
      <image:title>Cat Not Eating Drinking</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-hiding-wont-come-out</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Hiding and Won't Come Out - What It Means</image:caption>
      <image:title>Cat Hiding Behavior</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-breathing-mouth-open</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Breathing with Mouth Open - Emergency Signs</image:caption>
      <image:title>Cat Open Mouth Breathing</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-drooling-acting-weird</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Drooling and Acting Weird - Warning Signs</image:caption>
      <image:title>Cat Drooling Weird</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-third-eyelid-showing</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Third Eyelid Showing - Causes &amp; Treatment</image:caption>
      <image:title>Cat Third Eyelid</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/kitten-not-pooping-2-days</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Kitten Not Pooping for 2 Days - What to Do</image:caption>
      <image:title>Kitten Not Pooping</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-meowing-loudly-at-night</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Meowing Loudly at Night - Solutions &amp; Causes</image:caption>
      <image:title>Cat Night Meowing</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/indoor-cat-trying-escape</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Indoor Cat Trying to Escape - Behavior Guide</image:caption>
      <image:title>Cat Escape Behavior</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/cat-urinating-outside-litter-box</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Cat Urinating Outside Litter Box - Solutions</image:caption>
      <image:title>Cat Litter Box Problems</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/parrot-plucking-feathers</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Parrot Plucking Feathers - Causes &amp; Solutions</image:caption>
      <image:title>Parrot Feather Plucking</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/budgie-sitting-bottom-cage</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Budgie Sitting at Bottom of Cage - Warning Signs</image:caption>
      <image:title>Budgie Bottom Sitting</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/bird-breathing-heavy-tail-bobbing</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Bird Breathing Heavy with Tail Bobbing - Emergency</image:caption>
      <image:title>Bird Breathing Heavy</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/hamster-not-eating-lethargic</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Hamster Not Eating and Lethargic - Care Guide</image:caption>
      <image:title>Hamster Not Eating</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/guinea-pig-wheeking-constantly</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Guinea Pig Wheeking Constantly - What It Means</image:caption>
      <image:title>Guinea Pig Wheeking</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/rabbit-not-pooping-normally</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Rabbit Not Pooping Normally - GI Stasis Guide</image:caption>
      <image:title>Rabbit Pooping Problems</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/ferret-losing-hair-patches</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Ferret Losing Hair in Patches - Causes &amp; Treatment</image:caption>
      <image:title>Ferret Hair Loss</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/chinchilla-fur-slipping</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Chinchilla Fur Slipping - Stress Response Guide</image:caption>
      <image:title>Chinchilla Fur Slipping</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/goldfish-swimming-upside-down</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Goldfish Swimming Upside Down - Swim Bladder Help</image:caption>
      <image:title>Goldfish Upside Down</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://petwellbot.com/betta-fish-not-eating-3-days</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://petwellbot.com/images/logo-icon.svg</image:loc>
      <image:caption>Betta Fish Not Eating for 3 Days - Recovery Guide</image:caption>
      <image:title>Betta Not Eating</image:title>
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
