function Articles() {
    const articles = [
        {
            image: "/images/react.jpg",
            description: "e.g., React",
            author: "Author's name",
        },
        {
            image: "/images/nodejs.jpg",
            description: "e.g., NodeJS",
            author: "Author's name",
        },
        {
            image: "/images/web.jpg",
            description: "e.g., React Hooks",
            author: "Author's name",
        },
    ];

    return (
        <section className="content-section">

            <h2 className="section-title">
                Featured Articles
            </h2>

            <div className="cards">

                {articles.map((article, index) => (
                    <div className="card" key={index}>

                        <div className="image-placeholder">
                            <img
                                src={article.image}
                                alt="Article image"
                            />
                        </div>

                        <h3>Article's Name</h3>

                        <p className="description">
                            Description ________
                        </p>

                        <p className="example">
                            {article.description} _______
                        </p>

                        <div className="card-info">

                            <span className="rating">
                                <span className="star">★</span>
                                5
                            </span>

                            <span className="author">
                                {article.author}
                            </span>

                        </div>

                    </div>
                ))}

            </div>

            <button className="grey-button">
                See all articles
            </button>

        </section>
    );
}

export default Articles;