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
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
        {
          id: 1002,
          name: "Exam overview",
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
      ],
    },
    {
      id: 2,
      name: "PMSDF Dashboard",
      widgets: [
        {
          id: 2001,
          name: "Selectors overview",
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
        {
          id: 2002,
          name: "Exam overview",
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
      ],
    },
    {
      id: 3,
      name: "PMSDF Dashboard",
      widgets: [
        {
          id: 3001,
          name: "Selectors overview",
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
        {
          id: 3002,
          name: "Exam overview",
          text: "Need something more specific? Let me know if you have a particular angle in mind, such as Bitcoin's history, technology, or its impact on the world.",
        },
      ],
    },
  ],
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { id, name, widgets } = action.payload;
    },
  },
});
