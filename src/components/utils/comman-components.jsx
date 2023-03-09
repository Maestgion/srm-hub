import cn from "classnames";

export function Student({ student, children, className, details }) {
  return (
    <div className="space-y-2">
      <div className={cn("flex justify-between items-center gap-6", className)}>
        <div className="flex gap-4">
          <div
            id="image"
            className="h-10 w-10 rounded-full bg-orange-500"></div>
          <div>
            <div className="leading-5 min-w-[9rem]">
              <p>Anishka Kesaria</p>
              <p>RA2011003010240</p>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center">{children}</div>
      </div>
      {details}
    </div>
  );
}

export function Club({ club }) {
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
