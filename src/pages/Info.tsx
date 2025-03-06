import React from "react";

function Plans() {
  // Array containing all the plan details
  const documentsData = [
    {
      title: "CV",
      description: "Do your best! We will revise it together.",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      ),
    },
    {
      title: "Transcript of Records",
      description: "Send us your marks of all the attended courses.",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M12 2v4"></path><path d="M16 2v4"></path><rect width="16" height="18" x="4" y="4" rx="2"></rect><path d="M8 10h6"></path><path d="M8 14h8"></path><path d="M8 18h5"></path></svg>
      ),
    },
    {
      title: "High School Final Grade",
      description: "A self-certification is sufficient.",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
      ),
    },
    {
      title: "Cover Letter",
      description: "It is highly suggested, albeit not mandatory.",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      ),
    }
  ];

  return (
    <div className="p-5">
      <div className="dark:text-white">
        <h2 className="text-3xl font-bold dark:text-white">Stand out from the crowd</h2>
        <div className="mt-2 dark:text-gray-200">Are you ready to use your problem-solving skills and creativity to make a difference in society?</div>
        <div className="mt-2 dark:text-gray-200">At <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Next Generation Consultants</b>, we are all about unlocking your potential. We are dedicated to empowering individuals and to provide invaluable support in cracking the toughest business cases.</div>
        <div className="mt-2 dark:text-gray-200">Selected individuals demonstrating <b className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">exceptional talent</b> will receive the opportunity to train with our experts in business case cracking.</div>
        <div className="mt-10 pb-10 dark:text-gray-200">During our shared journey, you will be coached by our experts and consultants that will provide you tools and techniques to help you solve the case. This is your perfect occasion to <b>crack business interviews</b> and to foster your early professional career.</div>
        
        <h2 className="text-3xl mt-10 font-bold dark:text-white">Application process</h2>
        <div className="mt-2 dark:text-gray-200">Due to the high demand of our service, a preliminary screening of the candidate will be performed, based on your academic transcript and curriculum vitae.</div>
        <div className="mt-2 dark:text-gray-200">Please note that we are not searching for the already-perfect candidate, so <b>do not hesitate to join</b>.</div>
        <div className="mt-2 dark:text-gray-200">When applying, you will need to enclose the following documents:</div>

        <ol className="ml-10 mt-10 mb-10 relative text-black border-s dark:border-white">
          {documentsData.map((doc, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-200">
                {doc.iconPath}
              </span>
              <h3 className="ml-2 font-bold leading-tight dark:text-white">{doc.title}</h3>
              <p className="ml-2 text-normal dark:text-gray-200">{doc.description}</p>
            </li>
          ))}
        </ol>
        If selected, you can choose one of the following <a href="#plans_id" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">plans</a>.
      </div>
    </div>
  );
}

export default Plans;
