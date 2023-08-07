import { TypeAnimation } from "react-type-animation";

export default function WelcomeRow() {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-primary text-xl font-bold mb-4">
          <TypeAnimation
            className="text-purple-500 text-xl"
            sequence={["Welcome", 2000, "Admin", 2000]}
            style={{ fontSize: "24px" }}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="">
        <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
          <img
            className="h-8"
            src="https://cdn.icon-icons.com/icons2/2644/PNG/512/person_fill_icon_159457.png"
            alt=""
          />
          <span className="px-3">Admin</span>
        </div>
      </div>
    </div>
  );
}
