// ✅ src/pages/ServiceDetail.jsx - Full Pages for All Services
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


const services = {
   'website-development': {
    title: 'Website Development Company',
    subtitle: 'Responsive, fast & custom-designed websites for your business growth.',
    heroImg: 'https://creationmedia.in/wp-content/uploads/2021/10/web-development-banner-in-patna.jpg',
    heroAlt: 'Custom business website preview',
    heroHeight: 400, // you can use this for dynamic styling
    why: [
      'Custom design tailored to your brand identity',
      'Mobile-first, responsive layout across devices',
      'SEO-optimized structure for better rankings',
      'Fast load time & performance-focused',
      'Built using MERN stack (MongoDB, Express, React, Node)'
    ],
    process: [
      'Requirement gathering & wireframe design',
      'UI/UX prototyping with Figma/Adobe XD',
      'Full-stack development (frontend + backend)',
      'Cross-browser testing & performance tuning',
      'Launch, hosting setup & maintenance'
    ],
    features: [
      'Landing Pages', 'Corporate Websites', 'Admin Panels', 'Blog Systems', 'CMS Integration'
    ],
    ctaText: 'Build Your Website'
  },

  'search-engine-optimization-seo': {
    title: 'SEO Services',
    subtitle: 'Rank higher on Google and drive organic traffic to your site.',
    heroImg: 'https://blueinteractiveagency.com/wp-content/uploads/2022/07/What-to-Expect-From-a-Fort-Lauderdale-SEO-Agency-Near-Me.jpg',
    why: [
      'Detailed SEO audit & analysis',
      'On-page SEO (tags, speed, schema)',
      'High-quality backlinks & outreach',
      'Google Business Optimization',
      'Keyword strategy & content plan'
    ],
    process: [
      'SEO audit & keyword research',
      'On-page & technical optimization',
      'Content creation & link building',
      'Monthly performance tracking',
      'Continuous improvement strategies'
    ],
    features: [
      'Local SEO', 'Ecommerce SEO', 'Technical SEO', 'Off-page SEO', 'Monthly Reports'
    ],
    ctaText: 'Boost Your Ranking'
  },

  'online-advertising': {
    title: 'Meta & Google Ads Management',
    subtitle: 'Generate leads & sales with high-performing paid campaigns.',
    heroImg: 'https://img.pikbest.com/templates/20210924/bg/ffa4c2bfa4e78.png!w700wp',
    why: [
      'Custom ad strategy based on your goals',
      'Ad creative & copywriting included',
      'Targeted audience setup with retargeting',
      'A/B testing & ad optimization',
      'Conversion tracking & performance analysis'
    ],
    process: [
      'Business goal analysis & funnel setup',
      'Audience research & campaign planning',
      'Ad creative development & placement',
      'Monitoring & budget optimization',
      'Detailed weekly reports & scaling'
    ],
    features: [
      'Meta (Facebook/Instagram) Ads', 'Google Search/Display Ads', 'YouTube Ads', 'Conversion Tracking', 'Remarketing'
    ],
    ctaText: 'Start Advertising'
  },

  'e-commerce-account-management': {
    title: 'Ecommerce Account Management (Amazon, Etsy)',
    subtitle: 'Get your products listed, optimized, and sold on top marketplaces.',
    heroImg: 'https://img1.wsimg.com/isteam/ip/a7e03c85-c0f2-437a-b493-450c4bd554c6/account%20management.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2480,h:1240,cg:true',
    why: [
      'Account setup from scratch',
      'Product listing creation & optimization',
      'Keyword research & SEO for listings',
      'Inventory & order management',
      'Sales boosting strategies'
    ],
    process: [
      'Marketplace analysis & brand setup',
      'Product optimization with images & copy',
      'SEO & competitor targeting',
      'Performance tracking & ad campaigns',
      'Regular reporting & support'
    ],
    features: [
      'Amazon Seller Central', 'Etsy Storefronts', 'Product SEO', 'Fulfillment Tracking', 'Brand Registry'
    ],
    ctaText: 'Manage My Store'
  },

  'web-promotions': {
    title: 'Web Promotions & Digital Visibility',
    subtitle: 'Amplify your brand presence with strategic digital promotion services.',
    heroImg: 'https://www.copperbaydigital.co.uk/wp-content/uploads/2023/06/PPC.jpg',
    why: [
      'Digital strategy planning & targeting',
      'Content-based promotion across channels',
      'SEO, SMO & link outreach synergy',
      'Performance-focused campaign execution',
      'Traffic and conversion optimization'
    ],
    process: [
      'Understand your business goals',
      'Channel strategy & content planning',
      'Execution via content, SEO, and ads',
      'Performance monitoring',
      'Retargeting & optimization'
    ],
    features: [
      'Blog Promotion', 'Press Releases', 'Forum & Community Marketing', 'Influencer Collaboration', 'Traffic Analytics'
    ],
    ctaText: 'Promote My Website'
  },

  'crm-and-automation': {
    title: 'CRM & Automation Setup',
    subtitle: 'Automate lead capture, follow-ups, and customer management.',
    heroImg: 'https://www.iesgp.com/hs-fs/hubfs/WHAT-IS-CUSTOMER-RELATIONSHIP-MANAGEMENT.jpg?width=1800&name=WHAT-IS-CUSTOMER-RELATIONSHIP-MANAGEMENT.jpg',
    why: [
      'WhatsApp Automation & Chatbots (Tidio, Meta)',
      'Basic CRM Setup: HubSpot, Zoho, Mailchimp',
      'Email/SMS workflow automation',
      'Lead capture integration',
      'Follow-up automation & analytics'
    ],
    process: [
      'CRM platform selection & goal mapping',
      'Pipeline setup & contact segmentation',
      'Automation rules & trigger setup',
      'Chatbot training & integration',
      'Testing & ongoing optimization'
    ],
    features: [
      'Chatbots', 'Auto-Reply Setup', 'CRM Dashboard', 'Email Sequences', 'Google Sheet Integration'
    ],
    ctaText: 'Automate My Business'
  },

  'social-media-management': {
    title: 'Social Media Promotions & Management',
    subtitle: 'Engage your audience with creative content & growth strategies.',
    heroImg: 'https://www.seoclerk.com/pics/001/145/003/e7e21e57bb6d8222842d58392b9caa9b.png',
    why: [
      'Platform-specific content planning',
      'Hashtag research & engagement strategies',
      'Reels, Stories, and post scheduling',
      'Monthly growth tracking',
      'Ad campaign integration'
    ],
    process: [
      'Content calendar design',
      'Graphic/video asset creation',
      'Engagement & hashtag strategy',
      'Performance review & reporting',
      'Strategy optimization monthly'
    ],
    features: [
      'Instagram Management', 'Facebook Page Growth', 'LinkedIn Posts', 'Content Strategy', 'Reel Editing'
    ],
    ctaText: 'Grow My Socials'
  },

  'content-writing-copywriting': {
    title: 'Content Writing & Copywriting',
    subtitle: 'High-quality content that educates, engages, and converts.',
    heroImg: 'https://bhaviksarkhedi.com/wp-content/uploads/2018/11/content-writing.jpg',
    why: [
      'SEO-friendly blogs and articles',
      'Persuasive ad & website copywriting',
      'Product descriptions that convert',
      'Brand tone consistency',
      'Creative storytelling with a purpose'
    ],
    process: [
      'Brief collection & audience analysis',
      'Keyword research (if needed)',
      'Drafting & revisions',
      'Tone & readability optimization',
      'Delivery in preferred format'
    ],
    features: [
      'Blog Writing', 'Ad Copy', 'Landing Page Copy', 'Product Descriptions', 'Social Media Captions'
    ],
    ctaText: 'Get Content Now'
  },

  'email-marketing': {
    title: 'Email Marketing Services',
    subtitle: 'Convert your subscribers into loyal customers with smart email flows.',
    heroImg: 'https://scontent.fjdh1-2.fna.fbcdn.net/v/t1.6435-9/52884256_678125962604102_1713938344787836928_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_ohc=pusNSGtxrhIQ7kNvwEDpPyB&_nc_oc=AdkmR7-y_WcLmaHN0QUFKCAAmpXWLS3O1_PpJ2bNGWDdcioodlUDgUzGwDoKpOqkhkg&_nc_zt=23&_nc_ht=scontent.fjdh1-2.fna&_nc_gid=e2Tp5CTq_C5ct7lne70_IQ&oh=00_AfSc4NjNrqDYg1jUUzsBxZpr0OXDtGSCf3afhH95iQXpRg&oe=68A609BC',
    why: [
      'Attractive email design templates',
      'Workflow automation (welcome, cart abandon, etc.)',
      'Audience segmentation',
      'Campaign scheduling & A/B testing',
      'Performance tracking & reports'
    ],
    process: [
      'Goal setting & audience strategy',
      'Email template & automation design',
      'Campaign setup in Mailchimp/Sendinblue/etc.',
      'Testing & refinement',
      'Monthly performance review'
    ],
    features: [
      'Newsletters', 'Transactional Emails', 'Drip Campaigns', 'Email Automation', 'Subscriber Management'
    ],
    ctaText: 'Launch Email Campaigns'
  }
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = services[serviceSlug];
  const navigate = useNavigate();

  const handleCTAClick = () => {
    localStorage.setItem('scrollToContact', 'true');
    navigate('/ ');
  };

  if (!service) return <h2 className="service-detail">Service Not Found</h2>;

  return (
    <div className="service-detail">
      <Helmet>
        <title>{service.title} | Tech Traffic Solutions</title>
        <meta name="description" content={service.subtitle} />
      </Helmet>

      <section className="service-hero">
        {service.heroImg && (
  <div className="hero-image-wrapper">
    <img src={service.heroImg} alt={service.title} className="hero-image" />
  </div>
)}

        <h1>{service.title}</h1>
        <p>{service.subtitle}</p>
      </section>

      <section className="service-section">
        <h2>Why Choose Us?</h2>
        <ul>
          {service.why.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2>Our Process</h2>
        <ol>
          {service.process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="service-section">
        <h2>What We Offer</h2>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
      </section>

      <div className="service-cta">
        <button onClick={handleCTAClick} className="button">
          {service.ctaText}
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;