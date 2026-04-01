// integration-exam.js

const ExamIntegration = (function() {
    let startTime = null;
    let submitted = false;
    let attempts = [];

    // Load questions for the exam
    function loadQuestions() {
        // Simulate fetching questions from a server
        return [
            { id: 1, question: 'What is 2 + 2?', options: [3, 4, 5], answer: 4 },
            { id: 2, question: 'What is the capital of France?', options: ['Berlin', 'London', 'Paris'], answer: 'Paris' }
        ];
    }

    // Start the exam timer
    function startTimer() {
        startTime = new Date();
    }

    // Handle form submission
    function handleSubmit(userAnswers) {
        if (submitted) {
            console.log('Exam already submitted.');
            return;
        }
        submitted = true;
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds
        logAttempt(userAnswers, timeTaken);
        console.log('Exam submitted successfully.');
    }

    // Log attempt data
    function logAttempt(userAnswers, timeTaken) {
        attempts.push({ userAnswers, timeTaken, date: new Date() });
        console.log('Attempt logged:', { userAnswers, timeTaken });
    }

    return {
        loadQuestions,
        startTimer,
        handleSubmit,
        getAttempts: () => attempts,
    };
})();

// Example usage:
// const questions = ExamIntegration.loadQuestions();
// ExamIntegration.startTimer();
// ExamIntegration.handleSubmit({ 1: 4, 2: 'Paris' });
