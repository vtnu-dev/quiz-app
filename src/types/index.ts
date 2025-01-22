interface Question {
  question: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  correct: boolean;
}

interface TriviaProps {
  data: Question[];
  setStop: (value: boolean) => void;
  questionNumber: number;
  setQuestionNumber: (value: number) => void;
  newRandomArr: number[];
} 