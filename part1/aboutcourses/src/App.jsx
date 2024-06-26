const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return (
          <Part key={part.name} title={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
};

const Part = (props) => {
  return (
    <p key={props.title}>
      {props.title} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((acc, part) => {
        return (acc += part.exercises);
      }, 0)}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
