const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDir = path.join(__dirname, 'public', 'images', 'portfolio');

const projects = [
  // INDUSTRIAL
  { id: "daftari-industries", title: "Daftari Industries", cat: "Industrial", url: "https://daftariindustries.vercel.app/", desc: "Leading industrial enterprise landing page with products catalog and inquiry setup." },
  { id: "gwgc", title: "GWGC", cat: "Industrial", url: "https://www.gwgc.ca/", desc: "Canadian industrial service provider website highlighting specialized industrial projects." },
  { id: "green-wave-packaging", title: "Green Wave Packaging", cat: "Industrial", url: "https://www.greenwavepackaging.ca/", desc: "Sustainable industrial packaging supplier with detailed products showcase." },
  { id: "rickey-exports", title: "Rickey Exports", cat: "Industrial", url: "https://www.rickeyexports.com/", desc: "Global exports business portal showing manufacturing and global shipping solutions." },
  { id: "dk-enterprise", title: "DK Enterprise", cat: "Industrial", url: "https://dk-enterprise.vercel.app/", desc: "High-performance industrial machinery and tools directory." },
  { id: "gravity", title: "Gravity", cat: "Industrial", url: "https://gravity-gamma-three.vercel.app/", desc: "Sleek industrial products catalog with a modern interactive portfolio." },
  { id: "anvil", title: "Anvil", cat: "Industrial", url: "https://anvil-eta.vercel.app/", desc: "Rugged and modern industrial components showcase for heavy machinery." },
  { id: "swastik", title: "Swastik", cat: "Industrial", url: "https://swastik-pi.vercel.app/", desc: "Industrial parts manufacturer portal showcasing precision machining." },
  { id: "ajanta-motors", title: "Ajanta Motors", cat: "Industrial", url: "https://ajantamotors.vercel.app/", desc: "Automotive and industrial motor parts supplier directory." },
  { id: "ravi-prakash-industries", title: "Ravi Prakash Industries", cat: "Industrial", url: "https://raviprakashindustries.in/", desc: "Manufacturing company site showcasing chemical and processing equipment." },

  // HEALTHCARE
  { id: "arshad-dr", title: "Arshad Dr.", cat: "Healthcare", url: "https://arshad-dr.vercel.app/", desc: "Professional doctor portfolio with direct appointment request systems." },
  { id: "varun-dr", title: "Varun Dr.", cat: "Healthcare", url: "https://varundr.vercel.app/", desc: "Modern clinical website for patient onboarding and health consultation details." },
  { id: "dr-jhatka", title: "Dr. Jhatka", cat: "Healthcare", url: "https://www.drjhatka.com/", desc: "Doctor booking and medical treatment catalog with custom animations." },
  { id: "varenyam", title: "Varenyam", cat: "Healthcare", url: "https://varenyam.vercel.app/", desc: "Healthcare and wellness clinic portfolio highlighting patient care services." },
  { id: "ravi-dr", title: "Ravi", cat: "Healthcare", url: "https://ravi-orpin-beta.vercel.app/", desc: "Personal medical practitioner portal for consultation booking." },
  { id: "medlife", title: "Medlife", cat: "Healthcare", url: "https://medlife-dusky.vercel.app/", desc: "Modern healthcare platform presentation with treatment and medical plans." },
  { id: "bhuvika-medicare", title: "Bhuvika Medicare", cat: "Healthcare", url: "https://healthcarewebsite-wine.vercel.app/", desc: "Medicare services and diagnostic center listing website." },
  { id: "dental-aesthetics", title: "Dental Aesthetics", cat: "Healthcare", url: "https://www.drseemadermadent.in/", desc: "Premium dermatology and dental clinic website with service catalog." },

  // E-COMMERCE
  { id: "branded-collections", title: "Branded Collections", cat: "E-commerce", url: "https://brandedcollections.in/", desc: "Fully functional premium fashion e-commerce storefront." },
  { id: "childrens-ecommerce", title: "Children's E-commerce", cat: "E-commerce", url: "https://ecommerce-children.vercel.app/", desc: "Kids apparel e-commerce store with fully operational shopping cart." },
  { id: "somnathnx", title: "SomnathNX", cat: "E-commerce", url: "https://somnathnx.com/", desc: "Traditional and modern clothing store with payment gateway integration." },
  { id: "groovy-foods", title: "Groovy Foods", cat: "E-commerce", url: "https://www.groovyfoods.in/", desc: "Inquiry-based gourmet food catalog and wholesale supplier." },
  { id: "furniture", title: "Furniture", cat: "E-commerce", url: "https://furniture-mu-lemon.vercel.app/", desc: "Bespoke furniture collection catalog with WhatsApp inquiry option." },
  { id: "cow-dung-products", title: "Cow Dung Products", cat: "E-commerce", url: "https://cowdung-products.vercel.app/", desc: "Organic agricultural products catalog with custom inquiry forms." },
  { id: "fashion-kurti-saree", title: "Fashion / Kurti Saree", cat: "E-commerce", url: "https://fashion-ecom-inquiry.vercel.app/", desc: "B2B clothing inquiry platform showing latest catalog." },
  { id: "aone-furniture", title: "Aone Furniture", cat: "E-commerce", url: "https://aonefurniture.vercel.app/", desc: "Premium home and office furniture showroom inquiry site." },
  { id: "suntesto-ecommerce", title: "Suntesto E-commerce", cat: "E-commerce", url: "https://suntesto-ecom.vercel.app/", desc: "Dynamic product platform under development with order requests." },

  // BUSINESS
  { id: "mashru", title: "Mashru", cat: "Business", url: "https://mashru2.vercel.app/", desc: "Premium local textiles business landing page." },
  { id: "bansi", title: "Bansi", cat: "Business", url: "https://bansi-zp2a.vercel.app/", desc: "Corporate business website highlighting services and client success." },
  { id: "groovy-cafe", title: "Groovy Cafe", cat: "Business", url: "https://groovycafe.in/", desc: "Restaurant and cafe website with interactive food menu and booking." },
  { id: "bsr-worldwide", title: "BSR Worldwide", cat: "Business", url: "https://www.bsrworldwide.in/", desc: "Import-export consultancy website highlighting global trade lanes." },
  { id: "mahatvi", title: "Mahatvi", cat: "Business", url: "https://www.mahatvi.com/", desc: "Modern business website showcasing corporate solutions." },
  { id: "palera-design", title: "Palera Design", cat: "Business", url: "https://www.paleradesign.com/", desc: "Bespoke design studio portfolio showcasing high-end interior architecture." },
  { id: "shynex-detailing", title: "Shynex Detailing", cat: "Business", url: "https://www.shynexdetailing.ca/", desc: "Premium car detailing and automotive protection studio website." },
  { id: "food-vally", title: "Food Vally", cat: "Business", url: "https://foodvally-lime.vercel.app/", desc: "Local food ordering and kitchen services portfolio." },
  { id: "sundryer", title: "SunDryer", cat: "Business", url: "https://sundryer.in", desc: "Commercial solar dryer systems manufacturer website." },
  { id: "maa-shiva-services", title: "Maa Shiva Services", cat: "Business", url: "https://maashivaservices.in", desc: "Professional services listing and booking platform." },
  { id: "durga-transport-services", title: "Durga Transport Services", cat: "Business", url: "https://durgatransportservices.in", desc: "Logistics and transport fleet management business site." },
  { id: "sasuma-spices", title: "Sasuma Spices", cat: "Business", url: "https://shasuma-spices.vercel.app/", desc: "Authentic spices and seasoning manufacturer brand website." },
  { id: "actual-overseas", title: "Actual Overseas", cat: "Business", url: "https://makhana-red.vercel.app/", desc: "Makhana and dry fruits exporter global business portal." },
  { id: "madhav-travels", title: "Madhav Travels", cat: "Business", url: "https://madhavtravels.vercel.app/", desc: "Tour operator and travel agency booking website." },
  { id: "mahi-parlour", title: "Mahi Parlour", cat: "Business", url: "https://mahi-parlour.vercel.app/", desc: "Beauty salon and bridal makeup services portfolio." },
  { id: "opal", title: "Opal", cat: "Business", url: "https://opal-ivory-ten.vercel.app/", desc: "Bespoke business consulting and advisory portal." },
  { id: "raisha-textiles", title: "Raisha Textiles", cat: "Business", url: "https://raisha-taxtiles.vercel.app/", desc: "Textile manufacturer business website displaying product line." },

  // INSTITUTIONAL
  { id: "rsd-institute", title: "RSD Institute", cat: "Institutional", url: "https://www.rsdminstitute.com/", desc: "Higher education institute portal with admissions, courses, and faculty." },
  { id: "mahakali-tuition", title: "Mahakali Tuition", cat: "Institutional", url: "https://mahakali-tution.vercel.app/", desc: "Coaching center website with student portals and course listings." },
  { id: "grow-with-amit", title: "Grow With Amit", cat: "Institutional", url: "https://growwithamit.mkdigitalnexus.in/", desc: "E-learning and educational coaching consultancy." },
  { id: "viren-surati", title: "Viren Surati", cat: "Institutional", url: "https://www.virensurati.in", desc: "Educational speaker and career counselor profile site." },
  { id: "dronacharya-consultancy", title: "Dronacharya Consultancy", cat: "Institutional", url: "https://dronacharya-consultancy.vercel.app/", desc: "Professional education and institutional consulting advisor." },

  // OTHER
  { id: "donga", title: "Donga", cat: "Other", url: "https://donga-ca.vercel.app/", desc: "Tax and chartered accounting consultancy website." },
  { id: "new-angle-interior", title: "New Angle Interior", cat: "Other", url: "https://nwstudio-beta.vercel.app/", desc: "Stunning interior design portfolio with project galleries." },
  { id: "blueray-goa", title: "BlueRay Goa", cat: "Other", url: "https://blueraygoa.in", desc: "Boutique hotel in Goa with room preview and direct reservation inquiries." },
  { id: "urvika-foundation", title: "Urvika Foundation", cat: "Other", url: "https://urvikafoundation.mkdigitalnexus.in/", desc: "Non-profit organization platform for social causes." },
  { id: "green-society", title: "Green Society", cat: "Other", url: "https://green-social.vercel.app/", desc: "Environmental and NGO website highlighting sustainability initiatives." },
  { id: "vce-gujarat", title: "VCE Gujarat", cat: "Other", url: "https://vcegujarat.in", desc: "Government service portal mockup for rural operators." },
  { id: "ishanya", title: "Ishanya", cat: "Other", url: "https://ishanya-pied.vercel.app/", desc: "Real estate builder and developers business showcase." },
  { id: "eternal-studio", title: "Eternal Studio", cat: "Other", url: "https://theeternalstudio.com", desc: "Professional photography and videography booking portfolio." },
  { id: "book", title: "Book", cat: "Other", url: "https://book.mkdigitalnexus.in/", desc: "Interactive digital product brochure and agency portfolio." },
  { id: "ici", title: "ICI", cat: "Other", url: "https://ici-sage.vercel.app/", desc: "Industrial training and business services mockup." },
  { id: "national-transportation", title: "National Transportation", cat: "Other", url: "https://national-transportation.vercel.app/", desc: "Freight forwarding and logistics service platform." },
  { id: "up-youth-association", title: "UP Youth Association", cat: "Other", url: "https://up-youth-association.mkdigitalnexus.in/", desc: "Community association and social club portal." },
  { id: "ankan", title: "Ankan", cat: "Other", url: "https://ankan.mkdigitalnexus.in/", desc: "Bespoke branding and advertising agency portfolio." }
];

