import axios from 'axios';

export default (query, variables) => axios({
  data   : { query, variables },
  method : 'POST',
  url    : '/api/graphql',
}).then(response => response.data);
