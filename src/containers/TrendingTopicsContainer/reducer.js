const initialState = { hashtags: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TRENDINGS':
      return { hashtags: [['#OneBitCode', '10.1k'], ['#RubyOnRails', '10k']] }
    default:
      return state;
  }
}