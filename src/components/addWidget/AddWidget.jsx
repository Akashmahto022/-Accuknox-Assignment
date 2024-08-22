import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../../context/WidgetSlice";

const AddWidget = ({ categoryId, onClose }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const widgetValue = {
      id: new Date().getTime(),
      name: widgetName,
      text: widgetText,
    };

    dispatch(addWidget({ categoryId, widget: widgetValue }));
    setWidgetName("");
    setWidgetText("");
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 w-[600px] h-[100%] bg-white shadow-slate-400 transition-transform duration-500 ease-in-out">
      <div className="">
        <div className="flex justify-between bg-blue-800 p-2 px-6 text-white">
          <span className="pt-2">Add Your New Widget</span>
          <span onClick={onClose} className="text-3xl cursor-pointer">
            &times;
          </span>
        </div>
        <div className="flex flex-col gap-5 mt-3 px-6">
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-md"
          />
          <textarea
            name=""
            placeholder="Widget text"
            value={widgetText}
            rows={2}
            onChange={(e) => setWidgetText(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-md"
          ></textarea>
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <button className="hover:bg-blue-900 hover:text-white text-blue-700 border-[1px] border-blue-800 mx-2 px-3 py-1 rounded transition-all" onClick={onClose}>Cancel</button>
          <button className="hover:bg-blue-900 hover:text-white text-blue-700 border-[1px] border-blue-800 mx-2 px-3 py-1 rounded transition-all" onClick={handleAddWidget}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
