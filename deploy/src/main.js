import { createApp } from 'vue';

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Product Catalog', page: 'catalog' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Written Policy', page: 'written-policy' },
  { label: 'Delivery Policy', page: 'delivery-policy' },
  { label: 'Privacy Policy', page: 'privacy-policy' },
  { label: 'T&C', page: 'terms' },
];

const categories = [
  {
    name: 'Baby and Kids',
    text: 'Bulk lots for baby essentials, toys, soft goods, wipes, towels, personal care, and family-focused resale categories.',
    products: ['Baby powders', 'Baby towels and clothing', 'Creams, oils, wipes', 'Soft toys and accessories'],
    color: '#f4b400',
  },
  {
    name: 'Sports and Outdoors',
    text: 'Seasonal and everyday sporting goods for buyers serving online marketplaces, local stores, and resale customers.',
    products: ['Tennis balls and golf balls', 'Outdoor activity items', 'Fitness accessories', 'Seasonal sports goods'],
    color: '#1f8a70',
  },
  {
    name: 'DIY and Tools',
    text: 'Practical tool and home improvement inventory for trade buyers, household retailers, and marketplace resellers.',
    products: ['Screwdrivers and tape measures', 'Screws, tape, door handles', 'Electrical tools and drills', 'Paint brushes and dust sheets'],
    color: '#d95f32',
  },
  {
    name: 'Health and Household',
    text: 'High-demand household products with broad consumer appeal and repeat-purchase potential.',
    products: ['Cleaning supplies', 'Paper goods', 'Personal care basics', 'Household multipacks'],
    color: '#4b6cb7',
  },
  {
    name: 'Beauty and Personal Care',
    text: 'Wholesale beauty, grooming, skincare, and hygiene items suitable for resale buyers and online storefronts.',
    products: ['Hair care', 'Skin care', 'Oral care', 'Grooming accessories'],
    color: '#a855f7',
  },
  {
    name: 'Home and Kitchen',
    text: 'Useful home, kitchen, storage, and lifestyle products available in case-pack or mixed-lot quantities.',
    products: ['Kitchen accessories', 'Storage items', 'Home care products', 'Small household goods'],
    color: '#0f766e',
  },
];

const strengths = [
  'USA-based wholesale resale operation',
  'Bulk product lots for qualified buyers',
  'Case-pack and mixed-lot buying options',
  'Professional order communication',
  'Catalog-style inquiry process',
  'Support for online resale workflows',
];

