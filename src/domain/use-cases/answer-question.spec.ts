import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";

const instructorId = "instructor-123";
const questionId = "question-456";
const content = "This is an answer to the question.";

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer) => {
    return;
  },
};

test("should create answer question", async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository);
  const answer = await answerQuestionUseCase.execute({
    instructorId,
    questionId,
    content,
  });

  expect(answer).toBeDefined();
  expect(answer.content).toBe(content);
  expect(answer.id).toBeDefined();
});
