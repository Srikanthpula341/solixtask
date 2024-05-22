
import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your plan at any time without any additional charges.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information to your invoices as needed.",
  },
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-8 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <p className="mb-4">
          Everything you need to know about the product and billing.
        </p>
        <button className="bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          View All FAQ's
        </button>
      </div>
      <div className="w-full md:w-1/2">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer py-2 border-b border-gray-300"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <div className="text-lg">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
