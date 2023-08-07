import { useRouter } from "next/router";
import Link from "next/link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateUser from "../pages/CreateUser";
// import EditUser from "../pages/EditUser";

export default function () {
  const router = useRouter();
  const { pathname } = router;
  const activeClasses =
    "bg-white flex items-center text-primary gap-2 px-2 md:px-4 py-1 pr-2 md:pr-7 mb-2 rounded-xl rounded-r-none justify-center md:justify-start";
  const inactiveClasses =
    "block px-2 md:px-4 pr-2 md:pr-7 py-1 mb-2 flex items-center gap-2 justify-center md:justify-start";

  const links = [
    {
      url: "/",
      label: "Upload File",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z" />
        </svg>
      ),
    },

    {
      url: "/orders",
      label: "Manual Input",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-8"
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />{" "}
        </svg>
      ),
    },

    {
      url: "/get",
      label: "Historical",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4  "
        >
          <g>
            {" "}
            <path fill="none" d="M0 0h24v24H0z" />{" "}
            <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z" />{" "}
          </g>{" "}
        </svg>
      ),
    },
    // {
    //   url: "/reviews",
    //   label: "Reviews",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-4 h-4"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   url: "/settings",
    //   label: "Settings",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-4 h-4"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    //       />
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //       />
    //     </svg>
    //   ),
    // },
  ];
  return (
    <div>
      <aside className="bg-primary text-white p-1 md:p-5 py-12 pr-0 md:pr-0">
        <a
          href=""
          className="hidden md:flex mb-6 mt-4 text-center justify-center mr-4   gap-2"
        >
          <span>Calculate Optimized Routing</span>
        </a>
        <nav className="sticky top-3 mr-8">
          {links.map((link) => (
            <Link key={link.url} href={link.url}>
              <a
                className={
                  pathname === link.url ? activeClasses : inactiveClasses
                }
              >
                {link.icon}
                <span className="hidden md:block">{link.label}</span>
              </a>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
