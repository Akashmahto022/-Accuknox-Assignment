import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import {searchAnyWidget} from '../../context/WidgetSlice'

const SearchWidget = () => {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch()
  const searchWidgetList = useSelector(state=> state.widgets.searchWidgetList)


  const handleSearchWidget = (e) => {
    setSearchItem(e.target.value);
    dispatch(searchAnyWidget(e.target.value))
  };

  return (
    <div className="search-widget">
      <div className="flex p-[4px] w-[430px] rounded-xl bg-[#f0f5fa] border-2">
        <SearchIcon color="primary"/>
      <input
        type="text"
        placeholder="search anything..."
        value={searchItem}
        onChange={handleSearchWidget}
        className="bg-[#f0f5fa] border-none w-full"
        />
          </div>
        {
          !searchItem? "" : 
          <div className="absolute bg-white border-2 border-[#e0e0e0] rounded-xl mt-1 p-4">
            {
              searchWidgetList?.map(data=>(
                <div key={data.id} className="border-b-2 py-2 hover:bg-[#f0f5fa] px-2 rounded-sm">
                  <p className="font-semibold">{data.name}</p>
                  <span>{data.text}sdcd</span>
                </div>
              ))
            }
          </div>
        }
    </div>
  );
};

export default SearchWidget;
