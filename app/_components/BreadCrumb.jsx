import React from "react";

const BreadCrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex overflow-hidden rounded border border-gray-200 bg-white text-sm text-gray-700">
        <li>
          <a
            href="#"
            className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900"
          >
            Home
          </a>
        </li>
        <li className="relative flex items-center">
          <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
          <a
            href="#"
            className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900"
          >
            Category
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
