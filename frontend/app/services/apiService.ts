import { getAccessToken } from "@/app/lib/actions";

const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("get", url);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .catch((error) => {
          console.error("Error: ", error);
          reject(error);
        });
    });
  },
  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .catch((error) => {
          console.error("Error: ", error);
          reject(error);
        });
    });
  },
  posttoken: async function (url: string, data: any): Promise<any> {
    const token = await getAccessToken();
    console.log("Token:", token); // Log the token here
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .catch((error) => {
          console.error("Error: ", error);
          reject(error);
        });
    });
  },
};

export default apiService;
