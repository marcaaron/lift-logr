import React from 'react';
import { CogIcon } from '../icons';
import { Query, Mutation } from 'react-apollo';
import { TOGGLE_PICKER, UPDATE_PICKER_VALUES } from '../mutations';
import { GET_PICKER } from '../queries';

const EditButton = ({reps, weight, unit, id}) => (
  <Query
    query={GET_PICKER}>
    {({
      data: {
        picker: {
          pickerIsOpen,
          set_id
        }
      }
    })=>
      (
        <Mutation
          mutation={UPDATE_PICKER_VALUES}>
          {(updatePickerValues)=>(
            <Mutation
              mutation={TOGGLE_PICKER}>
              {(togglePicker)=>(
                <div onClick={()=>{
                  updatePickerValues({
                    variables: { reps, weight, unit, set_id: id }
                  })
                  .then(()=>{
                    // Only Toggle Picker if it's closed or same item is toggled
                    // This prevents picker from closing when user switches from item to item
                    if(!pickerIsOpen || (pickerIsOpen && set_id === id) ){
                      togglePicker({
                        variables: {pickerIsOpen: !pickerIsOpen }
                      })
                    }
                  })
                }}>
                  <CogIcon width={30} height={30} color="#FFF"/>
                </div>
              )}
            </Mutation>
          )}
        </Mutation>
      )
    }
  </Query>
)

export default EditButton;
