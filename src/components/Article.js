import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const renderReadTime = () => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderReadTime()}</p>
    </article>
  );
};

export default Article;
