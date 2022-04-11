import { detectSource } from '../moduledata';

const Video = (props) => {
  const source = detectSource(props.module.media);
  return (
    <iframe src={source.src} width="560px" height="315px" title="video showcase"></iframe>
  )
}

export default Video;