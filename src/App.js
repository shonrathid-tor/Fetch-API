import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [about, setAbout] = useState("");
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/about")
      .then((res) => res.json())
      .then((data) => setAbout(data.description));

    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));

    fetch("http://localhost:8080/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));

    fetch("http://localhost:8080/contact")
      .then((res) => res.json())
      .then((data) => setContact(data.email));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white flex flex-col items-center p-6">
      <header className="text-4xl font-bold my-6 text-yellow-300">
        My Portfolio
      </header>

      <section className="w-full max-w-3xl space-y-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold text-blue-600">About Me</h2>
          <p className="text-gray-700 mt-2">{about || "Loading..."}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold text-green-600">Projects</h2>
          <ul className="text-gray-700 mt-2">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <li key={index}>{project.name}</li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold text-red-600">Skills</h2>
          <ul className="text-gray-700 mt-2">
            {skills.length > 0 ? (
              skills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold text-purple-600">Contact</h2>
          <p className="text-gray-700 mt-2">{contact || "Loading..."}</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
