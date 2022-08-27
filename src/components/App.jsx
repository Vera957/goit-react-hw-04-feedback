import React from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistic } from "./Statistics";
import { useState } from "react";

export const App = () => {

  const [good, setGood] = useState(null);
  const [bad, setBad] = useState(null);
  const [neutral, setNeutral] = useState(null);

  const onLeaveFeedback = (e) => {
    switch (e) {
      case 'good': setGood(prev => prev+ 1);
        break;
      case 'bad': setBad(prev => prev + 1);
        break;
      case 'neutral': setNeutral(prev => prev + 1);
        break;
      default: alert('error');
        break;
    }
  }

    return (<>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
      </Section>
      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={0}
          positivePercentage={0} />
      </Section>
    </>)
  }
