

const Jokes = ({jokes,onClickHandler}) => {
 

  return (
    <div className="jokesBox">
      <p>{jokes}</p>
      <button onClick={onClickHandler}> Click</button>
    </div>
  );
};

export default Jokes;