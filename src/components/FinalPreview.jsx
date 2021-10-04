import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";
import "./css/Preview.css";
import "./css/TemplateA.css"
let FinalPreview = () => {
  let { rid } = useParams();
  let [previewResume, setpreviewResume] = useState(null);
  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setpreviewResume(data);
      });
  }, []);
  return (
    <>
      {previewResume && previewResume.details.isChecked ? (
        <div className="final-preview-container">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="final-preview-border">
                {previewResume.code === "A" ? (
                  <div className="final-preview-template-A">
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
                              {previewResume.details.fname}{" "}
                              <em>{previewResume.details.lname}</em>
                            </h1>
                            <p>
                              {previewResume.details.city +
                                "," +
                                previewResume.details.state}
                            </p>
                            <p>{previewResume.details.email}</p>
                            <p>{previewResume.details.phone}</p>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="inner">
                          <section>
                            <h1>Employment</h1>
                            <p>
                              {/* Winter 2015 - Present{" "} */}
                              <em>
                                {previewResume.details.company} |{" "}
                                {previewResume.details.position}
                              </em>
                            </p>
                            <p className="final-description">
                              {previewResume.details.description}
                            </p>
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
                              {previewResume.details.skills.map((e) => {
                                return <li>{e}</li>;
                              })}
                            </ul>
                          </section>
                          <section>
                            <h1>Education</h1>
                            <p>
                              {previewResume.details.degree}{" "}
                              <em>
                                {previewResume.details.college} |{" "}
                                {previewResume.details.cgpa} |{" "}
                                {previewResume.details.year}
                              </em>
                            </p>
                            <p>
                              <em>
                                {previewResume.details.interCollege} |
                                {previewResume.details.interCgpa} |{" "}
                                {previewResume.details.interYear}{" "}
                              </em>
                            </p>
                            <p>
                              <em>
                                {previewResume.details.tenthCollege} |
                                {previewResume.details.tenthCgpa} |{" "}
                                {previewResume.details.tenthYear}{" "}
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
                    </section>
                    <section>
                <div className="handmade">
                  <p>
                    handmade by <em> Anthony Adamski</em>
                  </p>
                </div>
              </section> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="final-preview-template-B">
                  <div id="header">
                    <p id="name">
                      {previewResume.details.fname}{" "}
                      {previewResume.details.lname}
                    </p>
                    <p className="other-details">
                      <span>
                        {previewResume.details.city},
                        {previewResume.details.state}
                      </span>{" "}
                      | <span>{previewResume.details.email} </span> |{" "}
                      <span>{previewResume.details.phone}</span>
                    </p>
                  </div>
                  {/* <div class="left"></div> */}
                  <div class="right">
                    <h3>Professional Experience</h3>
                    <h4 id="company-name">{previewResume.details.company}</h4>
                    <br />
                    <p id="job-title">
                      <strong>{previewResume.details.position}</strong>
                    </p>
                    <br />
                    {/* <p id="job-responsibilities">Support Engineer (Technical Support)</p> */}
                    <p className="final-description">
                      {previewResume.details.description}
                    </p>
                    <h3>Educational Qualifications</h3>
                    <table>
                      <tr id="heading">
                        <td>Qualification</td>
                        <td>College</td>
                        <td>Percentage / Grades</td>
                        <td>Year</td>
                      </tr>
                      <tr>
                        <td>{previewResume.details.degree}</td>
                        <td>{previewResume.details.college}</td>
                        <td>{previewResume.details.cgpa}</td>
                        <td>{previewResume.details.year}</td>
                      </tr>
                      <tr>
                        <td>12TH</td>
                        <td>{previewResume.details.interCollege}</td>
                        <td>{previewResume.details.interCgpa}</td>
                        <td>{previewResume.details.interYear}</td>
                      </tr>
                      <tr>
                        <td>10TH</td>
                        <td>{previewResume.details.tenthCollege}</td>
                        <td>{previewResume.details.tenthCgpa}</td>
                        <td>{previewResume.details.tenthYear}</td>
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
                        {previewResume.details.skills.map((e) => {
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
                      I hereby declare that the details furnished above are true
                      and correct to the best of my knowledge and belief.
                    </p>
                  </div>
                  <div id="footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Not Available or Resume Not Public</h2>
      )}
    </>
  );
};
export default FinalPreview;
