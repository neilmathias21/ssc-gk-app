import "./ChapterPractice.css";

import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

import chapters from "../../data/chapters";
import questions from "../../data/questions";

import defaultPracticeConfig from "../../data/defaultPracticeConfig";

import filterQuestions from "../../utils/filterQuestions";

function ChapterPractice() {
  const navigate = useNavigate();

  function handleChapterClick(subject, chapter) {
    const filteredQuestions = filterQuestions(questions, {
      subject,
      chapter,
    });

    if (filteredQuestions.length === 0) {
      navigate("/practice/summary", {
        state: {
          practice: {
            empty: true,
            title: "No Questions Available",
            message:
              "There are currently no questions available for this chapter.",
          },
        },
      });

      return;
    }

    const practiceConfig = {
      ...defaultPracticeConfig,

      title: `${chapter} Practice`,

      mode: "Chapter",

      subject,

      chapter,

      questions: filteredQuestions,

      totalQuestions: filteredQuestions.length,

      questionLimit: filteredQuestions.length,
    };

    navigate("/practice/summary", {
      state: {
        practice: practiceConfig,
      },
    });
  }

  return (
    <div className="chapter-container">
      <PageHeader
        title="Choose a Chapter"
        subtitle="Select a chapter to begin practicing."
      />

      {Object.entries(chapters).map(([subject, chapterList]) => (
        <div
          key={subject}
          className="chapter-section"
        >
          <h2>{subject}</h2>

          <div className="chapter-grid">
            {chapterList.map((chapter) => (
              <SelectionCard
                key={chapter}
                title={chapter}
                onClick={() =>
                  handleChapterClick(subject, chapter)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChapterPractice;