import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/questions";
import shuffleArray from "../../utils/shuffleArray";

function RandomPractice() {
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions);

    navigate("/practice/session", {
      replace: true,
      state: {
        practice: {
          title: "Random Practice",
          mode: "random",
          questions: shuffledQuestions,
        },
      },
    });
  }, [navigate]);

  return null;
}

export default RandomPractice;