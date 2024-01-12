import React from "react";

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <div>
      <svg height="250" width="200" className="figure-container">
        {/* // <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {errors > 0 && <circle cx="140" cy="70" r="20" />}
        {/* <!-- Body --> */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* <!-- Arms --> */}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
        {errors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
        {/* <!-- Legs --> */}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
        {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
        {/* <!-- Top Hat --> */}
        {errors > 6 && (
          <g>
            <rect x="130" y="35" width="20" height="20" fill="#000" />
            <rect x="120" y="55" width="40" height="7" fill="#000" />
          </g>
        )}

        {/* <!-- Shoes --> */}
        {errors > 7 && (
          <g>
            <rect x="105" y="180" width="20" height="10" fill="#000" />
            <rect x="155" y="180" width="20" height="10" fill="#000" />
          </g>
        )}
        {/* <!-- Facial Hair --> */}
        {errors > 8 && (
          <g>
            <line
              x1="135"
              y1="80"
              x2="145"
              y2="80"
              stroke="#000"
              strokeWidth="3"
            />
            <line
              x1="130"
              y1="85"
              x2="150"
              y2="85"
              stroke="#000"
              strokeWidth="3"
            />
            <line
              x1="130"
              y1="90"
              x2="150"
              y2="90"
              stroke="#000"
              strokeWidth="3"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default Figure;
