import React from "react";

function Plans() {
  // Array containing all the plan details
  const plansData = [
    {
      title: "Basic",
      description: "This plan includes 2 interviews with our experts. You can choose in advance if you prefer focusing on cracking business cases or on the motivational interview, or even both.",
      oldPrice: "160.00",
      newPrice: "120",
    },
    {
      title: "Overtraining",
      description: "This plan includes 3 interviews with our experts. It includes the Basic's offer. With this plan, you are guaranteed to train with a current top-level consultant and get his/her fresh recommendations. You may also choose to spend an interview on leveraging hard skills, like C++, Excel, or advanced math topics.",
      oldPrice: "300.00",
      newPrice: "240",
    },
    {
      title: "Overtraining PRO",
      description: "This plan includes the Overtraining's offer, but you are free to choose the topics of the interviews. A CV template is also offered. Upon availability, we can also simulate business games currently used in the major recruiting companies.",
      oldPrice: "330.00",
      newPrice: "250",
    },
    {
      title: "CV Review",
      description: "We will review together your CV and try an exclusive template. Besides implementing pro-tips, we will learn to story-tell your curriculum vitae to the interviewer.",
      oldPrice: "80.00",
      newPrice: "60",
    },
    {
      title: "Human Resources",
      description: "Why should we not pick you as a candidate? The majority of the candidates fails the easiest questions. We will get through them together.",
      oldPrice: "80.00",
      newPrice: "60",
    },
    {
      title: "Technical Interview",
      description: "No discount is currently available here. Hard stuff htmlFor tough people. We can assess and leverage your hard skills in Excel, advanced Maths topics or advanced programming.",
      oldPrice: null,  // No discount htmlFor this plan
      newPrice: "120",
    },
  ];

  return (
    <div className="p-5">
      <div className="">
        <h2 className="text-3xl mt-10 mb-10 font-bold dark:text-white">Plans</h2>
        {plansData.map((plan, index) => (
          <div key={index} className="rounded-lg">
            <div className="mt-5 text-xl font-semibold dark:text-white">{plan.title}</div>
            <div className="dark:text-white mt-2">{plan.description}</div>
            <div className="mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              {plan.oldPrice && (
                <del className="text-gray-500">{plan.oldPrice}</del>
              )}
              {plan.oldPrice ? ` ${plan.newPrice} euro` : `${plan.newPrice} euro`}
            </div>
            <div className="mb-5"></div>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Plans;