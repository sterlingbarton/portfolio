export default async function LTVideo() {
  const videoId = 'LHNxshQ3mco';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '56.25%',
        position: 'relative',
        height: 0,
      }}
    >
      <iframe
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          border: 0,
        }}
      />
    </div>
  );
}
