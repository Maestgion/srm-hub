import { useState } from "react";
import {
  BsArrowBarUp,
  BsArrowDown,
  BsArrowDownCircle,
  BsArrowDownShort,
  BsArrowDownUp,
  BsBellFill,
  BsLaptopFill,
  BsSearch,
} from "react-icons/bs";
import cn from "classnames";
import { CgArrowDown, CgProfile, CgSpinner } from "react-icons/cg";
import Links from "../student/Links";

function StudentComp() {
  const [data, setData] = useState({
    links: [
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  const greeting = new Date().getHours() > 12 ? "evening" : "morning";

  new Promise((resolve) => {
    setTimeout(() => {
      setLoading(false);
      resolve();
    }, 1500);
  });

  if (loading) {
    return (
      <div className="h-full w-full grid place-items-center">
        <CgSpinner className="spinner" size={24} />
      </div>
    );
  }

  return (
    <div className="px-5 py-3 flex gap-4 h-full">
      <section className="flex-1 px-8 py-4 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Good {greeting}, Anishka!</h1>
          <div className="flex gap-6">
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="flex h-[90%] gap-20 py-6">
          <div className="space-y-16">
            <div className="flex gap-20">
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <a href="#" className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Inhouse Projects
                  </h5>
                  <BsLaptopFill size={32} />
                </a>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 mr-4">
                  Accepted{" "}
                  <span className="text-green-600 ml-2 font-extrabold">5</span>
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                  Rejected
                </button>
              </div>
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <a href="#" className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Research Papers
                  </h5>
                  <BsLaptopFill size={32} />
                </a>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 mr-4">
                  Accepted{" "}
                  <span className="text-green-600 ml-2 font-extrabold">5</span>
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                  Rejected
                </button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Students
                </h5>
                {new Array(4).fill(0).map((_, i) => {
                  return <Student key={i} />;
                })}
              </div>
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex flex-col justify-between">
                  Clubs
                </h5>
                {new Array(4).fill(0).map((_, i) => {
                  return <Club key={i} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-96 flex flex-col items-end gap-6 overflow-scroll scrollbar-hidden">
            {data.links.map((link, index) => {
              return <Links link={link} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Student({ student }) {
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="flex gap-4">
        <div id="image" className="h-10 w-10 rounded-full bg-orange-500"></div>
        <div className="leading-5 min-w-[9rem]">
          <p>Anishka Kesaria</p>
          <p>RA2011003010240</p>
        </div>
      </div>
      <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
        View
      </button>
    </div>
  );
}

function Club({ club }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="flex flex-col items-end">
      <div className="flex w-full justify-between">
        <div className="flex gap-4 justify-between items-center">
          <div
            id="image"
            className="h-10 w-10 rounded-full bg-orange-500"></div>
          <p className="min-w-[9rem]">Coding Ninjas</p>
        </div>
        <button
          className={cn("inline-flex ml-4", shown ? "rotate-180" : null)}
          onClick={() => setShown((prev) => !prev)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className={cn(shown ? null : "hidden", "mt-2")}>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Report
        </button>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Project
        </button>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Req Status
        </button>
      </div>
    </div>
  );
}

export default StudentComp;
