
export type Action =
  | { type: 'setUser'; value?: any }
  | { type: 'setFilteredRows'; value?: any }

export type State = {
  user?: any;
  filteredRows?: any;
};
export const defaultState: State = { filteredRows: [] };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setUser': {
      return { ...state, user: action.value };
    }
    case 'setFilteredRows': {
      return { ...state, filteredRows: action.value };
    }
    default:
      return state;
  }
}
