import { STORAGE_KEYS } from "../constants/storageKeys";
import {
  loadFromStorage,
  saveToStorage,
} from "./storage";

function getCollection(storageKey) {
  return loadFromStorage(storageKey) ?? [];
}

function saveCollection(storageKey, collection) {
  saveToStorage(storageKey, collection);
}

/* ==========================================
   Bookmarks
========================================== */

export function getBookmarks() {
  return getCollection(STORAGE_KEYS.BOOKMARKS);
}

export function addBookmark(question) {
  const bookmarks = getBookmarks();

  const alreadyExists = bookmarks.some(
    (bookmark) => bookmark.id === question.id
  );

  if (alreadyExists) {
    return;
  }

  bookmarks.push(question);

  saveCollection(
    STORAGE_KEYS.BOOKMARKS,
    bookmarks
  );
}

export function removeBookmark(questionId) {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (bookmark) => bookmark.id !== questionId
  );

  saveCollection(
    STORAGE_KEYS.BOOKMARKS,
    updatedBookmarks
  );
}

export function isBookmarked(questionId) {
  return getBookmarks().some(
    (bookmark) => bookmark.id === questionId
  );
}

/* ==========================================
   Wrong Questions
========================================== */

export function getWrongQuestions() {
  return getCollection(
    STORAGE_KEYS.WRONG_QUESTIONS
  );
}

export function addWrongQuestion(question) {
  const wrongQuestions =
    getWrongQuestions();

  const alreadyExists =
    wrongQuestions.some(
      (wrongQuestion) =>
        wrongQuestion.id === question.id
    );

  if (alreadyExists) {
    return;
  }

  wrongQuestions.push(question);

  saveCollection(
    STORAGE_KEYS.WRONG_QUESTIONS,
    wrongQuestions
  );
}

export function removeWrongQuestion(
  questionId
) {
  const wrongQuestions =
    getWrongQuestions();

  const updatedWrongQuestions =
    wrongQuestions.filter(
      (wrongQuestion) =>
        wrongQuestion.id !== questionId
    );

  saveCollection(
    STORAGE_KEYS.WRONG_QUESTIONS,
    updatedWrongQuestions
  );
}

/* ==========================================
   Unattempted Questions
========================================== */

export function getUnattemptedQuestions() {
  return getCollection(
    STORAGE_KEYS.UNATTEMPTED
  );
}

export function addUnattemptedQuestion(
  question
) {
  const unattemptedQuestions =
    getUnattemptedQuestions();

  const alreadyExists =
    unattemptedQuestions.some(
      (unattemptedQuestion) =>
        unattemptedQuestion.id === question.id
    );

  if (alreadyExists) {
    return;
  }

  unattemptedQuestions.push(question);

  saveCollection(
    STORAGE_KEYS.UNATTEMPTED,
    unattemptedQuestions
  );
}

export function removeUnattemptedQuestion(
  questionId
) {
  const unattemptedQuestions =
    getUnattemptedQuestions();

  const updatedUnattemptedQuestions =
    unattemptedQuestions.filter(
      (unattemptedQuestion) =>
        unattemptedQuestion.id !== questionId
    );

  saveCollection(
    STORAGE_KEYS.UNATTEMPTED,
    updatedUnattemptedQuestions
  );
}