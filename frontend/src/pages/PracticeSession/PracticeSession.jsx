import "./PracticeSession.css";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import EmptyState from "../../components/EmptyState/EmptyState";

function PracticeSession() {
  const location = useLocation();
  const navigate = useNavigate();

  const practice = location.state?.practice ?? null;

  const [timeRemaining, setTimeRemaining] = useState(
    practice?.timer?.duration ?? 0
  );

  const [sessionFinished, setSessionFinished] =
  useState(false);

  const [session, setSession] = useState(() => ({
    currentQuestionIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
    selectedAnswers: [],
    startTime: Date.now(),
  }));

  useEffect(() => {
    if (!practice?.timer?.enabled) {
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(interval);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [practice]);

  useEffect(() => {
    if (!practice?.timer?.enabled) {
      return;
    }

    if (timeRemaining > 0) {
      return;
    }

    finishPractice(session);
  }, [timeRemaining]);

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
    if (sessionFinished) {
      return;
    }

    setSessionFinished(true);

    const questionsAttempted =
      updatedSession.correctAnswers +
      updatedSession.incorrectAnswers;

    const accuracy =
      questionsAttempted === 0
        ? 0
        : (
            (updatedSession.correctAnswers /
              questionsAttempted) *
            100
          ).toFixed(2);

    const completedSession = {
      results: {
          correctAnswers: updatedSession.correctAnswers,

          incorrectAnswers:
              updatedSession.incorrectAnswers,

          skippedQuestions:
              updatedSession.skippedQuestions,

          questionsAttempted,

          totalQuestions: sessionQuestions.length,

          accuracy,

          markingScheme,

          timeAllowed:
              practice.timer.duration,

          timeTaken:
              practice.timer.enabled
                  ? practice.timer.duration - timeRemaining
                  : null,

          submissionType:
              practice.timer.enabled &&
              timeRemaining === 0
                  ? "Auto Submitted"
                  : "Completed",
      },

      questions: sessionQuestions,

      selectedAnswers:
        updatedSession.selectedAnswers,

      practiceConfig: {
        title,

        mode: practice.mode,

        subject: practice.subject,

        chapter: practice.chapter,

        questionLimit,
      },
    };

    navigate("/results", {
      state: {
        session: completedSession,
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

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  return (
    <div className="practice-container">
      <h1 className="practice-title">
        {title}
      </h1>

      {practice.timer.enabled && (
        <div
          className={`timer-container ${
            timeRemaining <= 30
              ? "timer-warning"
              : ""
          }`}
        >
          ⏱ {formatTime(timeRemaining)}
        </div>
      )}

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