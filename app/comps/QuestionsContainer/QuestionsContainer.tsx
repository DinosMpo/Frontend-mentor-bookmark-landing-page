"use client";

import Image from "next/image";
import { useState } from "react";
import "./QuestionsContainer.css";

export default function QuestionsContainer() {
  const [activeAnswer, setActiveAnswer] = useState<Record<string, boolean>>({
    a1: false,
    a2: false,
    a3: false,
    a4: false,
  });

  const questions = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sedsollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const showAnswer = (item: keyof typeof activeAnswer) => {
    setActiveAnswer({
      ...activeAnswer,
      [item as keyof typeof activeAnswer]:
        !activeAnswer[item as keyof typeof activeAnswer],
    });
  };

  const questionsList = questions.map((item, key) => {
    return (
      <div
        className="question-container"
        onClick={() => showAnswer(`a${key + 1}` as keyof typeof activeAnswer)}
        key={key}
      >
        <div className="question-wrapper">
          <div className={`question-question q${key + 1}`}>{item.question}</div>
          <Image
            alt="arrow image"
            src="./icon-arrow.svg"
            width="18"
            height="12"
            className={`arrow-icon ${activeAnswer[`a${key + 1}`] ? "test" : ""}`}
          />
        </div>
        <div
          className={`question-answer ${activeAnswer[`a${key + 1}`] ? "activeAnswer" : ""} a${key + 1}`}
        >
          {item.answer}
        </div>

        <div style={{ borderBottom: "1px solid lightgrey" }}></div>
      </div>
    );
  });

  return (
    <div id="questions-container">
      <h1 id="questions-title">Frequently Asked Questions</h1>
      <div id="questions-description">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </div>

      <div id="questions-wrapper">
        <div style={{ borderTop: "1px solid lightgrey" }}></div>
        {questionsList}
      </div>

      <div id="questions-more-info">More Info</div>
    </div>
  );
}
