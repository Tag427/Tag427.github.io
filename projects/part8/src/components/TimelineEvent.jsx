const TimelineEvent = ({ year, title, text, imgSrc, imgAlt }) => {
  return (
    <li className="event">
      <div className="event-year">{year}</div>
      <div className="event-body">
        <h3 className="event-title">{title}</h3>
        <p className="event-text">{text}</p>
      </div>
      <figure className="event-media">
        <img src={imgSrc} alt={imgAlt} />
      </figure>
    </li>
  );
};

export default TimelineEvent;
