import "./SubjectPractice.css";

import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

import subjects from "../../data/subjects";
import questions from "../../data/questions";

import filterQuestions from "../../utils/filterQuestions";

function SubjectPractice() {
  const navigate = useNavigate();

  function handleSubjectClick(subject) {
    const filteredQuestions = filterQuestions(
      questions,
      {
        subject,
      }
    );

    if (filteredQuestions.length === 0) {
      navigate("/practice/session", {
        state: {
          practice: {
            empty: true,
            title: "No Questions Available",
            message:
              "There are currently no questions available for this subject.",
          },
        },
      });

      return;
    }

    navigate("/practice/session", {
      state: {
        practice: {
          title: `${subject} Practice`,
          mode: "subject",
          subject,
          questions: filteredQuestions,
        },
      },
    });
  }

  return (
    <div className="subject-container">
      <PageHeader
        title="Choose a Subject"
        subtitle="Select a subject to begin practicing."
      />

      <div className="subject-grid">
        {subjects.map((subject) => (
          <SelectionCard
            key={subject}
            title={subject}
            onClick={() =>
              handleSubjectClick(subject)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectPractice;