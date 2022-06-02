import Video from "./Video";

const VideoCard = (props) => {
  const { url, title } = props;
  
  return (
    <figure className="video">
      <h4>{title}</h4>
      <Video module={{ media: url, autoplay: false }}></Video>
    </figure>
  )
}

export default VideoCard