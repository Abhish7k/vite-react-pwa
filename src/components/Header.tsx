import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

const ThreeDotOptions = [
  {
    title: "Members",
    icon: "X",
  },
  {
    title: "Share Number",
    icon: "X",
  },
  {
    title: "Report",
    icon: "X",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

const ChatScreen: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* Topbar */}
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-4">
          {/* back icon */}
          <button>
            <IoArrowBackOutline />
          </button>

          {/* label */}
          <div className=" text-lg font-semibold">Trip No.</div>
        </div>

        {/* edit icon */}
        <button className="flex items-center">
          <FiEdit />
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          {/* photo */}
          <div className="bg-blue-200 h-10 w-10 my-auto rounded-full"></div>

          {/* text */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-sm font-medium text-gray-400">From</p>
              <p className="font-medium">Source</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-medium text-gray-400">To</p>
              <p className="font-medium">Destination</p>
            </div>
          </div>
        </div>
        {/* three dots */}
        <div className="flex flex-col items-center">
          <button onClick={() => setShowMenu(!showMenu)}>
            <BsThreeDotsVertical />
          </button>
          {showMenu && (
            <div className="flex flex-col bg-white absolute mt-8 mr-32 p-4 rounded-lg shadow justify-start gap-y-1 z-10 w-40 ">
              {ThreeDotOptions.map((option) => (
                <div key={option.id} className="flex  gap-x-2 text-start">
                  <p>{option.icon}</p>
                  <p>{option.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
