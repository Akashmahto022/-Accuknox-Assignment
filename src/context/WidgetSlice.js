import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "PMSDF Dashboard",
      widgets: [
        {
          id: 1001,
          name: "Selectors overview",
          text: "its impact on the world.",
        },
        {
          id: 1002,
          name: "Exam overview",
          text: "Such a bitcoin history",
        },
      ],
    },
    {
      id: 2,
      name: "Security Dashboard",
      widgets: [
        {
          id: 2001,
          name: "Specific",
          text: "Need something more specific?",
        },
        {
          id: 2002,
          name: "Power full mind",
          text: "Let me know if you have a particular angle in mind",
        },
      ],
    },
    {
      id: 3,
      name: "CWSW Executive",
      widgets: [
        {
          id: 3001,
          name: "Exam overview",
          text: " technology, or its impact on the world.",
        },
        {
          id: 3002,
          name: "overview of exam",
          text: "Exam is all about game",
        },
      ],
    },
  ],
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    // add a new widget
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        category.widgets.push(widget);
      }
    },

    // delete a widget
    deleteWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id != widgetId
        );
      }
    },

    // search widget
    searchAnyWidget: (state, action) => {
      const searchItem = action.payload.toLowerCase();
      state.searchWidgetList = state.categories.flatMap((category) =>
        category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchItem)
        )
      );
    },
  },
});

export const { addWidget, searchAnyWidget, deleteWidget } = widgetSlice.actions;
export default widgetSlice.reducer;

