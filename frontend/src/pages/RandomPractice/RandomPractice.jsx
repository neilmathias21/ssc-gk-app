import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/questions";
import defaultPracticeConfig from "../../data/defaultPracticeConfig";

import shuffleArray from "../../utils/shuffleArray";

function RandomPractice() {
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions);

    const practiceConfig = {
      ...defaultPracticeConfig,

      title: "Random Practice",

      mode: "Random",

      questions: shuffledQuestions,

      totalQuestions: shuffledQuestions.length,

      shuffle: true,

      questionLimit: shuffledQuestions.length,
    };

    navigate("/practice/summary", {
      replace: true,

      state: {
        practice: practiceConfig,
      },
    });
  }, [navigate]);

  return null;
}

export default RandomPractice;