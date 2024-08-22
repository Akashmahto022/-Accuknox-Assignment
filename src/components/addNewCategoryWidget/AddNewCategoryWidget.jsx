import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addNewCategoryWidget} from '../../context/WidgetSlice'

const AddNewCategoryWidget = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const dispatch = useDispatch()

  const handleAddWidget = () => {
    const newCategoryWidget = {
        id: new Date().getTime(),
        name: categoryName,
        widgets: [
            {
                id: new Date().getTime(),
                name: widgetName,
                text: widgetText
            }
        ]
    }

    // send the value to the store
    dispatch(addNewCategoryWidget(newCategoryWidget))
    setCategoryName("")
    setWidgetName("")
    setWidgetText("")
    onClose()
  };

  // add validation to the add new widget 
  const isFormValid = categoryName.trim() !== '' && widgetName.trim() !== '' && widgetText.trim() !== '';

  return (
    <div className="fixed top-0 right-0 w-[600px] h-[100%] bg-white shadow-slate-400 transition-transform duration-500 ease-in-out">
      <div className="">
        <div className="flex justify-between bg-blue-800 p-2 px-6 text-white">
          <span className="pt-2">Add Your New Category Widget</span>
          <span onClick={onClose} className="text-3xl cursor-pointer">
            &times;
          </span>
        </div>
        <div className="flex flex-col gap-5 mt-3 px-6">
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="p-2 border-2 border-blue-500 rounded-md"
          />
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
          <button
            className="hover:bg-blue-900 hover:text-white text-blue-700 font-medium border-[1px] border-blue-800 mx-2 px-3 py-1 rounded transition-all"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`p-2 rounded ${isFormValid?"hover:bg-blue-900 hover:text-white text-blue-700 font-medium border-[1px] border-blue-800 mx-2 px-3 py-1 transition-all": "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            onClick={handleAddWidget}
            disabled={!isFormValid}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategoryWidget;
