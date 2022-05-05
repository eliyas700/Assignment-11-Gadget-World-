import React from "react";
import { Accordion } from "react-bootstrap";

const MyBlog = () => {
  return (
    <div
      style={{ minHeight: "90vh", textAlign: "left" }}
      className="container mx-auto "
    >
      <h2 style={{ color: "#4834d4" }} className="my-4 text-center f-anton">
        My Blog
      </h2>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Difference between javascript and nodejs?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Differences Between <b>JavaScript</b> and <b>NodeJs</b> are as
            follows: <br /> <br />
            <b>Java Script:</b> <br />
            1.JavaScript is a lightweight, cross-platform, interpreted scripting
            programming language that is primarily used for client-side
            scripting. <br />
            2.Javascript is a scripting language that can only be used in
            browsers. <br />
            3.It is basically used on the client-side. <br />
            4.It's built into both Java and HTML. <br />
            5.JavaScript is a simple programming language that could be run in
            any browser that supports the JavaScript Engine. <br />
            6.Some of the javascript frameworks are RamdaJS, TypedJS, etc.
            <br /> <br />
            <b>Node Js:</b> <br />
            1.Node.js is a server-side scripting language based on the Google
            Chrome V8 engine. <br />
            2.We can run Javascript outside the browser with the help of NodeJS{" "}
            <br />
            3.It is mostly used on the server-side. <br />
            4. Nodejs does not have capability to add HTML tags. <br />
            5. V8 is the Javascript engine inside of node.js that parses and
            runs Javascript. <br />
            6. Some of the Nodejs modules are Lodash, express etc. These modules
            are to be imported from npm.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>When should you use nodejs and when should you use mongodb?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <b>Node Js :</b> <br />
            Any project requires a programming environment and a runtime library
            that can build and/or understand your code and provides basic
            programming tools and assistance. Nodejs is a tool for programming
            in the Javascript language. Other languages with comparable tools
            include Python, Java, PHP, C#, C++, Go, and so on. So, if you want
            to develop a Javascript standalone program or server, you may
            utilize nodejs. <br /> <br />
            <b>MongoDB :</b> <br />
            MongoDB is a general-purpose database that is used in a variety of
            sectors to support applications (e.g., telecommunications, gaming,
            finances, healthcare, and retail). Because it tackles long-standing
            difficulties in data management and software development, MongoDB
            has found a home in a variety of enterprises and roles. MongoDB is
            commonly used in the following scenarios:{" "}
            <b>Integrating large amounts of diverse data</b> ,
            <b>Describing complex data structures that evolve</b> ,
            <b>Delivering data in high-performance applications</b> ,
            <b>Supporting hybrid and multi-cloud applications</b> ,
            <b>Supporting agile development and collaboration</b>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>What is the Differences between SQL and NoSQL databases.?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Differences Between SQL and NoSQL Database are As follows: <br />{" "}
            <br />
            <b>SQL: </b> <br />
            1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
            2. These databases have fixed or static or predefined Design <br />
            3. These databases aren't designed to store hierarchical data.{" "}
            <br />
            4. These databases are best suited for complex queries <br />
            5. Vertically Scalable <br />
            <br />
            <br />
            <b>NoSQL :</b> <br />
            1. Database system that is not relational or distributed. <br />
            2. They have dynamic schema <br />
            3. These databases are great for storing hierarchical data. <br />
            4. Complex queries are not well served by these databases. <br />
            5. Horizontally scalable <br />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>What is the purpose of JWT and how does it work?</h5>
          </Accordion.Header>
          <Accordion.Body>
            JWT (JSON Web Token) is an open standard that allows two parties — a
            client and a server — to communicate security information. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed with a cryptographic technique to ensure that the claims
            can't be changed after they've been distributed.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MyBlog;
