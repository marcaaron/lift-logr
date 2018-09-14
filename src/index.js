import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import uuidv1 from 'uuid/v1';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GET_LOG } from './queries';

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: "http://localhost:4000/",
  clientState: {
    defaults: {
      currentLog: {
        __typename: "CurrentLog",
        items: []
      },
      picker: {
        __typename: "Picker",
        set_id: 'abcd',
        pickerIsOpen: false,
        options: {
          __typename: "Options",
          reps: [...Array(31).keys()],
          weight: [...Array(100).keys()].map(key=>key*2.5),
          unit: ['lbs', 'kg']
        },
        values: {
          __typename: "Values",
          reps: 10,
          weight: 100,
          unit: 'lbs'
        }
      }
    },
    resolvers: {
      Mutation: {
        addToLog: (_, {currentLog}, {cache}) => {
          cache.writeData({data: { currentLog }});
          return null;
        },
        updateLogEntry: (_, variables, {cache}) => {
          const prevData = cache.readQuery({ query: GET_LOG });
          const items = [...prevData.currentLog.items].map(item=>{
            const newItem = {...item, __typename:'LogItem'};
            newItem.previous = {...newItem.previous, __typename:"Previous"}
            return newItem;
          });
          const item = items.filter(item=>item.id===variables.id)[0];
          item[variables.propName] = variables.value;
          cache.writeData({data: {
            currentLog: {
              __typename: "CurrentLog",
              items
            }
          }});
          return null;
        },
        deleteLogEntry: (_, variables, {cache, getCacheKey}) => {
          const prevData = cache.readQuery({query: GET_LOG});
          const items = [...prevData.currentLog.items].filter(({id})=> id !== variables.id);
          cache.writeData({data: {
            currentLog: {
              __typename: 'CurrentLog',
              items
            }
          }});
          return null;
        },
        addLogEntry: (_, {exerciseName}, {cache, getCacheKey}) => {
          const id = uuidv1();
          const prevData = cache.readQuery({query: GET_LOG});
          const item = {
            __typename: "LogItem",
            id,
            exerciseName,
            reps: 0,
            weight: 0,
            unit: 'lbs',
            previous: {
              __typename: 'PreviousAttempt',
              value: 90,
              unit: 'lbs'
            }
          };
          const items = [...prevData.currentLog.items];
          items.push(item);
          cache.writeData({data: {
            currentLog: {
              __typename: 'CurrentLog',
              items
            }
          }});
          return null;
        },
        duplicateLogEntry: (_, {id}, {cache, getCacheKey}) => {
          const newId = uuidv1();
          const prevData = cache.readQuery({query: GET_LOG});
          const items = [...prevData.currentLog.items];
          let item = {...[...prevData.currentLog.items].filter(item=>item.id===id)[0]};
          item.id = newId;
          items.push(item);
          console.log(items);
          cache.writeData({data: {
            currentLog: {
              __typename: 'CurrentLog',
              items
            }
          }});
          return null;
        },
        togglePicker: (_, {pickerIsOpen}, {cache}) => {
          cache.writeData({data: {
            picker: {
              __typename: 'Picker',
              pickerIsOpen: pickerIsOpen
            }
          }});
          return null;
        },
        updatePickerValues: (_, {reps, weight, unit, set_id}, {cache}) => {
          const values = { reps, weight, unit };
          cache.writeData({data:{
            picker: {
              __typename: "Picker",
              set_id,
              values: {
                __typename: "Values",
                ...values
              }
            }
          }});
          return null;
        }
      }
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
registerServiceWorker();
