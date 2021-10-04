import { useSelector } from "react-redux";
import "./css/TemplateB.css";
let TemplateB = () => {
  let data = useSelector((state) => state.data);
  return (
    <>
      {/* <link
        type="text/css"
        rel="stylesheet"
        href="https://www.dropbox.com/s/trsldt0me90jzs8/resume.css"
      /> */}
      <div id="header">
        <p id="name">
          {data.fname} {data.lname}
        </p>
        <p className="other-details">
          <span>
            {data.city},{data.state}
          </span>{" "}
          | <span>{data.email} </span> | <span>{data.phone}</span>
        </p>
      </div>
      {/* <div class="left"></div> */}
      <div class="right">
        <h3>Professional Experience</h3>
        <h4 id="company-name">{data.company}</h4>
        <br />
        <p id="job-title">
          <strong>{data.position}</strong>
        </p>
        <br />
        {/* <p id="job-responsibilities">Support Engineer (Technical Support)</p> */}
        <p className="B-description">{data.description}</p>
        <h3>Educational Qualifications</h3>
        <table>
          <tr id="heading">
            <td>Qualification</td>
            <td>College</td>
            <td>Percentage / Grades</td>
            <td>Year</td>
          </tr>
          <tr>
            <td>{data.degree}</td>
            <td>{data.college}</td>
            <td>{data.cgpa}</td>
            <td>{data.year}</td>
          </tr>
          <tr>
            <td>12TH</td>
            <td>{data.interCollege}</td>
            <td>{data.interCgpa}</td>
            <td>{data.interYear}</td>
          </tr>
          <tr>
            <td>10TH</td>
            <td>{data.tenthCollege}</td>
            <td>{data.tenthCgpa}</td>
            <td>{data.tenthYear}</td>
          </tr>
        </table>
        {/* <h3>Independent Courses</h3> */}
        {/* <p>
          <ul>
            <li>
              <span id="course-name">
                HTML & CSS for Beginners – Web Fundamentals
              </span>{" "}
              – Codecademy.com
            </li>
            <li>
              <span id="course-name">
                Python – Fundamentals and Dynamic Programming{" "}
              </span>{" "}
              - Codecademy.com
            </li>
            <li>
              <span id="course-name">
                JavaScript – Programming Basics, JS Apps and Build Games{" "}
              </span>{" "}
              - Codecademy.com
            </li>
            <li>
              <span id="course-name">
                CS101: Introduction to Computer Science - Building a Web Crawler
              </span>{" "}
              - Udacity.com
            </li>
            <li>
              <span id="course-name">
                CS50x – Introduction to Computer Science I
              </span>{" "}
              – edX.org & Harvard University
            </li>
            <li>
              <span id="course-name">Calculus One</span> - Ohio State University
              & Coursera.org
            </li>
            <li>
              <span id="course-name">Introduction to Finance</span> -
              Coursera.org & University of Michigan
            </li>
          </ul>
        </p>*/}
        <h3>Technical Skills</h3>
        
        <section>
          
          <ul className="skill-set">
            {data.skills.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
        </section>
        {/* <h3>Certifications / Awards:</h3>
        <p>
          <ul>
            <li>
              Scored highest in ACCA P1 – Governance, Risk & Ethics exam – June
              2012 session amongst full time international students at Kaplan
              Financial, London.
            </li>
            <li>
              Interviewed by ACCA for “international ACCA student in UK”,
              interview published in January 2012 edition of ACCA Student
              Accountant Magazine.
            </li>
            <li>
              Interviewed by ACCA for “international ACCA student in UK”,
              interview published in January 2012 edition of ACCA Student
              Accountant Magazine.
            </li>
          </ul>
        </p>
        <h3>Personal Information:</h3>
        <p>
          <ul>
            <li>
              A young, determined hard and smart working person. I believe in
              task based roles and complete ownership of work.
            </li>
            <li>
              <span id="course-name">Languages Known:</span>English, Hindi,
              Gujarati and Sindhi
            </li>
            <li>
              <span id="course-name">Hobbies:</span>I love reading Finance and
              IT related books / magazines, playing Chess, swimming, listening
              music, surfing Internet, self-learning through e-courses.
            </li>{" "}
          </ul>
        </p>
        <h3>Other Information</h3>
        <p>
          <ul>
            <li>
              <span id="course-name">Expected Salary:</span>As per company
              standards
            </li>
            <li>
              <span id="course-name">Area of Interest:</span>Software
              Development, Programming, Start-ups, Coding, App Development,
              Technical Support, Support Engineer, Customer Happiness, Client
              service, Investment Banking, Corporate Finance, Hedge Funds,
              Mergers & Acquisitions, Analyst, Equity Research, Business
              Analysis
            </li>
            <li>
              <span id="course-name">Joining Date:</span>Immediate
            </li>
          </ul>
        </p>
         */}
        <h3>Declaration</h3>
        <p>
          I hereby declare that the details furnished above are true and correct
          to the best of my knowledge and belief.
        </p>
      </div>
      <div id="footer"></div>
    </>
  );
};
export default TemplateB;
