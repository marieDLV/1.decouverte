import ChildToParent from "./ChildToParent";
import ParentToChild from "./ParentToChild";
import Props from "./Props";
import Events from "./Events";
import ComponentState from "./ComponentState";
import Condition from "./Condition";
import Loop from "./Loop";
import FormHandling from "./FormHandling";

function TheoryWrapper() {
  return (
    <>
    <h1>Théorie des composants react</h1>
    <ParentToChild/>
    <ChildToParent/>
    <Props/>
    <Events/>
    <ComponentState/>
    <Condition/>
    <Loop/>
    <FormHandling/>
    </>
  );
}

export default TheoryWrapper;