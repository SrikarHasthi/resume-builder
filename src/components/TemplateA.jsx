import { useSelector } from "react-redux";
import "./css/TemplateA.css";
let TemplateA = () => {
  let data = useSelector((state) => state.data);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Open+Sans:300,400,500,700|Waiting+for+the+Sunrise|Shadows+Into+Light"
        rel="stylesheet"
        type="text/css"
      />

      <div className="wrapper clearfix">
        <div className="left">
          <div className="name-hero">
            <div className="me-img"></div>

            <div className="name-text">
              <h1>
                {data.fname} <em>{data.lname}</em>
              </h1>
              <p>{data.city + "," + data.state}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="inner">
            <section>
              <h1>Employment</h1>
              <p>
                {/* Winter 2015 - Present{" "} */}
                <em>
                  {data.company} | {data.position}
                </em>
              </p>
              <p className="A-description">{data.description}</p>
              {/* <p>
                Fall 2011 - Fall 2013 |{" "}
                <em>Penrose Realty llc. | Desinger & Assistant</em>
              </p>
              <p>
                Responsible for all technical areas. Maintain servers,
                computers, and provide in office technical support. Rebranded
                company from ground up including a fully responsive website.{" "}
              </p> */}
            </section>
            <section>
              <h1>Technical Skills</h1>
              <ul className="skill-set">
                {data.skills.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </section>
            <section>
              <h1>Education</h1>
              <p>
                {data.degree}{" "}
                <em>
                  {data.college} | {data.cgpa} | {data.year}
                </em>
              </p>
              <p>
                <em>
                  {data.interCollege} | {data.interCgpa} | {data.interYear}{" "}
                </em>
              </p>
              <p>
                <em>
                  {data.tenthCollege} | {data.tenthCgpa} | {data.tenthYear}{" "}
                </em>
              </p>

              {/* <p>
                Chris Heller <em>Penrose Realty LLC. | Broker</em>
              </p>
              <p>(617) 794-4554 | chris@penroserealty.com</p> */}
            </section>
            {/* <section>
              <h1>Personal Interests</h1>
              <ul className="skill-set">
                <li>Faith</li>
                <li>Biblical Studies</li>
                <li>Playing Guitar</li>
                <li>Song Writing</li>
                <li>Health & Nutrition</li>
                <li>Reading</li>
              </ul>
            </section> */}
            {/* <section>
              <div className="handmade">
                <p>
                  handmade by <em> Anthony Adamski</em>
                </p>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default TemplateA;
