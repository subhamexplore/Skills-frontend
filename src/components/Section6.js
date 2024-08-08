import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'; 

function Section6() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(prevState => prevState === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Skills++ 2024 free?",
      answer: "Yes, Skills++ 2024 is absolutely free for all."
    },
    {
      question: "What is the drive link that I have to submit on the registration page?",
      answer: "Create a folder in your Google Drive. In this folder, create four subfolders for each of the four weeks and share the drive link with view access (do not leave it on restricted). This link will be used by your mentors to check your task submissions, so don’t miss it or delete it."
    },
    {
      question: "How can I share or download the badges or certificates?",
      answer: "After successfully submitting each task every Sunday, you will receive an email with a link where you can access your badges or certificates. You can download or share them from there."
    },
    {
      question: "Where can I ask my doubts?",
      answer: "After registering, you will receive an email confirming your registration, along with a link to a Discord server. In the server, you can go to the specific domain channel to ask your doubts."
    },
    {
      question: "What will I gain from Skills++?",
      answer: "You will gain hands-on knowledge with mentorship. After successfully completing each task, you will receive a badge, and upon completing the program, you will receive a certificate."
    }
  ];

  return (
    <div id='section6'>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 id='heading' className='faqheading text-center'>
              FAQ<span style={{fontFamily: '"Inter", sans-serif'}}>s</span>
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {faqs.map((faq, index) => (
              <div key={index} className={`cursor-pointer rounded-md border $ border-gray-400 shadow-lg transition-all duration-200`} style={{background:`${openFAQIndex === index ? '#1A1635' :''}`}}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQIndex === index}
                >
                  <span className="flex text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  {openFAQIndex === index ? (
                  <AiOutlineUp style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px' }} className="text-gray-500" />) : (<AiOutlineDown style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px' }} className="text-gray-500" />)
                  }
                </button>
                {openFAQIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-base mt-6 text-center text-gray-600">
            Can&#x27;t find what you&#x27;re looking for?{" "}
            <Link to="#" title="" className="font-semibold hover:underline" style={{color:'#9A8DEC'}}>
              Visit Zairza
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Section6;