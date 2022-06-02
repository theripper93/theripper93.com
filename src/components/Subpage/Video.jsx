import { detectSource } from '../../public/scripts/helpers.js';

const Video = (props) => {
  const source = detectSource(props.module.media, props.module.autoplay);
  return (
    <iframe 
      src={source.src}
      width='1280px'
      height='720px'
      title='video showcase'
    />
  );
};

export default Video;
