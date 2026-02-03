function CounterWithoutState() {
  var count = 0;
  return (
    <>
      <h1>This is Counter Without State</h1>
      <h2>Count is {count}</h2>
      <button
        onClick={() => {
          count = count + 1;
          console.log("Value of count is " + count);
        }}
      >
        Increment
      </button>
    </>
  );
}
export default CounterWithoutState;
