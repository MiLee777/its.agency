export function UserIcon() {
  const elem = document.createElement("button");
  elem.innerHTML = `
      <svg width="22" 
        height="22" 
        viewBox="0 0 22 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8_30)">
            <circle cx="11" cy="23" r="8.4" stroke="black" stroke-width="1.2" />
            <circle cx="11" cy="7" r="3.4" stroke="black" stroke-width="1.2" />
          </g>
          <defs>
            <clipPath id="clip0_8_30">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
    </svg>
  `;

  return elem;
}