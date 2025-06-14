export default function YouTube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full rounded-xl overflow-hidden shadow-lg"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
