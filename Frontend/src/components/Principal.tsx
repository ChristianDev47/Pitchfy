import Hero from './Hero';
import Visibility from './Visibility';
import Content from './Content';
import Benefits from './Benefits';
import ChooseUs from './ChooseUs';
import Testimonials from './Testimonials';
import Payment from './Payment';
import FAQs from './FAQs';
import Stats from './Stats';
import Header from './Header';
import Footer from './Footer';
import { footerData } from '../utils/navigation';
import FloatingChat from './ui/Bot';

const Principal = () => {
  return (
    <div className='w-full h-full font-sans'>
      <Header isSticky showRssFeed showToggleTheme/>
      <FloatingChat/>
      {/* Hero */}
      <Hero/>

      {/* Visibility */}
      <Visibility
        id='visibility'
        tagline="AI-Driven Visibility"
        title="Amplify Your Storytelling with AI"
        subtitle="Our AI-powered platform helps you craft stories that catch the attention of major news outlets. Increase your chances of being featured in prestigious publications."
      />
      
      {/* Content */}
      <Content
        tagline="How It Works!"
        title="Discover the simple steps that bring your ideas to life"
        title2="Answer Questions"
        description="Click the chatbot button in the bottom right corner and share your story through our guided interview process."
        bg='bg-blue-50'
        isReversed
        isAfterContent
        items={[
          {
            title: 'Start the journey easily',
            description: 'Click the chatbot button in the bottom right corner to get started. Our user-friendly interface will guide you through the process.',
          },
          {
            title: 'Intuitive interview process',
            description: 'Answer a series of tailored questions designed to understand your story or insights. Whether personal, professional, or promotional, we’ll help shape your narrative.',
          },
          {
            title: 'Personalized interaction',
            description: 'Share your experiences and ideas effectively, with each question crafted to help communicate your message clearly.',
          },
          {
            title: 'Efficient and engaging',
            description: 'Our simple process ensures that you can focus on what matters: sharing your story in the most impactful way possible.',
          },
        ]}
        image='/images/hw1.webp'
      />

      <Content
        isAfterContent
        title2="AI Magic"
        description="Our AI crafts compelling, SEO-optimized stories that capture attention and transform your answers into professional articles."
        bg='bg-blue-50'
        items={[
          {
            title: 'Transform your story with AI',
            description: 'Once you’ve shared your story, our advanced AI technology refines your responses using cutting-edge natural language processing.',
          },
          {
            title: 'SEO optimization',
            description: 'The AI ensures your content is clear, engaging, and optimized for search engines, enhancing visibility and discoverability.',
          },
          {
            title: 'Professional article crafting',
            description: 'Our AI generates polished, compelling articles that effectively communicate your message to your audience.',
          },
          {
            title: 'Stand out online',
            description: 'With SEO-enhanced content, your article is designed to perform better in search results, helping you stand out in the digital world.',
          },
        ]}
        image='/images/hw2.webp'
      />

      <Content
        isAfterContent
        isReversed
        title2="Reach Journalists"
        description="Connect with relevant journalists in your industry."
        bg='bg-blue-50'
        items={[
          {
            title: 'Connect with the right journalists',
            description: `Once your story is polished, we match you with journalists who are relevant to your industry or niche.`,
          },
          {
            title: 'Increase media visibility',
            description: `Whether you want to be featured in top outlets or collaborate on in-depth interviews, our platform helps you reach the right media professionals.`,
          },
          {
            title: 'Leverage a powerful network',
            description: `Tap into our extensive network of industry journalists to gain visibility and credibility..`,
          },
          {
            title: 'Boost credibility and awareness',
            description: `Our connections help raise awareness about your work, boosting your credibility in the media and giving your story the attention it deserves.`,
          }
        ]}
        image='/images/hw5.webp'
      />
  
      {/* Benefits */}
      <Benefits
        title="Benefits of Being Published"
        items={[
          { title: '1: Gain Authority', description: 'Establish yourself as a thought leader in your industry and build credibility with your audience.', icon: 'tabler:star' },
          { title: '2: Attract Investors', description: 'Increase visibility among potential investors and showcase your business potential.', icon: 'tabler:rocket' },
          { title: '3: Visa Support', description: 'Strengthen your visa applications with published articles demonstrating your expertise.', icon: 'tabler:e-passport' },
          { title: '4: Reach Customers', description: 'Expand your customer base and increase brand awareness through media exposure.', icon: 'tabler:speakerphone' },
        ]}
        image='/images/Benefits.png'
      />

      {/* Choose Us */}
      <ChooseUs
        title="Why Choose Us"
        subtitle="The Smart Way to Share Your Story and Gain Recognition"
        tagline="Share your story"
        bg="bg-blue-50"
        items={[
          {
            title: 'PR for Everyone',
            icon: 'tabler:star',
            color: 'bg-secondary',
            points: ['Empowering individuals and businesses to share their stories with the world', 'No need for a large budget to get media coverage', 'Accessible platform for users at any experience level'],
          },
          {
            title: 'Journalist Outreach',
            icon: 'tabler:heart-handshake',
            color: 'bg-tertiary',
            points: ['Connect directly with journalists in your niche', 'Simplified outreach process that helps you get noticed', 'Expand your media network with just a few clicks'],
          },
          {
            title: 'Time & Cost Effective',
            icon: 'tabler:coin',
            color: 'bg-quaternary',
            points: ['Save hours of effort compared to traditional PR methods', 'Avoid costly PR agency fees and do it yourself', 'Get high-quality results in less time and at a fraction of the cost'],
          },
        ]}
      />

      {/* Testimonials */}
      <Testimonials
        classes={{ container: 'md:px-0' }}
        title="What Our Users Are Saying"
        information="Discover how our platform has helped individuals and businesses alike enhance their visibility, connect with journalists, and elevate their PR efforts, all while saving time and money."
      />

      {/* Payment */}
      <Payment
        title="Find the Perfect Plan for You"
        subtitle="Choose from our options designed to fit your needs, whether you're just starting out or looking to maximize your business impact."
        tagline="Pricing Plan"
        items={[
          {
            plan: 'starter',
            title: 'Starter Plan',
            value: '89.00',
            time: 'Month',
            description: 'From Basic use',
            points: ['1 AI-generated article', 'Basic journalist outreach', 'Email support', 'SEO-friendly formatting'],
          },
          {
            plan: 'pro',
            title: 'Pro Plan',
            value: '199.00',
            time: 'Month',
            description: 'For businesses',
            points: [
              '5 AI-generated articles',
              'Priority support',
              'Advanced SEO strategies',
              'Customized outreach plan',
              'Email support',
              'SEO-friendly formatting',
            ],
          }
        ]}
      />

      {/* FAQs */}
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Dive into the following questions to gain insights into the powerful features that AstroWind offers and how it can elevate your web development journey."
        tagline="Questions"
        classes={{ container: 'max-w-6xl' }}
        image='/images/qa.png'
        bgimage='/images/qa2.png'
        items={[
          {
            title: 'What kind of articles can it write?',
            description:
              "Our AI can generate various types of PR content including press releases, company announcements, product launches, and thought leadership pieces."
          },
          {
            title: 'How do you send my article to journalists?',
            description:
              "We maintain a curated database of journalists and match your content with those covering relevant topics in your industry."
          },
          {
            title: 'How long does the process take?',
            description:
              "The interview process takes about 15 minutes, and your AI-generated article will be ready in seconds. Journalist outreach begins within 24 hours."
          },
          {
            title: 'Can the AI create personalized content for different industries?',
            description:
              "Yes, our AI is capable of tailoring content to various industries, from tech to healthcare, ensuring it resonates with the target audience."
          },
          {
            title: 'How do you handle revisions or content adjustments?',
            description:
              "Our platform allows you to make revisions to the generated content easily. You can update specific sections or request new drafts until it aligns with your needs."
          }
        ]}
      />

      {/* Stats */}
      <Stats
        id='Stats'
        stats={[
          { title: 'Stories Published', amount: '5.3K' },
          { title: 'Journalists Connected', amount: '2.1K' },
          { title: 'Visibility Reached', amount: '15k' },
          { title: 'Active Users', amount: '12K' },
        ]}
      />

      <Footer {...footerData}/>
    </div>
  );
};

export default Principal;
