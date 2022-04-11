import { detectSource } from '../moduledata';

const Video = (props) => {
  const source = detectSource(props.module.media);
  return (
    <iframe src={source.src} width="800px" height="600px" title="video showcase"></iframe>
  )
}

export default Video;