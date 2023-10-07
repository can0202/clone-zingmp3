import axios from "../axios";

export const getSong = (sId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/song",
        method: "GET",
        params: { id: sId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getInfoSong = (sId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/infosong",
        method: "GET",
        params: { id: sId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getDetailPlayList = (pId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/detailplaylist",
        method: "GET",
        params: { id: pId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
