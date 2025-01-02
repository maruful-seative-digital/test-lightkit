export default function Subscription() {
  return (
    <main className="p-4">
      {/* heading wrapper */}
      <div className="flex flex-col items-center w-full mt-1 mb-6">
        <h2 className="text-xl">Budget friendly pricing, based upon you</h2>
        <p className="mt-1 text-small text-text-2">
          Let’s get started today 💖
        </p>
      </div>

      {/* pricing cards wrapper */}
      <div className="grid grid-cols-3 gap-4">
        {/* free card */}
        <div className="flex flex-col border rounded-md border-blue-border">
          {/* card all contents */}
          <div className="px-4 pt-[14px]">
            {/* pricing description wrapper */}
            <div>
              <div className="pb-[10px]">
                <h3 className="text-small text-text-3 mb-1.5">Free</h3>
                <p className="text-xl font-semibold">
                  $0.00
                  <span className="font-normal text-small text-text-3">
                    /Monthly
                  </span>
                </p>
              </div>

              <div
                className="pt-[10px] border-t mb-4 min-h-12"
                style={{ borderColor: "rgb(62, 62, 62)" }}
              >
                <p className="text-small text-text-3">
                  Flexible and Affordable for Continuous Innovation
                </p>
              </div>
            </div>

            {/* pricing list wrapper */}
            <div>
              <ul className="space-y-2 text-small text-text-3">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>CMS Sliders</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>Ongoing Updates</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 160 160"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M136.569 23.432c-31.192-31.193-81.945-31.193-113.137 0-31.192 31.191-31.192 81.944 0 113.137C39.028 152.165 59.514 159.963 80 159.963s40.973-7.798 56.569-23.395c31.191-31.192 31.191-81.945 0-113.136zm-7.071 106.066c-27.293 27.293-71.702 27.293-98.995 0-27.293-27.294-27.293-71.703 0-98.996s71.702-27.293 98.995 0c27.292 27.293 27.292 71.702 0 98.996z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                      <path
                        d="M111.047 48.953a5 5 0 0 0-7.071 0L80 72.93 56.024 48.953a4.998 4.998 0 0 0-7.071 0 4.998 4.998 0 0 0 0 7.07L72.929 80l-23.977 23.977a4.998 4.998 0 0 0 3.536 8.535c1.28 0 2.559-.488 3.536-1.465L80 87.071l23.976 23.976a4.983 4.983 0 0 0 3.535 1.465 4.998 4.998 0 0 0 3.536-8.535L87.071 80l23.977-23.977a4.999 4.999 0 0 0-.001-7.07z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                    </g>
                  </svg>
                  <p>Pay once, use forever</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 160 160"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M136.569 23.432c-31.192-31.193-81.945-31.193-113.137 0-31.192 31.191-31.192 81.944 0 113.137C39.028 152.165 59.514 159.963 80 159.963s40.973-7.798 56.569-23.395c31.191-31.192 31.191-81.945 0-113.136zm-7.071 106.066c-27.293 27.293-71.702 27.293-98.995 0-27.293-27.294-27.293-71.703 0-98.996s71.702-27.293 98.995 0c27.292 27.293 27.292 71.702 0 98.996z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                      <path
                        d="M111.047 48.953a5 5 0 0 0-7.071 0L80 72.93 56.024 48.953a4.998 4.998 0 0 0-7.071 0 4.998 4.998 0 0 0 0 7.07L72.929 80l-23.977 23.977a4.998 4.998 0 0 0 3.536 8.535c1.28 0 2.559-.488 3.536-1.465L80 87.071l23.976 23.976a4.983 4.983 0 0 0 3.535 1.465 4.998 4.998 0 0 0 3.536-8.535L87.071 80l23.977-23.977a4.999 4.999 0 0 0-.001-7.07z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Templates</p>
                </li>
              </ul>
            </div>
          </div>

          {/* subscribe button */}
          <div className="px-2 mb-2 mt-7">
            <button
              disabled
              className="w-full gap-2 py-2 mt-auto text-black bg-white/50 text-large rounded-xl"
            >
              Subscribed
            </button>
          </div>
        </div>

        {/* Pro solo card */}
        <div className="flex flex-col border rounded-md border-blue-border">
          {/* card all contents */}
          <div className="px-4 pt-[14px]">
            {/* pricing description wrapper */}
            <div>
              <div className="pb-[10px]">
                <h3 className="text-small text-text-3 mb-1.5">Pro Solo</h3>
                <p className="text-xl font-semibold">
                  $69.00
                  <span className="font-normal text-small text-text-3">
                    /Monthly
                  </span>
                </p>
              </div>

              <div
                className="pt-[10px] border-t mb-4 min-h-12"
                style={{ borderColor: "rgb(62, 62, 62)" }}
              >
                <p className="text-small text-text-3">
                  All-Inclusive Package with a Single Payment
                </p>
              </div>
            </div>

            {/* pricing list wrapper */}
            <div>
              <ul className="space-y-2 text-small text-text-3">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>CMS Sliders</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>Ongoing Updates</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>Pay once, use forever</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 160 160"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M136.569 23.432c-31.192-31.193-81.945-31.193-113.137 0-31.192 31.191-31.192 81.944 0 113.137C39.028 152.165 59.514 159.963 80 159.963s40.973-7.798 56.569-23.395c31.191-31.192 31.191-81.945 0-113.136zm-7.071 106.066c-27.293 27.293-71.702 27.293-98.995 0-27.293-27.294-27.293-71.703 0-98.996s71.702-27.293 98.995 0c27.292 27.293 27.292 71.702 0 98.996z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                      <path
                        d="M111.047 48.953a5 5 0 0 0-7.071 0L80 72.93 56.024 48.953a4.998 4.998 0 0 0-7.071 0 4.998 4.998 0 0 0 0 7.07L72.929 80l-23.977 23.977a4.998 4.998 0 0 0 3.536 8.535c1.28 0 2.559-.488 3.536-1.465L80 87.071l23.976 23.976a4.983 4.983 0 0 0 3.535 1.465 4.998 4.998 0 0 0 3.536-8.535L87.071 80l23.977-23.977a4.999 4.999 0 0 0-.001-7.07z"
                        fill="#ccc"
                        opacity="1"
                        data-original="#ccc"
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Templates</p>
                </li>
              </ul>
            </div>
          </div>

          {/* subscribe button */}
          <div className="px-2 mb-2 mt-7">
            <button className="w-full gap-2 py-2 mt-auto text-white text-large bg-action-primary-hover rounded-xl">
              Subscribe
            </button>
          </div>
        </div>

        {/* Pro team card */}
        <div className="flex flex-col border rounded-md border-blue-border">
          {/* card all contents */}
          <div className="px-4 pt-[14px]">
            {/* pricing description wrapper */}
            <div>
              <div className="pb-[10px]">
                <h3 className="text-small text-text-3 mb-1.5">Pro Team</h3>
                <p className="text-xl font-semibold">
                  $198.00
                  <span className="font-normal text-small text-text-3">
                    /Monthly
                  </span>
                </p>
              </div>

              <div
                className="pt-[10px] border-t mb-4 min-h-12"
                style={{ borderColor: "rgb(62, 62, 62)" }}
              >
                <p className="text-small text-text-3">
                  Complete Solution with Premium Templates and Features
                </p>
              </div>
            </div>

            {/* pricing list wrapper */}
            <div>
              <ul className="space-y-2 text-small text-text-3">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>CMS Sliders</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>Ongoing Updates</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>Pay once, use forever</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <linearGradient
                        id="a"
                        x1="-.051"
                        x2="91.965"
                        y1="-4.851"
                        y2="95.99"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#97e0ff"></stop>
                        <stop offset="1" stop-color="#1075ff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        fill-rule="evenodd"
                        d="M50 2.5c26.216 0 47.5 21.284 47.5 47.5S76.216 97.5 50 97.5 2.5 76.216 2.5 50 23.784 2.5 50 2.5zM25.501 52.686l14.615 14.52a3.65 3.65 0 0 0 5.16-.007l29.23-29.231a3.656 3.656 0 0 0 0-5.167 3.656 3.656 0 0 0-5.166 0L42.685 59.456 30.653 47.501a3.656 3.656 0 0 0-5.167.018 3.656 3.656 0 0 0 .015 5.167z"
                        clip-rule="evenodd"
                        opacity="1"
                        data-original="url(#a)"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  <p>All Slider Templates</p>
                </li>
              </ul>
            </div>
          </div>

          {/* subscribe button */}
          <div className="px-2 mb-2 mt-7">
            <button className="w-full gap-2 py-2 mt-auto text-white text-large bg-action-primary-hover rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
