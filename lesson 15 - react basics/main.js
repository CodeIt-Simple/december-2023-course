// const SimpleButton = React.createElement('button', {onClick: () => alert('clicked')}, 'click me!')
// const Simpleheader = React.createElement('h1', {onClick: () => console.log('clicked')}, 'click me!')

const SimpleButton = ({
  color = "black",
  background = "white",
  onClick = () => {},
  text = "submit",
}) => (
  <button style={{ color: color, background: background }} onClick={onClick}>
    {text}
  </button>
);

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const arr = [
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead2",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead3",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "friends",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "tbbt",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "reacher",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
    {
      title: "the walking dead",
      src: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
    },
  ];

  const SimpleInput = ({ type = "password", placeholder, isSpecialInput }) => {
    // const {type, placeholder, isSpecialInput} = props
    return (
      <input
        className={isSpecialInput ? "blueInp" : "yellowInp"}
        placeholder={placeholder}
        type={type}
      />
    );
  };

  return (
    <div>
      <h1 onClick={handleClick}>hello</h1>
      <div className="ori">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        daniel
      </div>
      <div className="buttonWrapper">
        <SimpleButton
          text={"shalom ori"}
          color={"blue"}
          background={"yellow"}
          onClick={() => console.log("shalom")}
        />
        <SimpleButton
          text={"shalom shai"}
          color={"black"}
          background={"white"}
          onClick={() => alert("shalom")}
        />
        <SimpleButton
          text={"shalom assaf"}
          color={"red"}
          background={"gold"}
          onClick={() => prompt("shalom")}
        />
        <SimpleButton
          text={"shalom daniel"}
          color={"red"}
          background={"gold"}
          onClick={() => prompt("shalom")}
        />
        <SimpleInput placeholder="shai siga" type="text" isSpecialInput />
        <SimpleInput placeholder="almog ram" isSpecialInput />
        <SimpleInput placeholder="almog ram" type="month" />
      </div>
      <NumberList />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {arr.map((item) => (
          <Card src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
};

const NumberList = ({ image }) => {
  const shula = false;

  const decideWhatToRender = () => {
    if (shula) {
      return <h1>Welcome dear admin to your realm!!!!</h1>;
    } else {
      return <span>welcome commoner</span>;
    }
  };

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number * 2}</li>);
  return (
    <React.Fragment>
      <div className="check">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <ul>{listItems}</ul>
        <ul>
          {numbers.map((number) => (
            <li>{number * 3}</li>
          ))}
        </ul>
      </div>
      <h2>dsadasdasdasasd</h2>
      {decideWhatToRender()}
      {shula ? (
        <h1>Welcome dear admin to your realm!!!!</h1>
      ) : (
        <span>welcome commoner</span>
      )}
      {image && <img src={image.source} />}
    </React.Fragment>
  );
};

const Card = ({ title, src }) => {
  return (
    <div className="cardContainer">
      <img src={src} />
      <div>
        <span className="showTitle">{title}</span>
      </div>
      <div className="buttonWrapper">
        <button>לב</button>
        <button>כוכב</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
