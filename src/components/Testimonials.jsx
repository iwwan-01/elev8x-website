import Image from 'next/image';

import dimitarMaronovTestimonial from '../../public/testimonials/DimitarMaronov.png';
import merijnDeBoerTestimonial from '../../public/testimonials/MerijnDeBoer.jpeg';
import kristiyanPetrovTestimonial from '../../public/testimonials/KristiyanPetrov.png';

const Testimonials = () => {
  return (
    <section id='testimonials' className='scroll-mt-10'>
      <div className='flex justify-center items-center overflow-x-hidden'>
        <div className='flex justify-center items-center container'>
          <div className='w-full lg:w-[63rem] py-24'>
            <div className='flex flex-col gap-y-12'>
              {/* Headline Container */}
              <div className='flex flex-col gap-y-4 lg:px-20 px-10'>
                <h3 className='font-poppins uppercase font-bold text-lg'>
                  Our Testimonials
                </h3>
                <h1 className='font-poppins font-bold text-6xl'>
                  What Our Clients Say
                </h1>
              </div>
              <div className='bg-white border-neutral-200 border rounded-3xl font-poppins pt-4'>
                {/* Testimonials Wrapper */}
                <div className='grid lg:grid-cols-3 gap-y-16 gap-x-8 py-12 px-10'>
                  {/* Testimonial Item */}
                  <div className='flex flex-col rounded-lg border border-neutral-200 h-full w-full'>
                    {/* Person Image */}
                    <div className='relative rounded-full overflow-hidden z-0 bg-slate-500 w-20 h-20 -mt-6 ml-8 hover:scale-110 transition-transform duration-150'>
                      <Image
                        className='relative object-cover w-full h-full'
                        src={dimitarMaronovTestimonial}
                        width={800}
                        height={800}
                        alt='Dimitar Maronov'
                      />
                    </div>
                    <div className='flex flex-col justify-center grow'>
                      {/* Text */}
                      <div className='px-8 py-4'>
                        <p className='font-poppins text-sm font-normal'>
                          Choosing Elev8x for our e-commerce store was a
                          fantastic decision. They delivered speedy and
                          top-notch development, exceeding our expectations.
                          From concept to launch, their understanding of our
                          brand needs was exceptional. The final result reflects
                          our brand perfectly, and the seamless functionality is
                          impressive. Elev8x is not just a service provider but
                          a trusted partner in our digital success. Highly
                          satisfied with their service!
                        </p>
                      </div>
                    </div>
                    {/* Person Name and Position */}
                    <div className='flex flex-col text-right font-poppins whitespace-nowrap px-8 py-4'>
                      <h3 className='text-sm font-medium'>Dimitar Maronov</h3>
                      <h3 className='text-sm font-semilight'>
                        CEO | Kamato Games
                      </h3>
                    </div>
                  </div>

                  {/* Testimonial Item */}
                  <div className='flex flex-col flex-1 rounded-lg border border-neutral-200 h-full w-full'>
                    {/* Person Image */}
                    <div className='relative rounded-full overflow-hidden z-0 bg-slate-500 w-20 h-20 -mt-6 ml-8 hover:scale-110 transition-transform duration-150'>
                      <Image
                        className='relative object-cover w-full h-full'
                        src={merijnDeBoerTestimonial}
                        width={800}
                        height={800}
                        alt='Merijn De Boer'
                        style={{ objectPosition: '100% 30%' }}
                      />
                    </div>
                    <div className='flex flex-col justify-center grow'>
                      {/* Text */}
                      <div className='px-8 py-4'>
                        <p className='font-poppins text-sm font-normal'>
                          The site sports a fresh new identity and Indietopia
                          couldn’t be happier with the result. Elev8x guided us
                          through the process with a crafty attitude and clear
                          communication. They made the entire team part of the
                          design process, which is a rare quality. We are happy
                          with the results and our team can count on a strong
                          online presence with the new website.
                        </p>
                      </div>
                    </div>
                    {/* Person Name and Position */}
                    <div className='flex flex-col text-right font-poppins whitespace-nowrap px-8 py-4'>
                      <h3 className='text-sm font-medium'>Merijn De Boer</h3>
                      <h3 className='text-sm font-semilight'>
                        CEO | Indietopia
                      </h3>
                    </div>
                  </div>

                  {/* Testimonial Item */}
                  <div className='flex flex-col flex-1 rounded-lg border border-neutral-200 h-full w-full'>
                    {/* Person Image */}
                    <div className='relative rounded-full overflow-hidden z-0 bg-slate-500 w-20 h-20 -mt-6 ml-8 hover:scale-110 transition-transform duration-150'>
                      <Image
                        className='relative object-cover w-full h-full'
                        src={kristiyanPetrovTestimonial}
                        width={800}
                        height={800}
                        alt='Krisiyan Petrov'
                        style={{ objectPosition: '100% 30%' }}
                      />
                    </div>
                    <div className='flex flex-col justify-center grow'>
                      {/* Text */}
                      <div className='px-8 py-4'>
                        <p className='font-poppins text-sm font-normal'>
                          Elev8x's dedication to our project, from its inception
                          to ongoing support, has been truly satisfactory. Their
                          professionalism and punctuality ensured a smooth
                          course from concept to the final website. Even when we
                          faced uncertainty in some aspects, Elev8x's
                          proactivity showed as they presented multiple
                          solutions. Their unwavering reliability and
                          dependability make them a top choice. I can’t
                          recommend their services enough.
                        </p>
                      </div>
                    </div>
                    {/* Person Name and Position */}
                    <div className='flex flex-col text-right font-poppins whitespace-nowrap px-8 py-4'>
                      <h3 className='text-sm font-medium'>Kristiyan Petrov</h3>
                      <h3 className='text-sm font-semilight'>
                        Project Manager | Indietopia
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
