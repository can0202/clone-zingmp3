import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api";
import ItemVertical from "../../components/home/ItemVertical";

const Album = () => {
  const { title, pid } = useParams();
  const [dataAlbumm, setDataAlbum] = useState(null);

  // Call api
  useEffect(() => {
    const fetchApi = async () => {
      const res = await api.getDetailPlayList(pid);
      setDataAlbum(res?.data?.data);
    };
    fetchApi();
  }, [pid]);
  console.log("dataAlbumm", dataAlbumm);
  return (
    <div className="list-album">
      {dataAlbumm?.song?.items?.map((item, index) => {
        return <ItemVertical key={index} item={item} />;
      })}
    </div>
  );
};

export default Album;
