import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Descriptions from "./Components/Descriptions/Descriptions";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";

const noVoiceArr = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [voiceCount, setVoiceCount] = useState(() => {
    const voiceCountLS = window.localStorage.getItem("saved-voice");
    const voiceCountParse = JSON.parse(voiceCountLS) ?? noVoiceArr;
    return voiceCountParse;
  });

  const totalFeedback = voiceCount.good + voiceCount.neutral + voiceCount.bad;

  const positiveRate = Math.round(
    ((voiceCount.good + voiceCount.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setVoiceCount({
      ...voiceCount,
      [feedbackType]: voiceCount[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setVoiceCount(noVoiceArr);
  };

  useEffect(() => {
    const voiceCountJson = JSON.stringify(voiceCount);
    window.localStorage.setItem("saved-voice", voiceCountJson);
  }, [voiceCount]);

  return (
    <div className="container">
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          voice={voiceCount}
          totalFeedback={totalFeedback}
          positiveRate={positiveRate}
        />
      )}
    </div>
  );
};

export default App;
