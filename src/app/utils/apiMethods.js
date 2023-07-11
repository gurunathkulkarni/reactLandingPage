// get method
export const get = ({ url, header = {} }) => {
    return fetch(url, header)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(
            `Bad response from server ${url} - status: ${response.status} - message - ${response.statusText}`
          );
        }
        if (response.status < 400) {
          return response.json();
        }
        return response.json();
      })
      .then((response) => {
        return response;
      });
  };
  
  //post method
  export const post = async ({
    url,
    obj,
    header = {},
    errorFunction
  }) => {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...header.headers,
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.status >= 400) {
          if (typeof errorFunction === "function") {
            errorFunction(post);
          }
          throw new Error(`Bad response from server${response.status}`);
        }
        if (response.status < 400) {
          return response.json();
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };
  
  //put method
  export const put = async ({ url, reqObj, header = {} }) => {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...header.headers
        },
        body: JSON.stringify(reqObj)
      })
        .then(response => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          if (response.status < 400) {
            return response.json();
          }
          return response.json();
        })
        .then(data => {
          return data;
        });
    };
  
  // delete method
    export const deleteAPI = async ({
      url,
      header = {},
    }) => {
  
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...header.headers
        }
      })
        .then(response => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          if (response.status < 400) {
            return response.json();
          }
    
          return response.json();
        })
        .then(data => {
          return data;
        });
    };
  