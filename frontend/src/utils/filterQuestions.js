function filterQuestions(questions, filters = {}) {
  return questions.filter((question) => {
    if (
      filters.subject &&
      question.subject !== filters.subject
    ) {
      return false;
    }

    if (
      filters.chapter &&
      question.chapter !== filters.chapter
    ) {
      return false;
    }

    return true;
  });
}

export default filterQuestions;