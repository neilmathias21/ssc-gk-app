const defaultPracticeConfig = {
  title: "",
  mode: "",

  subject: "",
  chapter: "",

  questions: [],
  totalQuestions: 0,

  shuffle: false,

  questionLimit: 0,

  markingScheme: {
    correct: 2,
    incorrect: -0.5,
  },

  timer: {
    enabled: false,
    duration: 0,
  },
};

export default defaultPracticeConfig;