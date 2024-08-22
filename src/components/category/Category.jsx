import React, { useState } from "react";
import Widget from "../widget/Widget";
import AddWidget from "../addWidget/AddWidget";

const Category = ({ category }) => {

  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false)

  const handleToggel = ()=>{
    setIsAddWidgetOpen(!isAddWidgetOpen)
  }

  return (
    <div className="">
      <h2 className="font-semibold text-lg">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}

        <button className="w-[400px] h-[200px] rounded-lg p-2 bg-white mt-2 mb-4 " onClick={handleToggel}>
          <span className="py-1 px-1 bg-white rounded-lg border-2 border-blue-800 mx-1 text-blue-600 cursor-pointer">+ Add Widget</span>
        </button>

        <div className={`fixed inset-y-0 right-0 w-72 transition-transform duration-500 ease-in-out transform ${
          isAddWidgetOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {
          isAddWidgetOpen && (
            <AddWidget categoryId={category.id} onClose={handleToggel}/>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Category;
