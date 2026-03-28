import { useState } from "react";
import type { FaqItem } from "../data/siteContent";

type MiniFaqAccordionProps = {
  items: FaqItem[];
};

export function MiniFaqAccordion({ items }: MiniFaqAccordionProps) {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

  return (
    <div className="mini-faq">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <article key={item.id} className="faq-card">
            <div className="faq-card__content">
              <button
                type="button"
                className="faq-card__trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenId((current) => (current === item.id ? "" : item.id))}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className="faq-card__icon">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? <p className="faq-card__answer">{item.answer}</p> : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
