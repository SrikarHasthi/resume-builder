import { useSelector } from "react-redux";
import TemplateA from "./TemplateA";
import "./css/Preview.css";
import TemplateB from "./TemplateB";
let Preview = () => {
  let template = useSelector((state) => state.template);
  
  let fun = () => {
    if (template === "A") {
      return <TemplateA />;
    } else if (template === "B") {
      return <TemplateB />;
    }
  };
  return (
    <>
      <div className="preview-container">{fun()}</div>
    </>
  );
};
export default Preview;
