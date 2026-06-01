import { createApp } from 'vue';

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Product Catalog', page: 'catalog' },
  { label: 'Contact Us', page: 'contact' },
];

const footerPolicies = [
  { label: 'Purchasing Policy', page: 'purchasing-policy' },
  { label: 'Delivery Policy', page: 'delivery-policy' },
  { label: 'Privacy Policy', page: 'privacy-policy' },
  { label: 'Terms & Conditions', page: 'terms' },
];

const servedGroups = [
  'Amazon Sellers',
  'Ecommerce Businesses',
  'Retail Stores',
  'Online Resellers',
  'Bulk Inventory Buyers',
  'General Merchandise Businesses',
];

const homeStrengths = [
  'USA-Based Wholesale Business',
  'Bulk Inventory Solutions',
  'Professional Order Communication',
  'Flexible Wholesale Purchasing',
  'Reliable Product Inquiry Process',
  'Ecommerce-Friendly Supply Support',
];

const aboutStrengths = [
  'USA-Based Business',
  'Professional Communication',
  'Ecommerce-Friendly Purchasing',
  'Bulk Inventory Support',
  'Streamlined Wholesale Process',
  'Reliable Business Operations',
];

const industries = [
  'Ecommerce Sellers',
  'Online Retailers',
  'Wholesale Buyers',
  'Resellers',
  'Retail Businesses',
];

const processSteps = [
  'Browse Product Categories',
  'Submit Product Inquiry',
  'Receive Product Availability & Pricing',
  'Order Coordination & Delivery',
];

const categories = [
  'Health & Household',
  'Grocery & Gourmet',
  'Home & Kitchen',
  'Beauty & Personal Care',
  'Pet Supplies',
  'Baby Products',
  'General Merchandise',
];

