const Dummy = () => {
  const handleClick = () => {
    window.location.replace("/rating");
  };
  return (
    <div>
      dumboooooooooo
      <button onClick={handleClick}>go to rating comp</button>
    </div>
  );
};
export default Dummy;
