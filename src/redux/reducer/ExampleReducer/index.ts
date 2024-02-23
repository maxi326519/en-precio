import { AnyAction } from "redux";

export const ExampleReducer = (
  state = initExampleState(),
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
