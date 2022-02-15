import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => { //grouping together related tests
  
  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: { names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }
  
  let action; //each of our new tests will define what the action should be
  const ticketData = { //provides ticket information for testing purposes
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };
  
  
  test('Should return default state if there is no action type passed into the reducer', () => { //Individual test
    expect(ticketListReducer({}, { type: null})).toEqual({}); //What the expected value should be
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    })
  })

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 }
    });
  });

});

//Reducer need to know two things:
//-What is the current state
//What action should be applied to that thing?