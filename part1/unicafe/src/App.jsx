import { useState } from "react";

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positivePercentage = (good / all) * 100 || 0;
  if (all > 0) {
    return (
      <div>
        <h1>Statistic</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positivePercentage} />
          </tbody>
        </table>
      </div>
    );
  }
  return <p>No feedback given</p>;
};

const Button = ({ handleEvent, text }) => {
  return <button onClick={handleEvent}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const App = () => {
  const [statistic, setStatistic] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setStatistic({ ...statistic, good: (statistic.good += 1) });
  };
  const handleNeutralClick = () => {
    setStatistic({ ...statistic, neutral: (statistic.neutral += 1) });
  };
  const handleBadClick = () => {
    setStatistic({ ...statistic, bad: (statistic.bad += 1) });
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleEvent={handleGoodClick} text="good" />
      <Button handleEvent={handleNeutralClick} text="neutral" />
      <Button handleEvent={handleBadClick} text="bad" />
      <Statistic
        good={statistic.good}
        neutral={statistic.neutral}
        bad={statistic.bad}
      />
    </div>
  );
};

export default App;
