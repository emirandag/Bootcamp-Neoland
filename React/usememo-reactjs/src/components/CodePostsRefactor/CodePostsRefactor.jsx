import { useMemo, useState } from "react"

const CodePostsRefactor = ({ posts }) => {

    const [rerender, setRerender] = useState(false)
    const orderedPostWithTitle = useMemo(() => {
        console.log("Generando posts...");
        return posts
        .map((post) => ({
          ...post,
          date: new Date(post.date),
          title: post.slug.split("-").join(" ").toUpperCase(),
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((post) => ({
          ...post,
          date: new Intl.DateTimeFormat("es-ES").format(post.date),
        }));
    }, [posts]) 

  return (
    <div>
      <h1>Post destacados</h1>

      <ul>
        {orderedPostWithTitle.map((post) => (
          <li key={post.slug}>
            <h3>{post.title}</h3> {post.date}
            <hr />
          </li>
        ))}
      </ul>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
}

export default CodePostsRefactor