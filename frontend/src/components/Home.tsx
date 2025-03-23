export function Home() {
  return (
    <div className="px-20 md:px-28">
      <h1 className="text-3xl font-bold my-6">
        Welcome to <strong>Algoclub Club</strong>
      </h1>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          <strong>Leaderboard</strong>
        </h2>
        <p className="text-gray-700">
          Check out the top performers in our community!
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          <strong>Recent Discussions</strong>
        </h2>
        <p className="text-gray-700">
          Join the latest conversations and share your thoughts.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          <strong>Upcoming Events</strong>
        </h2>
        <p className="text-gray-700">
          Stay tuned for exciting events coming your way!
        </p>
      </section>
    </div>
  );
}
