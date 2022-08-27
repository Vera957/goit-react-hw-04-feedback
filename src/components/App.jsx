import React from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistic } from "./Statistics";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    this.setState(prev => ({ [e]: prev[e] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (<>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
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
}