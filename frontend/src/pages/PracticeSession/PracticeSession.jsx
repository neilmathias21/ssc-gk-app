import "./PracticeSession.css";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import EmptyState from "../../components/EmptyState/EmptyState";

function PracticeSession() {
  const location = useLocation();
  const navigate = useNavigate();

  const practice = location.state?.practice ?? null;

  const [session, setSession] = useState(() => ({
    currentQuestionIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
    selectedAnswers: [],
    startTime: Date.now(),
  }));

  if (!practice) {
    return (
      <EmptyState
        title="No Practice Session"
        message="Start a practice session from the Practice menu."
        buttonText="Return to Practice"
      />
    );
  }

  if (practice.empty) {
    return (
      <EmptyState
        title={practice.title}
        message={practice.message}
        buttonText="Choose Another Option"
      />
    );
  }

  const {
    title,
    questions,
    questionLimit,
    markingScheme,
  } = practice;

  const sessionQuestions =
    questionLimit >= questions.length
      ? questions
      : questions.slice(0, questionLimit);

  function finishPractice(updatedSession) {
    const questionsAttempted =
      updatedSession.correctAnswers +
      updatedSession.incorrectAnswers +
      updatedSession.skippedQuestions;

    const accuracy =
      questionsAttempted === 0
        ? 0
        : (
            (updatedSession.correctAnswers /
              questionsAttempted) *
            100
          ).toFixed(2);

    navigate("/results", {
      state: {
        results: {
          correctAnswers: updatedSession.correctAnswers,
          incorrectAnswers: updatedSession.incorrectAnswers,
          skippedQuestions: updatedSession.skippedQuestions,
          questionsAttempted,
          accuracy,
          markingScheme,
        },
      },
    });
  }

  function onNextQuestion(updatedSession = session) {
    const isLastQuestion =
      updatedSession.currentQuestionIndex ===
      sessionQuestions.length - 1;

    if (isLastQuestion) {
      finishPractice(updatedSession);
      return;
    }

    setSession({
      ...updatedSession,
      currentQuestionIndex:
        updatedSession.currentQuestionIndex + 1,
    });
  }

  function onAnswerSubmit(answer) {
    const updatedSession = {
      ...session,

      selectedAnswers: [
        ...session.selectedAnswers,
        answer,
      ],

      correctAnswers:
        session.correctAnswers +
        (answer.correct ? 1 : 0),

      incorrectAnswers:
        session.incorrectAnswers +
        (answer.correct ? 0 : 1),
    };

    setSession(updatedSession);
  }

  function onSkipQuestion() {
    const updatedSession = {
      ...session,

      skippedQuestions:
        session.skippedQuestions + 1,

      selectedAnswers: [
        ...session.selectedAnswers,
        {
          questionId:
            sessionQuestions[
              session.currentQuestionIndex
            ].id,

          selectedOption: null,

          status: "skipped",
        },
      ],
    };

    onNextQuestion(updatedSession);
  }

  return (
    <div className="practice-container">
      <h1 className="practice-title">
        {title}
      </h1>

      <QuestionCard
        key={
          sessionQuestions[
            session.currentQuestionIndex
          ].id
        }
        question={
          sessionQuestions[
            session.currentQuestionIndex
          ]
        }
        currentQuestion={
          session.currentQuestionIndex + 1
        }
        totalQuestions={
          sessionQuestions.length
        }
        onAnswerSubmit={onAnswerSubmit}
        onNextQuestion={onNextQuestion}
        onSkipQuestion={onSkipQuestion}
        isLastQuestion={
          session.currentQuestionIndex ===
          sessionQuestions.length - 1
        }
      />
    </div>
  );
}

export default PracticeSession;