function Tutorials() {
  const tutorials = [
    {
      image: "/images/js.jpg",
      description: "e.g., JS",
      rating: "5",
      author: "username",
    },
    {
      image: "/images/reactrouter.jpg",
      description: "e.g., React Router",
      rating: "5",
      author: "username",
    },
    {
      image: "/images/express.jpg",
      description: "e.g., Express",
      rating: "4.9",
      author: "username",
    },
  ];

  return (
    <section className="content-section tutorials-section">

      <h2 className="section-title">
        Featured Tutorials
      </h2>

      <div className="cards">

        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>

            <div className="image-placeholder">
              <img
                src={tutorial.image}
                alt="Tutorial image"
              />
            </div>

            <h3>Tutorial's Name</h3>

            <p className="description">
              Description ________
            </p>

            <p className="example">
              {tutorial.description} _______
            </p>

            <div className="card-info">

              <span className="rating">
                <span className="star">★</span>
                {tutorial.rating}
              </span>

              <span className="author">
                {tutorial.author}
              </span>

            </div>

          </div>
        ))}

      </div>

      <button className="grey-button">
        See all tutorials
      </button>

    </section>
  );
}

export default Tutorials;