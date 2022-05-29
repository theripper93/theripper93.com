import Video from "./Video";

const ModuleGuide = (props) => {
  const { url, title } = props;
  return (
    <figure className="guide-videos">
      <h4>{title}</h4>
      <Video module={{ media: url, autoplay: false }}></Video>
    </figure>
  )
}


export default ModuleGuide