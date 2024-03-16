import css from "./Feedback.module.css";

const Feedback = ({ voice, totalFeedback, positiveRate }) => {
  return (
    <ul className={css.list}>
      <li>Good: {voice.good}</li>
      <li>Neutral: {voice.neutral}</li>
      <li>Bad: {voice.bad}</li>

      <li>
        Total: <b>{totalFeedback}</b>
      </li>
      <li>Positsve: {positiveRate}%</li>
    </ul>
  );
};

export default Feedback;
