import React, { useState } from "react";
import codeforces from "../../public/codeforces.png";
import codechef from "../../public/codechef.png";
import leetcode from "../../public/leetcode.png";
import hackerrank from "../../public/hackerrank.png";

function Experience() {
  // State to manage the visibility of the Steps section
  const [showSteps, setShowSteps] = useState(false);

  // Function to toggle the visibility of the Steps section
  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };
  const cardItem = [
    {
      id: 1,
      logo: codeforces,
      name: "Codeforces",
      url: "https://codeforces.com/", // Replace with your actual Codeforces profile URL
    },
    {
      id: 2,
      logo: codechef,
      name: "Codechef",
      url: "https://www.codechef.com/", // Replace with your actual Codechef profile URL
    },
    {
      id: 3,
      logo: leetcode,
      name: "Leetcode",
      url: "https://leetcode.com/", // Replace with your actual Leetcode profile URL
    },
    {
      id: 4,
      logo: hackerrank,
      name: "HackerRank",
      url: "https://www.hackerrank.com/", // Replace with your actual Work profile URL
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-20"
    >
      <hr/>
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-3">Coding</h1>
        <h3 className="text-xl text-blue-400">Coding Platforms</h3>
        <div
          name="About"
          className="max-w-screen-2xl container mx-auto px-0 md:px-2 my-8"
        >
          <button
            onClick={toggleSteps}
            className="text-gray-500 font-semibold text-xl py-1 px-2 border border-yellow-600 rounded ml-0"
          >
            {showSteps ? "Hide Steps" : "Steps"}
          </button>

          {showSteps && (
            <div>
              <h1 className="text-xl pt-2 text-gray-200">
              1. Choose the Right Platform
              </h1>
              <p>
              Start with platforms like LeetCode, Codechef, HackerRank, Codeforces.
              </p>
              <br />

              <h1 className="text-xl pt-2 text-gray-200">
              2. Set Up an Account
              </h1>
              <p>
              Sign up for an account on your chosen platform. 
              Don't use your college email ID for this. 
              <br />
              Many coding platforms send emails about coding 
              rounds and updates, and your college email ID 
              may be deactivated after you graduate. Instead, 
              use a personal email address that you will retain long-term.
              </p>
              <br />

              <h1 className="text-xl pt-2 text-gray-100">
              3. Explore the platforms
              </h1>
              <p>
              Familiarize yourself with the platform’s interface and features. 
              Look for tutorials, FAQs, or getting started guides if available.
              </p>
              <br />

              <h1 className="text-xl pt-2 text-gray-200">
              4. Understand the Problem-Solving Structure
              </h1>
              <p>
              Browse Problems: Explore different categories or problem sets. 
              Platforms often have problems categorized by difficulty or topic.
              <br />
              Read Problem Statements: Carefully read problem statements and 
              understand the requirements and constraints.
              </p>
              <br />

              <h1 className="text-xl pt-2 text-gray-200">
              5. Start with Easy Problems
              </h1>
              <p>
              Begin with easier problems to build your confidence. 
              Most platforms have a problem difficulty rating system.
              </p>
              <br />

              <h1 className="text-xl pt-2 text-gray-200">
              6. Practice Regularly
              </h1>
              <p>
              Set aside dedicated time each day or week to practice. 
              Consistent practice helps in improving problem-solving skills.
              </p>
              <br />
              
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, url }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 md:w-[170px] md:h-[170px] cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} className="w-[120px] rounded-full" alt={name} />
              <div>
                <div className="">{name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 my-8" />
      <div>
        
      </div>
    </div>
  );
}

export default Experience;
