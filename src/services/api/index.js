
const BASE_URL = "https://uxcandy.com/~shapoval/test-task-backend/v2"
const request = (url="", page, sort, direction, data, method) => {
  let urlPage = ""
  let urlSort = ""
  let urlDirection = ""
  if (page) {
    urlPage=`&page=${page}`
  }
  if (sort) {
    urlSort=`&sort_field=${sort}`
  }
  if (direction) {
    urlDirection=`&sort_direction=${direction}`
  }
  return fetch(`${BASE_URL}${url}?developer=Pavel${urlPage}${urlSort}${urlDirection}`, {
    method: method,
    body: data
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export default class ApiServices {
  post = (url, data) => {
    return request(url, "","", "", data, "POST")
  };

  get = (url, page,  sort = null, direction=null, data = null) => {
    return request(url,page,sort,direction, data,"GET")
  }
}
