import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Container } from './styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const nameState = e.currentTarget.name;

    this.setState(prevState => {
      return { [nameState]: prevState[nameState] + 1 };
    });
  };

  countTotalFeedBack() {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedBack();
    const positiveFeedback = this.state.good;
    return Number.parseInt((positiveFeedback * 100) / totalFeedback);
  }

  render() {
    const feedbackPercantage = this.countPositiveFeedbackPercentage();
    const totallFeedback = this.countTotalFeedBack();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onHandleClick}
            data={this.state}
          />
        </Section>

        <Section title="Statistics">
          {Number.isNaN(feedbackPercantage) ? (
            <Notification message="There is no feedback. Please leave feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totall={totallFeedback}
              positivePercentage={feedbackPercantage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
