import React from "react";

const socialLinks = [
  {
    href: "https://github.com/TithiGhosh18",
    label: "GitHub",
    svg: (
      <svg
        viewBox="0 0 496 512"
        fill="currentColor"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-32.5-6.5c-.7 1.5-2.6 2-4.3 1.2-1.7-.8-2.5-2.6-1.8-4.1.7-1.5 2.6-2 4.3-1.2 1.7.8 2.5 2.6 1.8 4.1zm44.8-1.7c-1.1 1.3-3.5.8-5.2-1.1-1.7-1.9-2-4.5-.9-5.7 1.1-1.3 3.5-.8 5.2 1.1 1.7 1.9 2 4.5.9 5.7zm34.9-3.4c0 1.6-2.2 2.9-4.9 2.9s-4.9-1.3-4.9-2.9c0-1.6 2.2-2.9 4.9-2.9s4.9 1.3 4.9 2.9zm29.4-4.1c-.5 1.7-3 2.4-5.5 1.6-2.5-.8-4.1-3-3.6-4.7.5-1.7 3-2.4 5.5-1.6 2.5.8 4.1 3 3.6 4.7zm27.2-6.6c0 1.4-2.1 2.5-4.6 2.5-2.5 0-4.6-1.1-4.6-2.5s2.1-2.5 4.6-2.5c2.5 0 4.6 1.1 4.6 2.5zm-106.2-26c-21.5 2-44.8-4.3-63.1-22-24-22.3-30.6-54.7-19.7-88.4 3.6-11.8 11.3-22.6 21.4-30.5 17-13.5 41.3-14 60.5-6.1 5.4 2.3 10.7 5.5 15.6 9.3 1.6 1.3 3.5 1.9 5.4 1.6 4.7-.8 9.3-1.4 13.8-1.8 2.4-.2 4.5 1.8 4.5 4.3v65.7c0 2.1-1.6 4-3.6 4.4-1.3.3-2.6 1-3.6 2-3.4 3.5-8.2 7.5-13.8 12-3.3 2.6-7.3 5.5-11.9 8.2-7.8 4.7-17.3 8.8-28.2 11.8zM248 8C111 8 0 119 0 256c0 109.4 70.8 202.6 169.2 235.4 12.4 2.3 16.9-5.4 16.9-12 0-6-0.2-21.8-0.3-42.9-68.8 15-83.4-33.2-83.4-33.2-11.3-28.7-27.6-36.3-27.6-36.3-22.5-15.4 1.7-15.1 1.7-15.1 24.9 1.7 38 25.6 38 25.6 22.1 37.8 58 26.9 72.1 20.6 2.2-16 8.7-26.9 15.8-33.1-54.9-6.2-112.6-27.4-112.6-121.9 0-26.9 9.6-48.9 25.3-66.1-2.5-6.2-11-31.2 2.4-65 0 0 20.6-6.6 67.6 25.3 19.6-5.4 40.7-8.1 61.7-8.2 21 0.1 42.1 2.8 61.7 8.2 47-31.9 67.6-25.3 67.6-25.3 13.4 33.8 4.9 58.8 2.4 65 15.7 17.2 25.3 39.2 25.3 66.1 0 94.7-57.8 115.6-112.9 121.7 8.9 7.6 16.8 22.7 16.8 45.8 0 33.1-0.3 59.8-0.3 68 0 6.6 4.5 14.4 17 12 98.2-32.8 169-126 169-235.3C496 119 385 8 248 8z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/tithi-ghosh04/",
    label: "LinkedIn",
    svg: (
      <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.77a53.79 53.79 0 1 1 107.58 0c0 29.7-24.1 54.33-53.79 54.33zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.8 13.3-2.8 21.1V448h-92.4s1.2-265.3 0-292.1h92.4v41.4c12.3-19 34.3-46 83.5-46 60.9 0 106.7 39.8 106.7 125.4V448z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/tithi_ghosh04/",
    label: "Instagram",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
    ),
  },
  {
    href: "https://x.com/tithighosh047",
    label: "Twitter",
    svg: (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097 0 13.645-2.557 35.868-23.31 76.268-64.775 108.502-41.464 32.234-94.815 45.91-152.02 41.098-17.34-1.44-33.814-5.064-49.098-10.945-5.713-2.325-11.286-5.048-16.672-8.112-1.18-.728-2.404-1.427-3.678-2.054-2.32-1.215-4.438-2.527-6.285-3.92-11.06-8.088-16.338-23.172-12.97-38.183a29.542 29.542 0 01-13.034-5.132c-10.618-7.844-14.92-23.744-10.158-37.098 5.58-15.806 24.642-26.89 44.725-23.804a31.66 31.66 0 01-10.527-11.426c-6.908-13.534-2.986-31.253 10.812-39.955 15.898-10.592 39.102-6.247 49.264 9.874 2.26 4.08 3.317 8.932 2.78 13.65a20.87 20.87 0 001.862-1.76c.027-.03.057-.058.086-.086.041-.04.081-.08.123-.117a18.464 18.464 0 012.172-1.515c5.01-2.859 11.033-3.39 16.646-1.494 9.428 3.183 16.055 11.44 16.68 21.432 1.83 26.733-6.053 55.256-23.417 74.495z" />
      </svg>
    ),
  },
];

const LeftSocialMediaIcons = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col items-center space-y-4 p-2 ">
      
      {socialLinks.map(({ href, label, svg }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`My ${label}`}
          className="text-cyan-500 hover:text-blue-500 transition-colors duration-200"
        >
          {svg}
        </a>
      ))}
      <hr className="w-0.5 h-16 bg-cyan-500" />
    </div>
  );
};

export default LeftSocialMediaIcons;
