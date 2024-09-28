import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const [reactions, setReactions] = useState(() => {
    const val = localStorage.getItem("countValue");
    const parsedVal = JSON.parse(val) ?? { good: 0, neutral: 0, bad: 0 }

    return parsedVal;
  });

  const updateFeedback = (feedbackType) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [feedbackType]: prevReactions[feedbackType] + 1
    }));
  };


  const onResetClick = () => {
    setReactions({
      ...reactions,
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalFeedback = reactions.good + reactions.neutral + reactions.bad;
  const totalPositivePercent = totalFeedback > 0 ? Math.round((reactions.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    const stringifiedVal = JSON.stringify(reactions);
    localStorage.setItem("countValue", stringifiedVal);
  }, [reactions])

  return (
    <>
      <Description></Description>
      <Options totalFeedback={totalFeedback} onResetClick={onResetClick} updateFeedback={updateFeedback}></Options>
      {totalFeedback > 0 ? <Feedback totalPositivePercent={totalPositivePercent} totalFeedback={totalFeedback} reactions={reactions}></Feedback> : <Notification></Notification>}
    </>
  )
}

export default App
