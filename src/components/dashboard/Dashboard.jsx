import React, { useState } from "react";
import Category from "../category/Category";
import SyncIcon from "@mui/icons-material/Sync";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Last 2 days");
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="pt-8 px-8">
      <div className="flex justify-between">
        <h1 className="text-[22px] font-medium ">SWPDA Dashboard</h1>

        <div className="text-blue-800 font-medium mt-3">
          <button className="py-1 px-1 bg-white rounded-lg border-2 mx-1">
            Add Widget +
          </button>
          <span className="py-1 pb-1 px-1 bg-white rounded-lg border-2 mx-1 cursor-pointer">
            <SyncIcon color="primary" />
          </span>
          <span className="py-1 px-1 bg-white rounded-lg border-2 mx-1 cursor-pointer">
            <MoreVertIcon color="primary" />
          </span>
          <span
            className="py-1 px-1 bg-white rounded-lg border-[1px] mx-1 border-blue-200 cursor-pointer"
            onClick={() => {
              if (isOpen === false) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
          >
            <AccessTimeFilledIcon color="primary" /> | {value}
            <KeyboardArrowDownIcon color="primary" />
          </span>
          {!isOpen ? (
            ""
          ) : (
            <div className="absolute right-[38px] bg-white border-2 rounded-lg cursor-pointer w-26">
              <ul className="list-none ">
                <li
                  onClick={() => {
                    setValue("Last 7 days"), setIsOpen(false);
                  }}
                  className="hover:bg-[#f0f5fa] py-1 px-3"
                >
                  Last 7 days
                </li>
                <li
                  onClick={() => {
                    setValue("Last 14 days"), setIsOpen(false);
                  }}
                  className="hover:bg-[#f0f5fa] py-1 px-3"
                >
                  Last 14 days
                </li>
                <li
                  onClick={() => {
                    setValue("Last 30 days"), setIsOpen(false);
                  }}
                  className="hover:bg-[#f0f5fa] py-1 px-3"
                >
                  Last 30 days
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mx-2">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
