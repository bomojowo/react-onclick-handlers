function ButtonWithClickExampleF(): JSX.Element {
  return (
    <button onClick={() => console.log("Hello from button F!")}>
      My handler is an anonymous one-line arrow function
    </button>
  );
}

export default ButtonWithClickExampleF;
