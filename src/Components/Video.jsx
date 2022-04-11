import { detectSource } from '../moduledata';

const Video = (props) => {
    const source = detectSource(props.module.media);
  return (
    <iframe src={source.src} title="video showcase"></iframe>
  )
}

export default Video;