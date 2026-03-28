import { useEffect, useState } from "react";
import type { FloatingAvatar, TestimonialItem } from "../data/siteContent";

type TestimonialSpotlightProps = {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
  floatingAvatars: FloatingAvatar[];
};

export function TestimonialSpotlight({
  title,
  subtitle,
  testimonials,
  floatingAvatars,
}: TestimonialSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const active = testimonials[activeIndex];
  const spotlightAvatar = testimonials[0];

  return (
    <section className="testimonial-spotlight">
      <div className="testimonial-spotlight__header">
        <h2 className="testimonial-spotlight__title">{title}</h2>
        <p className="testimonial-spotlight__subtitle">{subtitle}</p>
      </div>

      <div className="testimonial-spotlight__stage">
        {floatingAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`testimonial-avatar testimonial-avatar--${avatar.size}`}
            style={{ ...avatar.position, ["--avatar-accent" as string]: avatar.accent }}
            aria-hidden="true"
          >
            <img src={avatar.image} alt={avatar.alt} />
          </div>
        ))}

        <div className="testimonial-spotlight__center">
          <div
            className="testimonial-avatar testimonial-avatar--lg testimonial-avatar--desktop"
            style={{ ["--avatar-accent" as string]: spotlightAvatar.accent }}
          >
            <img src={spotlightAvatar.avatar} alt={spotlightAvatar.avatarAlt} />
          </div>
          <div
            className="testimonial-avatar testimonial-avatar--lg testimonial-avatar--mobile"
            style={{ ["--avatar-accent" as string]: active.accent }}
          >
            <img src={active.avatar} alt={active.avatarAlt} />
          </div>

          <div className="testimonial-spotlight__quote-wrap">
            <span className="testimonial-spotlight__quote-mark testimonial-spotlight__quote-mark--left">“</span>
            <blockquote key={active.id} className="testimonial-spotlight__quote">
              {active.quote}
            </blockquote>
            <span className="testimonial-spotlight__quote-mark testimonial-spotlight__quote-mark--right">”</span>
          </div>

          <p className="testimonial-spotlight__author">{active.author}</p>

          <div className="testimonial-spotlight__meta">
            <div className="testimonial-spotlight__stars" aria-label="5 star rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="testimonial-spotlight__dots" aria-label="testimonial carousel">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`testimonial-spotlight__dot${index === activeIndex ? " is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
