
// // import { OrgCard } from "./OrgCard";
// // import { VerticalLine, HorizontalLine } from "./Connector";

// // export const OrganizationChart = () => {
// //   return (
// //     <section className="py-28 bg-muted">
// //       <div className="container mx-auto px-4 text-center">
// //         <h2 className="font-display text-4xl font-bold mb-20">
// //           Organization <span className="text-gradient-amber">Structure</span>
// //         </h2>

// //         {/* TOP */}
// //         <div className="flex flex-col items-center">
// //           <OrgCard
// //             title="Project Co-Ordinator"
// //             subtitle="Weekly Meeting"
// //             color="bg-rose-500"
// //           />
// //           <VerticalLine height={40} />
// //           <OrgCard
// //             title="Project Manager"
// //             subtitle="At Site"
// //             color="bg-teal-600"
// //           />
// //           <VerticalLine height={50} />
// //           <HorizontalLine width="85%" />
// //         </div>

// //         {/* SENIOR + ASSISTANT STACKED */}
// //         <div className="grid grid-cols-6 gap-6 mt-0">
// //           {[
// //             {
// //               senior: "Senior Engineer",
// //               assistant: "Assistant Engineer",
// //               hasSupervisor: true,
// //             },
// //             {
// //               senior: "Senior Engineer",
// //               assistant: "Assistant Engineer",
// //               hasSupervisor: true,
// //             },
// //             {
// //               senior: "Senior Billing Engineer",
// //               assistant: "Assistant Billing Engineer",
// //               hasSupervisor: false,
// //             },
// //             {
// //               senior: "Senior Engineer QA / QC",
// //               assistant: "Assistant Engineer QA / QC",
// //               hasSupervisor: false,
// //             },
// //             {
// //               senior: "Safety Officer",
// //               assistant: "Assistant Safety Officer",
// //               hasSupervisor: false,
// //             },
// //             {
// //               senior: "Store & Account",
// //               assistant: "Assistant Store & Account",
// //               hasSupervisor: false,
// //             },
// //           ].map((col, i) => (
// //             <div key={i} className="flex flex-col items-center">
// //               {/* Senior */}
// //               <VerticalLine height={40} />
// //               <OrgCard title={col.senior} color="bg-amber-500" />

// //               {/* Senior → Assistant connector */}
// //               <VerticalLine height={60} />

// //               {/* Assistant */}
// //               <OrgCard title={col.assistant} color="bg-indigo-600" />

// //               {/* LEAF NODES: ONLY first two assistants connect to site supervisors */}
// //               {col.hasSupervisor && (
// //                 <div className="flex flex-col items-center w-full">
// //                   {/* 1. Vertical line: Always stays centered exactly below the Assistant Engineer */}
// //                   <VerticalLine height={70} />

// //                   {/* 2. Horizontal Bridge: Centered for col 1, Offset to start from center for col 2 */}
// //                   <div className="relative w-full flex justify-center">
// //                     <div
// //                       className={i === 1
// //                         ? "absolute left-1/2 w-[260px]" // Starts exactly at center and goes right
// //                         : "w-[170px]"                  // Stays centered for the first one
// //                       }
// //                     >
// //                       <HorizontalLine width="100%" />
// //                     </div>
// //                   </div>

// //                   {/* 3. Supervisors Grid: Shifted right for col 2 to prevent overlap */}
// //                   <div
// //                     className={`grid grid-cols-2 gap-32 w-full ${i === 1 ? "translate-x-44" : ""
// //                       }`}
// //                   >
// //                     {[0, 1].map((_, idx) => (
// //                       <div key={idx} className="flex flex-col items-center">
// //                         {/* Vertical line connecting bridge to leaf node */}
// //                         <VerticalLine height={50} />
// //                         <OrgCard
// //                           title="Site Supervisor"
// //                           subtitle="On Site"
// //                           color="bg-teal-700"
// //                         />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };


// import { OrgCard } from "./OrgCard";
// import { VerticalLine, HorizontalLine } from "./Connector";

// export const OrganizationChart = () => {
//   return (
//     <section className="py-28 bg-muted overflow-x-hidden">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="font-display text-4xl font-bold mb-20">
//           Organization <span className="text-gradient-amber">Structure</span>
//         </h2>

//         {/* 👉 MOBILE SCROLL WRAPPER */}
//         <div className="w-full overflow-x-auto">
//           {/* 👉 FIXED WIDTH TO PRESERVE LAYOUT */}
//           <div className="min-w-[1700px] mx-auto">

//             {/* TOP */}
//             <div className="flex flex-col items-center">
//               <OrgCard
//                 title="Project Co-Ordinator"
//                 subtitle="Weekly Meeting"
//                 color="bg-rose-500"
//               />
//               <VerticalLine height={40} />
//               <OrgCard
//                 title="Project Manager"
//                 subtitle="At Site"
//                 color="bg-teal-600"
//               />
//               <VerticalLine height={50} />
//               <HorizontalLine width="85%" />
//             </div>

//             {/* SENIOR + ASSISTANT STACKED */}
//             <div className="grid grid-cols-6 gap-6 mt-0">
//               {[
//                 { senior: "Senior Engineer", assistant: "Assistant Engineer", hasSupervisor: true },
//                 { senior: "Senior Engineer", assistant: "Assistant Engineer", hasSupervisor: true },
//                 { senior: "Senior Billing Engineer", assistant: "Assistant Billing Engineer", hasSupervisor: false },
//                 { senior: "Senior Engineer QA / QC", assistant: "Assistant Engineer QA / QC", hasSupervisor: false },
//                 { senior: "Safety Officer", assistant: "Assistant Safety Officer", hasSupervisor: false },
//                 { senior: "Store & Account", assistant: "Assistant Store & Account", hasSupervisor: false },
//               ].map((col, i) => (
//                 <div key={i} className="flex flex-col items-center">

