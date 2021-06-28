function TestButton(): JSX.Element {
  function handleClick(){
    window.alert("This is Bukola testing out a function declaration")
  }
  return(<button onClick={handleClick}>Make me do something when I'm clicked...</button>);
}

export default TestButton;
