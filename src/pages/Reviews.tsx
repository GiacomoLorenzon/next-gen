import React from "react";

function Plans() {
  // Array containing all the plan details

  const reviewsData = [
    {
      user: "Sara Wanders",
      user_now: "Now at BCG",
      vote: 4,
      description: "This service provides comprehensive preparation for business games and interviews, blending theory with practical application. Through simulated scenarios and tailored feedback, candidates develop decision-making and interpersonal skills. Its commitment to staying updated on industry trends ensures relevance and effectiveness, making it a top choice for professional development."
    },
    {
      user: "Michela Furla",
      user_now: "Now at GS",
      vote: 5,
      description: "This service is like a coach for aspiring business leaders, shaping potential into excellence. With workshops, coaching, and simulations, it propels candidates towards success. Imagine confidently navigating business challenges, armed with real-world insights and expert guidance. It's an adventure towards career ascendancy, brimming with promise and possibility."
    },
    {
      user: "Riccardo Marangoni",
      user_now: "Now at AXA",
      vote: 3,
      description: "This service stands out for its comprehensive support in business game and interview preparation. Grounded in industry best practices, it equips candidates with skills to excel in modern business environments. Personalized attention ensures tailored guidance, making it the discerning choice htmlFor career advancement."
    },
    {
      user: "Thomas Witney",
      user_now: "Now at MIT",
      vote: 4,
      description: "This service rescues candidates from the jaws of awkwardness and uncertainty in business games and interviews. With wit and wisdom, it transforms nervous wrecks into confident professionals. Think of it as your personal Yoda through the jungle of corporate craziness. It's a wild ride, but at least you won't be alone!"
    }
  ];

  return (
    <div className="p-5">

      <div className="text-3xl mb-5 font-bold dark:text-white">Reviews</div>
      {reviewsData.map((review, index) => (
        <figure
          key={index}
          className="max-w-screen-md mb-8 group relative">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 group-hover:translate-x-5 group-hover:text-purple-600 transition-all duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <blockquote>
            <p className="italic text-gray-900 dark:text-white">{review.description}</p>
          </blockquote>
          <figcaption className="flex items-center mt-2 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
              <cite className="pe-3 not-italic font-medium text-gray-900 dark:text-white">{review.user}</cite>
              <cite className="pe-3 pl-3 not-italic font-medium text-gray-900 dark:text-white">
              <div className="flex items-center text-yellow-300">
                {/* Ensure review.vote is treated as a number and safely handled */}
                {Array.from({ length: Number(review.vote) || 0 }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
              </div>
              </cite>
              <cite className="ps-3 not-italic text-sm text-gray-500 dark:text-gray-400">{review.user_now}</cite>
            </div>
          </figcaption>
        </figure>
      ))}

      <div className="mt-20">
        <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Apply to the program!</div>
        <div className="mt-2 font-normal dark:text-gray-200">Do not hesitate. Send your candidature at this <a href="mailto:info@example.com" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">mail address</a>. Upload the required documents and please specify if you wish to focus on a specific company. Experts are contacted upon availability.</div>
        <div className="mt-2 font-normal dark:text-gray-200">At this level, you are not required to pay, neither to specify your availabilities. We will contact you <b>as soon as possible</b>, even if you are not eligible for our program.</div>
        <div className="mt-2 font-normal dark:text-gray-200">Please notice that, due to the high demand, this process might take a few days.</div>
      </div>

      <div className="faqs mt-10 font-normal">
        <div className="text-2xl font-bold dark:text-gray-200">FAQs</div>
          <div className="dark:text-gray-200">Frequently asked questions.</div>
      </div>
    </div>
  );
}

export default Plans;