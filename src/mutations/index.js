import { gql } from 'apollo-boost';

export const TOGGLE_PICKER = gql`
  mutation togglePicker($pickerIsOpen: Boolean){
    togglePicker(pickerIsOpen: $pickerIsOpen) @client
  }
`;

export const UPDATE_LOG_ENTRY = gql`
  mutation updateLogEntry($id: String, $propName: String, $value: String) {
    updateLogEntry(id: $id, propName: $propName, value: $value) @client
  }
`;

export const UPDATE_PICKER_VALUES = gql`
  mutation updatePickerValues($reps: Int, $weight: Int, $unit: String, $set_id: String) {
    updatePickerValues(reps: $reps, weight: $weight, unit: $unit, set_id: $set_id) @client
  }
`;

export const DELETE_LOG_ENTRY = gql`
  mutation deleteLogEntry($id: String) {
    deleteLogEntry(id: $id) @client
  }
`;
