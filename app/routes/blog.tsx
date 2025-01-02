import Layout from "~/components/Layout";

interface Post {
  title: string;
  date: string;
  slug: string;
  description: string;
  tags: string[];
}

export default function Blog() {
  const posts: Post[] = [
    {
      title: "Hello World",
      date: "2022-01-01",
      slug: "hello-world",
      description: "The first post on this blog.",
      tags: ["Introduction", "Hello"],
    },
    {
      title: "Another Post",
      date: "2022-01-02",
      slug: "another-post",
      description: "Another post on this blog.",
      tags: ["Update", "News"],
    },
    {
      title: "Yet Another Post",
      date: "2021-12-31",
      slug: "yet-another-post",
      description: "Yet another post on this blog.",
      tags: ["Reflection", "Year End"],
    },
  ];

  // Group posts by year
  const postsByYear = posts.reduce<Record<number, Post[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Extract unique tags
  const tags = [...new Set(posts.flatMap(post => post.tags))];

  return (
    <Layout>
      <div className="flex h-screen">
        <div className="flex flex-row w-full">
          {/* Blog Section */}
          <div className="flex flex-col w-2/3 p-4">
            <p className="text-xl font-bold mb-4">Posts</p>
            {Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a)).map(year => (
              <div key={year}>
                <h2 className="text-lg font-semibold mt-4">{year}</h2>
                {postsByYear[year].map(post => (
                  <div key={post.slug} className="mb-4">
                    <h3 className="text-md font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.date}</p>
                    <p>{post.description}</p>
                    
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Tags Section */}
          <div className="flex flex-col w-1/3 p-4 bg-gray-100">
            <p className="text-xl font-bold mb-4">Tags</p>
            <div className="flex flex-wrap space-x-2">
              {tags.map(tag => (
                <span key={tag} className="text-sm bg-gray-200 rounded-full px-2 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}