import React from "react";
import { useDispatch } from "react-redux";
import { deleteWidget } from "../../context/WidgetSlice";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleDeleteWidget = () => {
    dispatch(deleteWidget({categoryId, widgetId:widget.id}))
  };

  return (
    <div className="w-[400px] h-[200px] rounded-lg p-2 bg-white mt-2 mb-4 ">
      <div>
        <p className="font-semibold">{widget.name}</p>
        <span className="">{widget.text}</span>
      </div>
      <button onClick={handleDeleteWidget} className="mt-[100px] ml-[260px] py-[1px] px-2 rounded-sm bg-blue-900 text-white">&times; Remove</button>
    </div>
  );
};

export default Widget;
