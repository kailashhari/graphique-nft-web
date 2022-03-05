import React from "react";
import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import HeaderNav from "./HeaderNav";

const Header = ({dark, setDark}) => {
  return (
    <div className={classes.header_d}>
      <svg
        onClick={() => {setDark(!dark); localStorage.setItem('dark', !dark)}}
        width="168"
        height="32"
        viewBox="0 0 168 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.0544 20.416V15.552H43.1904V17.68H45.6704V19.28C45.0464 19.728 44.2464 19.952 43.3504 19.952C41.3664 19.952 39.9584 18.448 39.9584 16.4V16.368C39.9584 14.464 41.3824 12.88 43.1744 12.88C44.4704 12.88 45.2384 13.296 46.1024 14.016L47.6544 12.144C46.4864 11.152 45.2704 10.608 43.2544 10.608C39.8624 10.608 37.3824 13.216 37.3824 16.4V16.432C37.3824 19.744 39.7824 22.192 43.2704 22.192C45.3184 22.192 46.9024 21.392 48.0544 20.416ZM55.3372 15.808V13.264C53.8972 13.2 53.0972 13.968 52.6012 15.152V13.424H50.1692V22H52.6012V18.832C52.6012 16.784 53.5932 15.808 55.2092 15.808H55.3372ZM63.8265 22V17.024C63.8265 14.704 62.6585 13.328 60.0025 13.328C58.5465 13.328 57.6185 13.6 56.6745 14.016L57.2825 15.872C58.0665 15.584 58.7225 15.408 59.6505 15.408C60.8665 15.408 61.4905 15.968 61.4905 16.976V17.12C60.8825 16.912 60.2585 16.768 59.3945 16.768C57.3625 16.768 55.9385 17.632 55.9385 19.504V19.536C55.9385 21.232 57.2665 22.16 58.8825 22.16C60.0665 22.16 60.8825 21.728 61.4745 21.072V22H63.8265ZM61.5225 18.976C61.5225 19.856 60.7545 20.48 59.6185 20.48C58.8345 20.48 58.2905 20.096 58.2905 19.44V19.408C58.2905 18.64 58.9305 18.224 59.9705 18.224C60.5625 18.224 61.1065 18.352 61.5225 18.544V18.976ZM74.9272 17.728V17.696C74.9272 14.832 73.0232 13.264 71.0232 13.264C69.7592 13.264 68.9432 13.856 68.3512 14.656V13.424H65.9192V24.56H68.3512V20.88C68.9272 21.568 69.7272 22.16 71.0232 22.16C73.0552 22.16 74.9272 20.592 74.9272 17.728ZM72.4952 17.728C72.4952 19.168 71.5352 20.096 70.3992 20.096C69.2632 20.096 68.3192 19.152 68.3192 17.728V17.696C68.3192 16.272 69.2632 15.328 70.3992 15.328C71.5352 15.328 72.4952 16.272 72.4952 17.696V17.728ZM84.5721 22V16.448C84.5721 14.48 83.5001 13.264 81.6601 13.264C80.4281 13.264 79.7081 13.92 79.1481 14.64V10.32H76.7161V22H79.1481V17.216C79.1481 16.064 79.7401 15.472 80.6681 15.472C81.5961 15.472 82.1401 16.064 82.1401 17.216V22H84.5721ZM89.2929 12.48V10.32H86.7329V12.48H89.2929ZM89.2289 22V13.424H86.7969V22H89.2289ZM100.137 24.56V13.424H97.705V14.544C97.129 13.856 96.329 13.264 95.033 13.264C93.001 13.264 91.129 14.832 91.129 17.696V17.728C91.129 20.592 93.033 22.16 95.033 22.16C96.297 22.16 97.113 21.568 97.705 20.768V24.56H100.137ZM97.737 17.728C97.737 19.152 96.793 20.096 95.657 20.096C94.521 20.096 93.561 19.152 93.561 17.728V17.696C93.561 16.256 94.521 15.328 95.657 15.328C96.793 15.328 97.737 16.272 97.737 17.696V17.728ZM110.102 22V13.424H107.67V18.208C107.67 19.36 107.078 19.952 106.15 19.952C105.222 19.952 104.678 19.36 104.678 18.208V13.424H102.246V18.976C102.246 20.944 103.318 22.16 105.158 22.16C106.39 22.16 107.11 21.504 107.67 20.784V22H110.102ZM120.279 17.952V17.92C120.279 15.488 118.967 13.264 116.103 13.264C113.607 13.264 111.863 15.28 111.863 17.728V17.76C111.863 20.384 113.767 22.192 116.343 22.192C117.895 22.192 119.047 21.584 119.847 20.592L118.455 19.36C117.783 19.984 117.191 20.24 116.375 20.24C115.287 20.24 114.519 19.664 114.279 18.56H120.247C120.263 18.336 120.279 18.192 120.279 17.952ZM117.911 17.04H114.247C114.439 15.936 115.095 15.216 116.103 15.216C117.127 15.216 117.767 15.952 117.911 17.04ZM137.096 22V10.8H134.664V17.696L129.416 10.8H127.144V22H129.576V14.88L135 22H137.096ZM148.313 13.04V10.8H139.785V22H142.249V17.664H147.593V15.424H142.249V13.04H148.313ZM158.765 13.072V10.8H149.485V13.072H152.893V22H155.357V13.072H158.765Z"
          fill={dark ? "#FFFFFF" : "#2D2E36"}
        />
        <path
          d="M23.5779 16.218V10.746H18.1059V13.14H20.8959V14.94C20.1939 15.444 19.2939 15.696 18.2859 15.696C16.0539 15.696 14.4699 14.004 14.4699 11.7V11.664C14.4699 9.522 16.0719 7.74 18.0879 7.74C19.5459 7.74 20.4099 8.208 21.3819 9.018L23.1279 6.912C21.8139 5.796 20.4459 5.184 18.1779 5.184C14.3619 5.184 11.5719 8.118 11.5719 11.7V11.736C11.5719 15.462 14.2719 18.216 18.1959 18.216C20.4999 18.216 22.2819 17.316 23.5779 16.218ZM14.2619 29V22H12.7419V26.31L9.4619 22H8.0419V29H9.5619V24.55L12.9519 29H14.2619ZM21.2723 23.4V22H15.9423V29H17.4823V26.29H20.8223V24.89H17.4823V23.4H21.2723ZM27.8048 23.42V22H22.0048V23.42H24.1348V29H25.6748V23.42H27.8048Z"
          fill="#DA18A3"
        />
      </svg>

      <SearchBar dark={dark} />
      <HeaderNav dark={dark} />
    </div>
  );
};

export default Header;