const policySections = {
  'written-policy': {
    title: 'Written Policy',
    subtitle: 'Return, refund, and buyer communication policy for Varala Commerce wholesale orders.',
    blocks: [
      ['Order Confirmation', 'All wholesale orders are reviewed after buyer inquiry. Product availability, quantity, price, pickup or delivery terms, and payment requirements must be confirmed in writing before an order is considered accepted.'],
      ['Returns and Refunds', 'Because wholesale inventory is sold in bulk lots, returns are reviewed case by case. Products must be unused, unopened, and in the same condition received. Approved refunds may exclude delivery, handling, and restocking costs.'],
      ['Damaged or Incorrect Items', 'If an order arrives damaged or does not match the confirmed order details, buyers should contact Varala Commerce as soon as possible with the order number, photos, and a description of the issue.'],
      ['Business Buyer Responsibility', 'Buyers are responsible for reviewing product details, resale requirements, shipping terms, and marketplace rules before purchasing inventory.'],
    ],
  },
  'delivery-policy': {
    title: 'Delivery Policy',
    subtitle: 'How bulk inventory delivery, pickup, and shipping coordination works.',
    blocks: [
      ['Processing Time', 'Orders are generally prepared after written confirmation and payment clearance. Processing time depends on product availability, lot size, labeling needs, and delivery or pickup scheduling.'],
      ['Domestic Delivery', 'Varala Commerce is focused on wholesale resale within the United States. Delivery, freight, or pickup options are confirmed per order based on destination, order size, and carrier availability.'],
      ['Shipping Rates', 'Shipping, freight, pallet, or handling costs are calculated separately unless otherwise stated in the written quote. Buyers will receive delivery details before final order confirmation.'],
      ['International Shipping', 'International shipping is not offered by default. Buyers outside the United States may contact us, but orders are accepted only when logistics and compliance requirements can be handled clearly.'],
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'How Varala Commerce handles information submitted through this website.',
    blocks: [
      ['Information We Collect', 'We may collect your name, company name, email address, phone number, delivery location, product interests, and messages submitted through the contact form.'],
      ['How We Use Information', 'We use submitted information to respond to buyer inquiries, prepare quotes, discuss product availability, coordinate orders, and improve business communication.'],
      ['Information Sharing', 'We do not sell personal information. Information may be shared only when needed for order processing, delivery coordination, payment verification, legal compliance, or business operations.'],
      ['Data Protection', 'We take reasonable steps to protect buyer information and keep communications limited to legitimate business purposes related to wholesale resale.'],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Terms for using this website and requesting wholesale inventory from Varala Commerce.',
    blocks: [
      ['Website Use', 'This website is provided for business information and wholesale inquiry purposes. Submitting a form does not guarantee product availability, pricing, credit approval, or order acceptance.'],
      ['Wholesale Orders', 'All orders are subject to stock availability, minimum quantity requirements, payment confirmation, and written approval by Varala Commerce.'],
      ['Product Information', 'Product categories shown on this website are examples of inventory areas we may handle. Actual brands, SKUs, quantities, and pricing depend on current supply.'],
      ['Limitation of Liability', 'Buyers are responsible for confirming resale suitability, marketplace restrictions, product compliance, and destination requirements before purchase.'],
    ],
  },
};

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>',
};

createApp({
  data() {
    return {
      navItems,
      categories,
      strengths,
      policySections,
      icons,
      currentPage: 'home',
      form: { name: '', company: '', phone: '', email: '', address: '', message: '' },
      submitted: false,
    };
  },
  computed: {
    policyPage() {
      return this.policySections[this.currentPage];
    },
    formMessage() {
      if (!this.submitted) return 'Send your wholesale inquiry and we will respond with availability and next steps.';
      return `Thank you, ${this.form.name || 'buyer'}. Your inquiry has been prepared for Varala Commerce.`;
    },
  },
  mounted() {
    this.syncRoute();
    window.addEventListener('hashchange', this.syncRoute);
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.syncRoute);
  },
  methods: {
    syncRoute() {
      const page = window.location.hash.replace('#/', '') || 'home';
      this.currentPage = this.navItems.some((item) => item.page === page) ? page : 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    goTo(page) {
      window.location.hash = `#/${page}`;
    },
    submitForm() {
      this.submitted = true;
    },
  },
  template: `
    <div class="site-shell">
      <header class="nav">
        <button class="brand" @click="goTo('home')" aria-label="Varala Commerce home">
          <span class="brand-mark">VC</span>
          <span>Varala Commerce</span>
        </button>
        <nav aria-label="Primary navigation">
          <button v-for="item in navItems" :key="item.page" :class="{ active: currentPage === item.page }" @click="goTo(item.page)">
            {{ item.label }}
          </button>
        </nav>
      </header>

      <main>
        <section v-if="currentPage === 'home'" class="page home-page">
          <div class="hero">
            <div class="hero-copy">
              <p class="eyebrow">USA wholesale reselling</p>
              <h1>Welcome to Varala Commerce</h1>
              <p class="hero-text">
                We supply quality wholesale products in bulk for online retailers, Amazon sellers,
                local resale buyers, and growing businesses across the United States.
              </p>
              <div class="hero-actions">
                <button class="button primary" @click="goTo('catalog')">
                  View product catalog
                  <span v-html="icons.arrow"></span>
                </button>
                <button class="button secondary" @click="goTo('contact')">Contact us</button>
              </div>
            </div>
            <div class="hero-art">
              <span class="dot dot-large"></span>
              <span class="dot dot-small"></span>
              <div class="warehouse-circle">
                <span>Wholesale Inventory</span>
              </div>
            </div>
          </div>

          <section class="yellow-band">
            <div class="circle-photo"><span>Bulk Supply</span></div>
            <div>
              <p class="eyebrow dark">Wholesale capability</p>
              <h2>Scheduled delivery and dependable bulk supply.</h2>
              <p>
                From consumer goods to household essentials, Varala Commerce helps buyers source
                practical inventory with clear communication, lot details, and delivery planning.
              </p>
            </div>
          </section>

          <section class="section">
            <div class="section-heading">
              <p class="eyebrow">Why work with us</p>
              <h2>Built for buyers who need inventory they can resell.</h2>
            </div>
            <div class="strength-grid">
              <article v-for="item in strengths" :key="item">
                <span v-html="icons.check"></span>
                <p>{{ item }}</p>
              </article>
            </div>
          </section>
        </section>

        <section v-else-if="currentPage === 'about'" class="page text-page">
          <div class="page-heading">
            <p class="eyebrow">About us</p>
            <h1>Wholesale resale with practical buyer support.</h1>
          </div>
          <div class="copy-block">
            <p>
              Varala Commerce is a USA-based wholesale reselling business focused on sourcing
              and supplying bulk consumer products for resale buyers. Our goal is to make product
              inquiry, lot review, order communication, and delivery planning simple for business customers.
            </p>
            <p>
              We serve buyers who need categories such as baby and kids, health and household,
              beauty and personal care, sports and outdoors, DIY tools, home and kitchen, and other
              practical consumer goods.
            </p>
            <p>
              Our website helps customers understand what we offer, submit wholesale inquiries,
              and start a professional conversation before purchasing inventory.
            </p>
          </div>
          <div class="contact-card compact-contact">
            <h2>Get in touch</h2>
            <p>{{ formMessage }}</p>
            <button class="button primary" @click="goTo('contact')">Open contact form</button>
          </div>
        </section>

        <section v-else-if="currentPage === 'catalog'" class="page catalog-page">
          <div class="page-heading">
            <p class="eyebrow">Product catalog</p>
            <h1>Wholesale categories for resale buyers.</h1>
            <p>
              These are sample product areas Varala Commerce may source or supply in bulk.
              Final availability, brands, quantities, and pricing are confirmed after inquiry.
            </p>
          </div>

          <div class="catalog-list">
            <article v-for="category in categories" :key="category.name" class="catalog-row">
              <div>
                <h2>{{ category.name }}</h2>
                <p>{{ category.text }}</p>
                <p class="mini-heading">Here are a few items we may sell:</p>
                <ul>
                  <li v-for="product in category.products" :key="product">{{ product }}</li>
                </ul>
              </div>
              <div class="category-photo" :style="{ '--accent': category.color }">
                <span>{{ category.name.slice(0, 2) }}</span>
              </div>
            </article>
          </div>
        </section>

        <section v-else-if="currentPage === 'contact'" class="page contact-page">
          <div class="page-heading centered">
            <p class="eyebrow">Contact us</p>
            <h1>Get in touch</h1>
            <p>{{ formMessage }}</p>
          </div>
          <form class="contact-form" @submit.prevent="submitForm">
            <label><span>Full name*</span><input v-model="form.name" type="text" autocomplete="name" placeholder="Full name" required /></label>
            <label><span>Company name*</span><input v-model="form.company" type="text" placeholder="Company name" required /></label>
            <label><span>Company number</span><input v-model="form.phone" type="tel" autocomplete="tel" placeholder="Phone number" /></label>
            <label><span>Email*</span><input v-model="form.email" type="email" autocomplete="email" placeholder="Email" required /></label>
            <label><span>Address*</span><input v-model="form.address" type="text" autocomplete="street-address" placeholder="Address" required /></label>
            <label><span>Message*</span><textarea v-model="form.message" rows="5" placeholder="Tell us what products and quantities you need" required></textarea></label>
            <button class="button primary" type="submit">Submit</button>
          </form>
        </section>

        <section v-else class="page policy-page">
          <div class="page-heading">
            <p class="eyebrow">Varala Commerce</p>
            <h1>{{ policyPage.title }}</h1>
            <p>{{ policyPage.subtitle }}</p>
          </div>
          <div class="policy-copy">
            <article v-for="block in policyPage.blocks" :key="block[0]">
              <h2>{{ block[0] }}</h2>
              <p>{{ block[1] }}</p>
            </article>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div>
          <strong>Varala Commerce</strong>
          <p>USA wholesale reselling business</p>
          <p>varalacommerce.com</p>
        </div>
        <div>
          <strong>Business</strong>
          <p>Bulk inventory</p>
          <p>Wholesale resale</p>
          <p>Product inquiries</p>
        </div>
        <div>
          <strong>Policies</strong>
          <button @click="goTo('written-policy')">Written Policy</button>
          <button @click="goTo('delivery-policy')">Delivery Policy</button>
          <button @click="goTo('privacy-policy')">Privacy Policy</button>
          <button @click="goTo('terms')">Terms & Conditions</button>
        </div>
        <p class="copyright">&copy; 2026 Varala Commerce. All rights reserved.</p>
      </footer>
    </div>
  `,
}).mount('#app');