//                   <VerticalLine height={40} />
//                   <OrgCard title={col.senior} color="bg-amber-500" />

//                   <VerticalLine height={60} />
//                   <OrgCard title={col.assistant} color="bg-indigo-600" />

//                   {col.hasSupervisor && (
//                     <div className="flex flex-col items-center w-full">
//                       <VerticalLine height={70} />

//                       {/* Horizontal connector */}
//                       <div className="relative w-full flex justify-center">
//                         <div
//                           className={
//                             i === 1
//                               ? "absolute left-1/2 w-[260px]"
//                               : "w-[170px]"
//                           }
//                         >
//                           <HorizontalLine width="100%" />
//                         </div>
//                       </div>

//                       {/* Site Supervisors */}
//                       <div
//                         className={`grid grid-cols-2 gap-32 w-full ${
//                           i === 1 ? "translate-x-44" : ""
//                         }`}
//                       >
//                         {[0, 1].map((_, idx) => (
//                           <div key={idx} className="flex flex-col items-center">
//                             <VerticalLine height={50} />
//                             <OrgCard
//                               title="Site Supervisor"
//                               subtitle="On Site"
//                               color="bg-teal-700"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { OrgCard } from "./OrgCard";
import { VerticalLine, HorizontalLine } from "./Connector";

export const OrganizationChart = () => {
  return (
    <section className="py-28 bg-muted overflow-x-hidden">
      {/* 1. OUTER PAGE CONTAINER: Expanded to 98% for a larger screen presence */}
      <div className="max-w-[98%] mx-auto px-4 text-center">
        
        <h2 className="font-display text-4xl font-bold mb-20">
          Organization <span className="text-gradient-amber">Structure</span>
        </h2>

        {/* 2. THE MOBILE LOCK: Allows horizontal swiping on small screens without breaking lines */}
        <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing">
          
          {/* 3. THE INTERNAL ANCHOR: Increased to 1600px to give all columns more room */}
          <div className="min-w-[1600px] mx-auto relative px-10">

            {/* TOP MANAGEMENT SECTION */}
            <div className="flex flex-col items-center">
              <OrgCard
                title="Project Co-Ordinator"
                subtitle="Weekly Meeting"
                color="bg-rose-500"
              />
              <VerticalLine height={40} />
              <OrgCard
                title="Project Manager"
                subtitle="At Site"
                color="bg-teal-600"
              />
              <VerticalLine height={50} />
              {/* Main horizontal bridge connecting to the 6 branches */}
              <HorizontalLine width="85.2%" />
            </div>

            {/* MAIN 6-COLUMN GRID */}
            <div className="grid grid-cols-6 gap-8 mt-0">
              {[
                { senior: "Senior Engineer", assistant: "Assistant Engineer", hasSupervisor: true },
                { senior: "Senior Engineer", assistant: "Assistant Engineer", hasSupervisor: true },
                { senior: "Senior Billing Engineer", assistant: "Assistant Billing Engineer", hasSupervisor: false },
                { senior: "Senior Engineer QA / QC", assistant: "Assistant Engineer QA / QC", hasSupervisor: false },
                { senior: "Safety Officer", assistant: "Assistant Safety Officer", hasSupervisor: false },
                { senior: "Store & Account", assistant: "Assistant Store & Account", hasSupervisor: false },
              ].map((col, i) => (
                <div key={i} className="flex flex-col items-center">
                  
                  {/* Senior Management Layer */}
                  <VerticalLine height={40} />
                  <OrgCard title={col.senior} color="bg-amber-500" />

                  {/* Connector to Assistant Layer */}
                  <VerticalLine height={60} />
                  <OrgCard title={col.assistant} color="bg-indigo-600" />

                  {/* LEAF NODES: Site Supervisors */}
                  {col.hasSupervisor && (
                    <div className="flex flex-col items-center w-full">
                      
                      {/* Vertical line: Perfectly centered under the Assistant Engineer card */}
                      <VerticalLine height={70} />

                      {/* Horizontal Bridge: Different logic for the first vs. second assistant */}
                      <div className="relative w-full flex justify-center">
                        <div
                          className={
                            i === 1
                              ? "absolute left-1/2 w-[280px]" // Starts at center and goes right only
                              : "w-[180px]"                  // Stays centered for the first column
                          }
                        >
                          <HorizontalLine width="100%" />
                        </div>
                      </div>

                      {/* Site Supervisors Grid */}
                      <div
                        className={`grid grid-cols-2 gap-32 w-full ${
                          i === 1 ? "translate-x-48" : "" // Shifted right for column 2 to prevent overlap
                        }`}
                      >
                        {[0, 1].map((_, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            {/* Vertical line connecting bridge to leaf node card */}
                            <VerticalLine height={50} />
                            <OrgCard
                              title="Site Supervisor"
                              subtitle="On Site"
                              color="bg-teal-700"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Swipe Hint for Mobile Users */}
        <p className="text-sm text-muted-foreground mt-6 md:hidden animate-pulse">
          ← Swipe to view full construction team →
        </p>

      </div>
    </section>
  );
};