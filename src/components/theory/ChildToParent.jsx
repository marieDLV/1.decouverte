function Parent() {
  return (
    <>
    <Child/>
    <Child/>
    <Child/>
    </>
  );
}

function Child() {
    return (
      <>
      I am a Child !
      </>
    );
  }

function ChildToParent() {
    return (
      <>
      <Parent></Parent>
      </>
    );
  }
  
  export default ChildToParent;