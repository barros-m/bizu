import React from 'react';

const videos = [
  {
    url: 'https://example.com/video1.mp4',
    thumbnail: 'https://example.com/video1_thumbnail.jpg',
  },
  {
    url: 'https://example.com/video2.mp4',
    thumbnail: 'https://example.com/video2_thumbnail.jpg',
  },
  // add more videos as necessary
];

const VideoGallery = () => {
  return (
    <div style={styles.gallery}>
      {videos.map((video, index) => (
        <div style={styles.videoContainer} key={index}>
          <video style={styles.video} controls>
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={styles.caption}>Video {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
  },
  videoContainer: {
    boxShadow: '2px 2px 6px 0px rgba(0,0,0,0.3)',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
  caption: {
    padding: '0.5rem',
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default VideoGallery;