async function run() {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Starting Puppeteer screenshot collection for ${projects.length} websites...`);
  console.log(`Using Edge: ${edgePath}`);
  console.log(`Saving images to: ${outputDir}`);

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--hide-scrollbars'
    ]
  });

  const concurrency = 3;
  let index = 0;
  let successCount = 0;
  let failCount = 0;

  async function worker(workerId) {
    while (index < projects.length) {
      const currentIndex = index++;
      const p = projects[currentIndex];
      const filename = `${p.id}.png`;
      const outputPath = path.join(outputDir, filename);

      console.log(`[Worker ${workerId}] [${currentIndex + 1}/${projects.length}] Screenshotting: ${p.title} (${p.url})`);

      let page;
      try {
        page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        
        // Navigate
        await page.goto(p.url, { waitUntil: 'load', timeout: 35000 });
        
        // Wait 4 seconds for loading animations, fade-ins, and dynamic content to load
        await new Promise(r => setTimeout(r, 4500));
        
        await page.screenshot({ path: outputPath, type: 'png' });
        console.log(`[Worker ${workerId}]  -> SUCCESS: Captured ${filename}`);
        successCount++;
      } catch (err) {
        console.error(`[Worker ${workerId}]  -> FAILED for ${p.title}:`, err.message);
        failCount++;
      } finally {
        if (page) {
          try {
            await page.close();
          } catch(e) {}
        }
      }
    }
  }

  // Launch workers
  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker(i + 1));
  }
  await Promise.all(workers);

  await browser.close();
  console.log("\nScreenshot harvesting complete!");
  console.log(`Captured: ${successCount}, Failed: ${failCount}`);
}

run().catch(console.error);
