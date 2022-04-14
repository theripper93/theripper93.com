import { detectSource } from '../scripts/helpers.js';

const Video = (props) => {
  const source = detectSource(props.module.media);
  return (
    <iframe src={source.src} width="1600px" height="1200px" title="video showcase"></iframe>
  )
}

export default Video;