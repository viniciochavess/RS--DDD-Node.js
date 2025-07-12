import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

const instructorId = "instructor-123";
const questionId = "question-456";
const content = "This is an answer to the question.";

test("should create answer question", () => {

  const answerQuestionUseCase = new AnswerQuestionUseCase();
  const answer = answerQuestionUseCase.execute({
    instructorId,
    questionId,
    content,
  });


  expect(answer).toBeDefined();
  expect(answer.content).toBe(content);
  expect(answer.id).toBeDefined();
});
