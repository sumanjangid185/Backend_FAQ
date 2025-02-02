import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Import ReactQuill dynamically (for Next.js SSR)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const FAQPage = () => {
  // State to store all FAQs (Initial questions, no answers)
  const [faqs, setFaqs] = useState([
    { id: 1, question: "What is React?", answer: [] },
    { id: 2, question: "How does useState work?", answer: [] }
  ]);

  // State for new FAQ input
  const [newQuestion, setNewQuestion] = useState("");

  // State for answers being edited
  const [editingFAQ, setEditingFAQ] = useState(null);
  const [tempAnswer, setTempAnswer] = useState("");

  // Add a new FAQ (Question only)
  const handleAddFAQ = () => {
    if (newQuestion.trim()) {
      setFaqs([...faqs, { id: faqs.length + 1, question: newQuestion, answer: "" }]);
      setNewQuestion("");
    }
  };

  // Save Answer for a FAQ
  const handleSaveAnswer = (id) => {
    setFaqs(faqs.map(faq => (faq.id === id ? { ...faq, answer: tempAnswer } : faq)));
    setEditingFAQ(null);
    setTempAnswer("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{faq.question}</h3>

            {/* If editing, show the editor */}
            {editingFAQ === faq.id ? (
              <div>
                <ReactQuill value={tempAnswer} onChange={setTempAnswer} className="mb-3" />
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={() => handleSaveAnswer(faq.id)}
                >
                  Save Answer
                </button>
              </div>
            ) : (
              <div>
                {faq.answer ? (
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                ) : (
                  <p className="text-gray-500 italic">No answer yet.</p>
                )}
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => {
                    setEditingFAQ(faq.id);
                    setTempAnswer(faq.answer);
                  }}
                >
                  {faq.answer ? "Edit Answer" : "Add Answer"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New FAQ Form */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Add a New FAQ</h3>
        <input
          type="text"
          placeholder="Enter Question"
          className="w-full p-2 mb-3 border rounded-md"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleAddFAQ}
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
