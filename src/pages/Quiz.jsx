import React, { useState, useEffect } from "react";
import "../fonts/stylesheet.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Quiz = () => {
  const questions = [
    {
      question:
        "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: ["200m", "225m", "240m", "250m"],
      ans: "240m",
    },
    {
      question:
        "A man standing at a point P is watching the top ecomes 60°. What is the distance between the base of the tower and the point P?A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° wards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?A man standing at a point P is watc° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?A man standing",
      options: ["4√3 units", "8 units", "12 units", "Inadequate data"],
      ans: "Inadequate data",
    },
    {
      question:
        "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
      options: ["Rs.4991", "Rs.5991", "Rs.6001", "Rs.6991"],
      ans: "Rs.4991",
    },
    {
      question:
        "Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?",
      options: [
        "3.6",
        "6",
        "18",
        "Cannot be Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of inte determined",
      ],
      ans: "6",
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: ["120m", "240m", "300m", "None of these"],
      ans: "240m",
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: ["120m", "240m", "300m", "None of these"],
      ans: "240m",
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: ["120m", "240m", "300m", "None of these"],
      ans: "240m",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const numButtons = 5;
  const half = Math.floor(numButtons / 2);

  let start = Math.max(0, currentQuestionIndex - half);
  let end = Math.min(totalQuestions, currentQuestionIndex + half + 1);

  // Adjust start and end to always show 5 buttons if possible
  if (end - start < numButtons) {
    if (start === 0) {
      end = Math.min(numButtons, totalQuestions);
    } else if (end === totalQuestions) {
      start = Math.max(totalQuestions - numButtons, 0);
    }
  }

  return (
    <div className="Geist-semibold min-h-screen h-screen w-screen flex items-center justify-between flex-col md:px-10 xl:px-16 2xl:px-24">
      <div className=" w-full h-[10%] flex justify-between items-center">
        <div className=" w-[25%] h-full flex items-center justify-start text-2xl ml-8">
          Coderoom
        </div>
        <div className=" w-[50%] h-full flex items-center justify-center gap-4">
          <button
            className="h-10 w-10 border border-gray-400 rounded-[7px] flex items-center justify-center text-2xl"
            onClick={handlePrevious}
          >
            <IoIosArrowBack />
          </button>
          {questions.slice(start, end).map((_, index) => (
            <button
              key={index + start}
              className={`h-10 w-10 border border-gray-400 rounded-[7px] flex items-center justify-center Geist text-lg ${
                currentQuestionIndex === index + start
                  ? "text-white bg-indigo-900"
                  : "text-indigo-900 bg-gray-200"
              }`}
              onClick={() => setCurrentQuestionIndex(index + start)}
            >
              {index + start + 1}
            </button>
          ))}
          <button
            className="h-10 w-10 border border-gray-400 rounded-[7px] flex items-center justify-center text-2xl"
            onClick={handleNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className=" w-[25%] h-full flex items-center justify-end">
          <button className="Geist h-8 w-[100px] border border-gray-400 rounded-[7px] mr-2">
            Guidelines
          </button>
          <span className="w-[240px] h-full text-left text-indigo-800 text-xl Geist flex items-center justify-center mr-4">
            Time Left: &nbsp;
            <span className="Geist-semibold ">
              {currentTime.toLocaleTimeString("en-US", { hour12: false })}
            </span>
          </span>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-[80%] rounded-[10px] border border-gray-300 flex">
        <div className="w-[60%] h-full bg-gray-100 border-r border-gray-300 flex flex-col items-start justify-start text-blue-900">
          <div className="Geist-semibold text-xl w-full h-16 flex items-center justify-between px-8 border-b border-gray-300">
            <h1 className="Geist-semibold">
              Question: {currentQuestionIndex + 1}
            </h1>
            <p className="">{"Marks: 10"}</p>
          </div>
          <div className="px-8 Geist text-xl h-[640px]  overflow-y-auto">
            <h1 className="Geist-semibold my-4">Problem Statement:</h1>
            <p>{currentQuestion.question}</p>
          </div>
        </div>
        <div className="w-[40%] h-full bg-gray-100 flex flex-col items-start justify-start text-blue-900">
          <div className="Geist-semibold text-xl w-full h-16 flex items-center justify-between px-8 border-b border-gray-300"></div>
          <div className=" Geist text-xl h-[640px] w-full  px-8 overflow-y-auto">
            <h1 className="Geist-semibold my-4 text-start">Answer:</h1>
            <ul className=" mt-2">
              {currentQuestion.options.map((option, index) => (
                <button className=" bg-gray-200 border border-gray-300 flex items-center justify-start min-h-16 py-2 rounded-[7px] w-full mb-2 pr-4">
                  <div className="h-full ml-4">
                    <div className="h-3 w-3 border-2 border-blue-900 mr-2 rounded-[50%]"></div>
                  </div>
                  <div key={index} className="my-1 text-left pl-2">
                    {option}
                  </div>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] mb-4 flex justify-between items-center px-16">
        <button className="Geist h-12 w-[120px] bg-red-500 text-white rounded-[7px]">
          Finish
        </button>
        <div>
          <button className="h-12 w-[120px] text-blue-700 rounded-[7px]">
            Skip
          </button>
          <button className="Geist h-12 w-[120px] bg-blue-500 text-white rounded-[7px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
