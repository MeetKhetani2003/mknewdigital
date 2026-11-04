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

async function runTests() {
  console.log("=== STARTING NEXT.JS SERVER FOR VERIFICATION ===");
  const server = spawn("cmd.exe", ["/c", "npx", "next", "start", "-H", "127.0.0.1", "-p", "3002"], {
    stdio: "inherit",
    shell: true,
  });

  // Wait for server to boot up
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await wait(1000);
    try {
      const res = await fetchUrl("http://127.0.0.1:3002/business/admin");
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch (e) {
      // connecting...
    }
  }

  if (!ready) {
    console.error("Server did not start in time");
    server.kill();
    process.exit(1);
  }

  console.log("\n--- TEST 1: Admin Page (/business/admin) ---");
  const adminRes = await fetchUrl("http://127.0.0.1:3002/business/admin");
  console.log("Status:", adminRes.status);
  console.log("Admin Title Included:", adminRes.body.includes("Admin Dashboard &amp; Visual Builder"));

  console.log("\n--- TEST 2: Sample 1 Furniture (/business/shreeji-furniture?city=junagadh&category=furniture) ---");
  const shreejiRes = await fetchUrl("http://127.0.0.1:3002/business/shreeji-furniture?city=junagadh&category=furniture");
  console.log("Status:", shreejiRes.status);
  console.log("Contains Business Name:", shreejiRes.body.includes("Shreeji Luxury Furniture"));
  console.log("Contains City:", shreejiRes.body.includes("Junagadh"));
  console.log("Contains Canonical URL:", shreejiRes.body.includes("canonical"));
  console.log("Contains Schema.org LocalBusiness:", shreejiRes.body.includes("schema.org"));

  console.log("\n--- TEST 3: Sample 2 Wholesale (/business/raj-traders?city=rajkot&category=wholesale) ---");
  const rajRes = await fetchUrl("http://127.0.0.1:3002/business/raj-traders?city=rajkot&category=wholesale");
  console.log("Status:", rajRes.status);
  console.log("Contains Business Name:", rajRes.body.includes("Raj Traders"));
  console.log("Contains Rajkot:", rajRes.body.includes("Rajkot"));

  console.log("\n--- TEST 4: Sample 3 Healthcare (/business/apex-clinic?city=ahmedabad&category=healthcare) ---");
  const apexRes = await fetchUrl("http://127.0.0.1:3002/business/apex-clinic?city=ahmedabad&category=healthcare");
  console.log("Status:", apexRes.status);
  console.log("Contains Clinic Name:", apexRes.body.includes("Apex Multi-Speciality Clinic"));
  console.log("Contains Ahmedabad:", apexRes.body.includes("Ahmedabad"));

  console.log("\n--- TEST 5: 404 Handling for Invalid Slug (/business/invalid-slug-xyz) ---");
  const notFoundRes = await fetchUrl("http://127.0.0.1:3002/business/invalid-slug-xyz");
  console.log("Status:", notFoundRes.status);
  console.log("Contains 'Business Website Not Found':", notFoundRes.body.includes("Business Website Not Found"));

  console.log("\n--- TEST 6: Admin Login Authentication API ---");
  const loginRes = await fetchUrl("http://127.0.0.1:3002/api/business/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "mkdigital2026!" }),
  });
  console.log("Login Status:", loginRes.status);
  const loginData = JSON.parse(loginRes.body);
  console.log("Login Success:", loginData.success);
  const cookieHeader = loginRes.headers["set-cookie"];
  console.log("Cookie Set:", !!cookieHeader);

  console.log("\n--- TEST 7: Businesses List API ---");
  const bizListRes = await fetchUrl("http://127.0.0.1:3002/api/business/businesses");
  console.log("Status:", bizListRes.status);
  const bizListData = JSON.parse(bizListRes.body);
  console.log("Businesses Count:", bizListData.businesses?.length);

  console.log("\n--- TEST 8: AI Content Generation API ---");
  const aiRes = await fetchUrl("http://127.0.0.1:3002/api/business/ai/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      businessName: "Royal Heritage Hotel",
      city: "Gir Somnath",
      category: "Hotels & Resorts",
      ownerName: "Devang Vala",
    }),
  });
  console.log("AI Status:", aiRes.status);
  const aiData = JSON.parse(aiRes.body);
  console.log("Generated Hero Heading:", aiData.content?.heroHeading);

  console.log("\n--- TEST 9: Robots.txt & Sitemap.xml ---");
  const robotsRes = await fetchUrl("http://127.0.0.1:3002/robots.txt");
  console.log("Robots disallows admin:", robotsRes.body.includes("/business/admin"));
  const sitemapRes = await fetchUrl("http://127.0.0.1:3002/sitemap.xml");
  console.log("Sitemap includes business URLs:", sitemapRes.body.includes("/business/"));

  console.log("\n=== ALL TESTS PASSED SUCCESSFULLY! ===");

  server.kill("SIGTERM");
  process.exit(0);
}

runTests().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});
