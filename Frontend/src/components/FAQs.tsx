import React, { useState } from 'react';
import '../assets/styles/fq.css';
import Headline from './ui/Headline';
import WidgetWrapper from './ui/WidgetWrapper';

interface FaqItem {
  title: string;
  description: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  image?: JSX.Element | string;
  bgimage?: JSX.Element | string;
  items?: FaqItem[];
  id?: string;
  isDark?: boolean;
  classes?: {
    container?: string;
  };
  bg?: JSX.Element;
}

const Faqs: React.FC<Props> = ({
  title = '',
  subtitle = '',
  tagline = '',
  image,
  bgimage,
  items = [],
  id,
  isDark = false,
  classes = {},
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <WidgetWrapper id={id} isDark={isDark} containerClass={`max-w-7xl mx-auto ${classes?.container ?? ''}`}>
      <Headline title={title} subtitle={subtitle} tagline={tagline} />
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1 lg:px-0 md:px-[10rem] px-[1rem]">
          <img
            src={`${image}`}
            className="w-full mx-auto rounded-md"
            sizes="(max-width: 667px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
            width={1224}
            height={1076}
          />
          {bgimage && (
            <div className="absolute top-0 left-0 m-auto pointer-events-none">
              <img
                src={`${bgimage}`}
                className="w-full mx-auto rounded-md"
                sizes="(max-width: 667px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
                loading="eager"
                width={1276}
                height={1226}
              />
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <section className="flex justify-center order-1 px-6 py-3 faq-section lg:justify-start lg:px-0 lg:order-2">
          <div className="">
            <div className="accordion accordion-flush" id="accordionExample">
              {items &&
                items.map((item, index) => (
                  <div key={index} className="">
                    <div className="accordion">
                      <div className="accordion-item">
                        <button
                          id={`accordion-button-${index}`}
                          aria-expanded={expandedIndex === index}
                          onClick={() => toggleAccordion(index)}
                          className="accordion-title text-[16px] lg:text-[20px]"
                        >
                          <span>{item.title}</span>
                          <span className="icon" aria-hidden="true"></span>
                        </button>
                        <div
                          className={`accordion-content lg:text-[10px] text-[15px] ${
                            expandedIndex === index ? 'opacity-100 max-h-36' : 'opacity-0 max-h-0'
                          }`}
                        >
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </WidgetWrapper>
  );
};

export default Faqs;
