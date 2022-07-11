const App = () => {
  const courseName = "Half Stack application development";

  interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }

  interface CoursePartExtended extends CoursePartBase {
    description: string;
  }

  interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
  }

  interface CourseNormal extends CoursePartExtended {
    type: "normal";
  }

  interface CourseSubmissionPart extends CoursePartExtended {
    type: "submission";
    exerciseSubmissionLink: string;
  }

  interface CourseSpecial extends CoursePartExtended {
    type: "special";
    requirements: string[];
  }

  type CoursePart = CourseNormal | CourseProjectPart | CourseSubmissionPart | CourseSpecial;

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }
  ];

  const totalExercises = courseParts.reduce((carry, part) => carry += part.exerciseCount, 0);

  const Header = ({ name }: { name: string }) => {
    return <h1>{name}</h1>;
  }

  const Content = ({ parts }: { parts: CoursePart[] }) => {
    return <div>
      {parts.map((p, index) => 
        <Part key={index} part={p} />
      )}
    </div>
  };
  
  const Total = ({ total }: { total: number }) => {
    return <p>Number of exercises {total}</p>
  }

  const Part = ({ part }: { part: CoursePart }) => {
    const assertNever = (value: never): never => {
      throw new Error(
        `Unhandled discriminated union member ${JSON.stringify(value)}`
      );
    };

    const modifyAttributes = () => {
      switch (part.type) {
        case "normal":
          return part.description;
        case 'groupProject': 
          return `project exercises ${part.groupProjectCount}`
        case 'submission':
          return <>
            {part.description}
            <br />
            {part.exerciseSubmissionLink}
          </>
        case 'special':
            return <>
              {part.description}
              <br />
              {'required skills: '} {part.requirements.join(', ')}
            </>
          break;
        default:
          return assertNever(part);
      }
    }

    return (
      <div style={{ margin: '10px 0' }}>
        <strong>{part.name}</strong>
        <br />
        <em>{modifyAttributes()}</em>
      </div>
    )
  }

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total total={totalExercises} />
    </div>
  )
}

export default App;