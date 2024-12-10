import ChildToParent from "./ChildToParent";
import ComponentState from "./ComponentState";
import Condition from "./Condition";
import Events from "./Events";
import FormHandling from "./FormHandling";
import Loop from "./Loop";
import ParentToChild from "./ParentToChild";
import Props from "./Props";

function TheoryWrapper(){

    return(
        <>
        <h1>Theorie des composants JSX.</h1>
         <ParentToChild />
         <ChildToParent />
         <Props />
         <Events />
         <ComponentState />
         <Condition />
         <Loop />
         <FormHandling />
        </>
    )
}

export default TheoryWrapper;