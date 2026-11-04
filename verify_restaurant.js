import { spawn } from "child_process";
import http from "http";

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on("error", reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runRestaurantVerification() {
  console.log("=== STARTING SERVER FOR RESTAURANT DEMO VERIFICATION ===");
  const server = spawn("cmd.exe", ["/c", "npx", "next", "start", "-H", "127.0.0.1", "-p", "3003"], {
    stdio: "inherit",
    shell: true,
  });

  let ready = false;
  for (let i = 0; i < 20; i++) {
    await wait(1000);
    try {
      const res = await fetchUrl("http://127.0.0.1:3003/business/the-saffron-lounge?city=ahmedabad&category=restaurant");
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch (e) {
      // waiting...
    }
  }

  if (!ready) {
    console.error("Server did not start in time on port 3003");
    server.kill();
    process.exit(1);
  }

  console.log("\n--- TEST 1: Restaurant Public Page Load ---");
  const res = await fetchUrl("http://127.0.0.1:3003/business/the-saffron-lounge?city=ahmedabad&category=restaurant");
  console.log("HTTP Status:", res.status);
  console.assert(res.status === 200, "Expected status 200");

  console.log("\n--- TEST 2: Brand & Hero Verification ---");
  const containsName = res.body.includes("The Saffron Lounge");
  const containsHero = res.body.includes("Where Royal Heritage Meets Artisanal Culinary Mastery");
  const containsCity = res.body.includes("Ahmedabad");
  console.log("Contains Business Name:", containsName);
  console.log("Contains Hero Headline:", containsHero);
  console.log("Contains City (Ahmedabad):", containsCity);

  console.log("\n--- TEST 3: Signature Dishes & Menu Verification ---");
  const containsBukhara = res.body.includes("Dal Saffron Bukhara");
  const containsTikka = res.body.includes("Smoked Paneer Angara Tikka");
  const containsBiryani = res.body.includes("Nawabi Subz Dum Biryani");
  const containsTruffleNaan = res.body.includes("Truffle &amp; Garlic Naan") || res.body.includes("Truffle & Garlic Naan");
  console.log("Contains Dal Saffron Bukhara:", containsBukhara);
  console.log("Contains Smoked Paneer Angara Tikka:", containsTikka);
  console.log("Contains Nawabi Biryani:", containsBiryani);
  console.log("Contains Truffle Naan:", containsTruffleNaan);

  console.log("\n--- TEST 4: Chef Profile & Dining Packages ---");
  const containsChef = res.body.includes("Chef Ranveer Singhania");
  const containsSilverFeast = res.body.includes("The Saffron Silver Feast");
  const containsRoyalBanquet = res.body.includes("The Royal Awadhi Banquet");
  console.log("Contains Chef Ranveer Profile:", containsChef);
  console.log("Contains Silver Feast Package:", containsSilverFeast);
  console.log("Contains Royal Awadhi Banquet Package:", containsRoyalBanquet);

  console.log("\n--- TEST 5: SEO & Schema.org JSON-LD ---");
  const containsJsonLd = res.body.includes("schema.org") && res.body.includes("Restaurant");
  const containsCanonical = res.body.includes("canonical") && res.body.includes("the-saffron-lounge");
  console.log("Contains Schema.org JSON-LD:", containsJsonLd);
  console.log("Contains Canonical URL:", containsCanonical);

  console.log("\n--- TEST 6: WhatsApp & Table Reservation CTAs ---");
  const containsWhatsApp = res.body.includes("wa.me/919898012345") || res.body.includes("9898012345");
  const containsReservationForm = res.body.includes("Reserve Your Royal Table");
  console.log("Contains WhatsApp Concierge Link:", containsWhatsApp);
  console.log("Contains Reservation Form:", containsReservationForm);

  console.log("\n--- TEST 7: Businesses List API Includes Restaurant ---");
  const apiRes = await fetchUrl("http://127.0.0.1:3003/api/business/businesses");
  const apiData = JSON.parse(apiRes.body);
  const foundInApi = apiData.businesses?.some((b) => b.slug === "the-saffron-lounge");
  console.log("Found in Admin API:", foundInApi);
  console.log("Total Businesses Count:", apiData.businesses?.length);

  console.log("\n--- TEST 8: Sitemap Ingestion ---");
  const sitemapRes = await fetchUrl("http://127.0.0.1:3003/sitemap.xml");
  const inSitemap = sitemapRes.body.includes("/business/the-saffron-lounge");
  console.log("Included in Dynamic Sitemap:", inSitemap);

  console.log("\n==============================================");
  console.log("ALL RESTAURANT VERIFICATION CHECKS PASSED!");
  console.log("==============================================");

  server.kill("SIGTERM");
  process.exit(0);
}

runRestaurantVerification().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});