const policySections = {
  'purchasing-policy': {
    title: 'Purchasing Policy',
    blocks: [
      'Product availability may vary',
      'Orders subject to confirmation',
      'Pricing may change without notice',
      'Wholesale inquiries reviewed individually',
      'Buyer responsible for resale compliance',
    ],
  },
  'delivery-policy': {
    title: 'Delivery Policy',
    blocks: [
      'Processing timelines vary by order',
      'Shipping methods depend on order size',
      'Tracking shared after dispatch',
      'Delivery timing may vary',
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    blocks: [
      'We may collect customer information submitted through forms, including names, business details, email addresses, phone numbers, product interests, and messages.',
      'We may use cookies or similar browser technologies to support basic website functionality and improve the browsing experience.',
      'Customer information is used for product inquiries, email communication, quote follow-up, order coordination, and business support.',
      'Varala Commerce LLC takes reasonable steps to protect customer information and does not sell personal information.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    blocks: [
      'This website is provided for business information and wholesale inquiry purposes.',
      'Product inquiry terms are subject to review by Varala Commerce LLC.',
      'Pricing is subject to change without notice.',
      'Inventory availability is not guaranteed.',
      'Varala Commerce LLC is not liable for resale decisions, marketplace restrictions, supplier delays, or indirect business losses.',
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
      footerPolicies,
      servedGroups,
      homeStrengths,
      aboutStrengths,
      industries,
      processSteps,
      categories,
      policySections,
      icons,
      currentPage: 'home',
      submitted: false,
      catalogForm: {
        fullName: '',
        businessName: '',
        email: '',
        productCategory: '',
        estimatedQuantity: '',
        message: '',
      },
      contactForm: {
        name: '',
        businessName: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  computed: {
    policyPage() {
      return this.policySections[this.currentPage];
    },
    successMessage() {
      return 'Thank you. Your inquiry has been received. Our team will contact you shortly.';
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
      const pages = [...this.navItems, ...this.footerPolicies].map((item) => item.page);
      this.currentPage = pages.includes(page) ? page : 'home';
      this.submitted = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    goTo(page) {
      window.location.hash = `#/${page}`;
    },
    scrollToCatalogForm() {
      document.getElementById('catalog-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    submitForm() {
      this.submitted = true;
    },
  },
  template: `
    <div class="site-shell">
      <header class="nav">
        <button class="brand" @click="goTo('home')" aria-label="Varala Commerce LLC home">
          <span class="brand-mark">VC</span>
          <span>Varala Commerce LLC</span>
        </button>
        <nav aria-label="Primary navigation">
          <button
            v-for="item in navItems"
            :key="item.page"
            :class="{ active: currentPage === item.page }"
            @click="goTo(item.page)"
          >
            {{ item.label }}
          </button>
        </nav>
      </header>

      <main>
        <section v-if="currentPage === 'home'" class="home-page">
          <section class="hero">
            <div class="hero-overlay"></div>
            <div class="hero-content">
              <p class="eyebrow">USA wholesale distribution</p>
              <h1>Reliable Wholesale Distribution for Ecommerce & Retail Buyers</h1>
              <p>
                Varala Commerce LLC supports ecommerce sellers, online retailers, and resale businesses with dependable wholesale sourcing, inventory coordination, and professional order handling across the United States.
              </p>
              <div class="hero-actions">
                <button class="button primary" @click="goTo('catalog')">
                  View Catalog
                  <span v-html="icons.arrow"></span>
                </button>
                <button class="button secondary dark" @click="goTo('contact')">Contact Us</button>
              </div>
            </div>
          </section>

          <section class="section">
            <div class="section-heading centered">
              <h2>Who We Serve</h2>
            </div>
            <div class="card-grid">
              <article v-for="group in servedGroups" :key="group" class="info-card">
                <span v-html="icons.check"></span>
                <h3>{{ group }}</h3>
              </article>
            </div>
          </section>

          <section class="section black-section">
            <div class="section-heading centered">
              <h2>Why Work With Us</h2>
            </div>
            <div class="card-grid">
              <article v-for="item in homeStrengths" :key="item" class="info-card dark-card">
                <span v-html="icons.check"></span>
                <h3>{{ item }}</h3>
              </article>
            </div>
          </section>

          <section class="section">
            <div class="section-heading centered">
              <h2>Simple Wholesale Process</h2>
            </div>
            <ol class="process-list">
              <li v-for="(step, index) in processSteps" :key="step">
                <span>{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </li>
            </ol>
          </section>

          <section class="cta-section">
            <h2>Looking for reliable wholesale inventory?</h2>
            <p>Contact our team to discuss product availability and wholesale purchasing options.</p>
            <button class="button primary" @click="goTo('contact')">Contact Our Team</button>
          </section>
        </section>

        <section v-else-if="currentPage === 'about'" class="page">
          <div class="page-heading">
            <p class="eyebrow">About us</p>
            <h1>About Varala Commerce LLC</h1>
            <p>
              Varala Commerce LLC is a USA-based wholesale distribution business focused on supporting ecommerce sellers, online retailers, and resale businesses. We work to provide dependable inventory sourcing, professional communication, and streamlined purchasing support for qualified buyers.
            </p>
          </div>

          <section class="content-panel">
            <h2>Our Mission</h2>
            <p>Our mission is to support ecommerce and retail businesses through reliable wholesale sourcing and professional inventory coordination.</p>
          </section>

          <section class="section compact">
            <div class="section-heading">
              <h2>Why Work With Us</h2>
            </div>
            <div class="card-grid">
              <article v-for="item in aboutStrengths" :key="item" class="info-card">
                <span v-html="icons.check"></span>
                <h3>{{ item }}</h3>
              </article>
            </div>
          </section>

          <section class="content-panel">
            <h2>Industries We Support</h2>
            <ul class="clean-list">
              <li v-for="industry in industries" :key="industry">{{ industry }}</li>
            </ul>
          </section>
        </section>

        <section v-else-if="currentPage === 'catalog'" class="page">
          <div class="page-heading">
            <p class="eyebrow">Product catalog</p>
            <h1>Product Categories</h1>
            <p>Product availability may vary based on supplier inventory and purchasing requirements.</p>
          </div>

          <div class="category-grid">
            <article v-for="category in categories" :key="category" class="category-card">
              <span v-html="icons.check"></span>
              <h3>{{ category }}</h3>
            </article>
          </div>

          <button class="button primary catalog-cta" @click="scrollToCatalogForm">Request Product Availability</button>

          <form id="catalog-form" class="form-panel" @submit.prevent="submitForm">
            <h2>Request Product Availability</h2>
            <p v-if="submitted" class="success-message">{{ successMessage }}</p>
            <label><span>Full Name</span><input v-model="catalogForm.fullName" type="text" required /></label>
            <label><span>Business Name</span><input v-model="catalogForm.businessName" type="text" required /></label>
            <label><span>Email Address</span><input v-model="catalogForm.email" type="email" required /></label>
            <label>
              <span>Product Category</span>
              <select v-model="catalogForm.productCategory" required>
                <option value="" disabled>Select a category</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            </label>
            <label><span>Estimated Quantity</span><input v-model="catalogForm.estimatedQuantity" type="text" required /></label>
            <label><span>Message</span><textarea v-model="catalogForm.message" rows="5" required></textarea></label>
            <button class="button primary" type="submit">Submit Inquiry</button>
          </form>
        </section>

        <section v-else-if="currentPage === 'contact'" class="page">
          <div class="page-heading">
            <p class="eyebrow">Contact</p>
            <h1>Contact Us</h1>
          </div>
          <div class="contact-layout">
            <aside class="business-info">
              <h2>Varala Commerce LLC</h2>
              <p><strong>Email:</strong> <a href="mailto:sales@varalacommerce.com">sales@varalacommerce.com</a></p>
              <p><strong>Location:</strong> Seattle, Washington, USA</p>
              <p><strong>Hours:</strong> Monday - Friday | 9:00 AM - 5:00 PM PST</p>
            </aside>

            <form class="form-panel contact-form" @submit.prevent="submitForm">
              <h2>Send Message</h2>
              <p v-if="submitted" class="success-message">{{ successMessage }}</p>
              <label><span>Name</span><input v-model="contactForm.name" type="text" required /></label>
              <label><span>Business Name</span><input v-model="contactForm.businessName" type="text" required /></label>
              <label><span>Email</span><input v-model="contactForm.email" type="email" required /></label>
              <label><span>Phone Number</span><input v-model="contactForm.phone" type="tel" /></label>
              <label><span>Message</span><textarea v-model="contactForm.message" rows="5" required></textarea></label>
              <button class="button primary" type="submit">Send Message</button>
            </form>
          </div>
        </section>

        <section v-else class="page policy-page">
          <div class="page-heading">
            <p class="eyebrow">Policies</p>
            <h1>{{ policyPage.title }}</h1>
          </div>
          <ul class="policy-list">
            <li v-for="item in policyPage.blocks" :key="item">{{ item }}</li>
          </ul>
        </section>
      </main>

      <footer class="site-footer">
        <div>
          <h2>Varala Commerce LLC</h2>
          <p>Wholesale distribution & inventory sourcing for ecommerce and retail businesses.</p>
          <p><a href="mailto:sales@varalacommerce.com">sales@varalacommerce.com</a></p>
          <p>Seattle, Washington, USA</p>
          <p>Supporting ecommerce, retail, and resale businesses across the United States.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <button v-for="item in navItems" :key="item.page" @click="goTo(item.page)">{{ item.label }}</button>
        </div>
        <div>
          <h3>Policies</h3>
          <button v-for="item in footerPolicies" :key="item.page" @click="goTo(item.page)">{{ item.label }}</button>
        </div>
        <p class="copyright">&copy; 2026 Varala Commerce LLC. All rights reserved.</p>
      </footer>
    </div>
  `,
}).mount('#app');
