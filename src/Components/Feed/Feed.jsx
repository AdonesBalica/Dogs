import React from "react";
import FeedModal from "../FeedModal/FeedModal";
import FeedPhotos from "../FeedPhotos/FeedPhotos";
import styles from "./Feed.module.css";

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
