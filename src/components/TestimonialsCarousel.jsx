import React from "react";

// Import images for testimonials
import testimonialImg1 from "../assets/testimonial-1.jpg";
import testimonialImg2 from "../assets/testimonial-2.jpg";
import testimonialImg3 from "../assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    image: testimonialImg1,
    description:
      "“SJS Gold continues to exceed our expectations. Their purity standards are always accurate and reliable. The attention to detail reflects true craftsmanship. We proudly choose SJS Gold for every purchase.”",
  },
  {
    id: 2,
    image: testimonialImg2,
    description:
      "“SJS Gold blends tradition with advanced technology. Their craftsmanship reflects remarkable precision. Every product maintains exceptional consistency. This is why we trust SJS Gold without hesitation.”",
  },
  {
    id: 3,
    image: testimonialImg3,
    description:
      "“We trust SJS Gold for their unmatched purity levels. Their consistency gives us complete peace of mind. Every transaction is transparent and trustworthy. That’s why SJS Gold remains our preferred choice.”",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-[#FAF3E0]/20 to-[#F4EAD4]/20 relative overflow-hidden border-t border-amber-200/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#3A3225] uppercase">
            WHAT OUR <span className="text-amber-600">CUSTOMERS</span> SAY
          </h2>
          <div className="w-24 h-1 bg-amber-500 rounded-full mt-4 mx-auto" />
        </div>

        {/* 3 Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#FAF3E0]/70 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 group cursor-pointer"
            >
              {/* Quote & Description */}
              <div className="flex flex-col mb-8">
                {/* Gold Quote Icon */}
                <span className="text-6xl text-amber-500/20 font-serif leading-none h-4 mb-4 select-none">“</span>
                <p className="text-[#4A3F2C] text-base md:text-lg italic leading-relaxed font-serif">
                  {test.description}
                </p>
              </div>

              {/* Card Footer: Rating Stars and Circular Avatar */}
              <div className="flex items-center justify-between border-t border-amber-200/40 pt-6 mt-auto">
                <div className="flex flex-col gap-1">
                  <div className="text-amber-500 text-sm tracking-wider font-semibold">★★★★★</div>
                  <span className="text-xs text-[#6B5A43] font-bold tracking-wider uppercase">Verified Customer</span>
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-md flex-shrink-0">
                  <img
                    src={test.image}
                    alt={`Customer testimonial ${test.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
