import React from 'react';
import '../assets/styles/testimonial.css';
import WidgetWrapper from './ui/WidgetWrapper';
import type { Widget } from '~/types';
import { testimonials } from '../utils/testimonials';



export interface Props extends Widget {
  title?: React.ReactNode;
  linkText?: string;
  linkUrl?: string | URL;
  information?: React.ReactNode;
  count?: number;
}


const TestimonialsComponent: React.FC<Props> = ({
  title,
  information,
  id,
  isDark = false,
  classes = {},
  bg,
}) => {
  return (
    <WidgetWrapper
    id={id}
    isDark={isDark}
    containerClass={`max-w-screen flex justify-center items-center flex-col overflow-x-hidden ${classes?.container ?? ''}`}
    bg={bg}
  >
    <div className="flex flex-col w-full max-w-[76rem] mb-8 lg:justify-between lg:flex-row lg:px-0 md:px-[2rem] px-[2rem] ">
      {title && (
        <div className="md:max-w-lg">
          <h2
            className="mb-2 text-2xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading "
            dangerouslySetInnerHTML={{ __html: title.toString() }}
          />
        </div>
      )}

      {information && (
        <p
          className="text-muted lg:text-sm lg:max-w-md"
          dangerouslySetInnerHTML={{ __html: information.toString() }}
        />
      )}
    </div>

    <div className="reviews">
      <div className="top-reviews">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10 review"
          >
            <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100">
              <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>
            <div className="relative">
              <p className="text-[17px] tracking-tight text-slate-900">
                {`"${testimonial.say}"`}
              </p>
            </div>
            <div className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              <div>
                <div className="text-[16px] font-medium text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-[14px] text-slate-500">
                  {testimonial.business_position}
                </div>
              </div>
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.picture}
                alt={testimonial.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
  );
};

export default TestimonialsComponent;
