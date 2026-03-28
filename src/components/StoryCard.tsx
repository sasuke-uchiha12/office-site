import type { StoryCard as StoryCardType } from "../data/siteContent";

type StoryCardProps = {
  story: StoryCardType;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="story-card">
      <div className="story-card__content">
        <div className="story-card__media">
          <img src={story.image} alt={story.imageAlt} />
        </div>
        <span className="section-header__eyebrow mt-4">{story.meta}</span>
        <h3 className="story-card__title mt-2 text-2xl">{story.title}</h3>
        <p className="story-card__copy">{story.copy}</p>
      </div>
    </article>
  );
}
