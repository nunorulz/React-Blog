import Post from '../Post';

export const Article = () => {
  return (
    <>
      <section className="container">
        <h3>Article</h3>
        <div className="mt-5 container-posts">
          <Post subtitle="tecnologia" title="O guia definitivo do blog.">
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ipsum consectetur dolor, cum dolorem odio laudantium ea dolores
            voluptatibus fugiat, odit laboriosam. Nam suscipit est fugiat.
          </Post>
          <Post subtitle="fotografia" title="Quais as melhores câmaras em 2024">
            2Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ipsum consectetur dolor, cum dolorem odio laudantium ea dolores
            voluptatibus fugiat, odit laboriosam. Nam suscipit est fugiat.
          </Post>
          <Post subtitle="cinema" title="Os 10 filmes com maiores bilheterias.">
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ipsum consectetur dolor, cum dolorem odio laudantium ea dolores
            voluptatibus fugiat, odit laboriosam. Nam suscipit est fugiat.
          </Post>
        </div>
      </section>
    </>
  );
};
