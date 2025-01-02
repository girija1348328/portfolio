import { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export const meta: MetaFunction = () => [
  { title: "Home - Girija Sankar Mohanta" },
  { name: "description", content: "Welcome to the homepage of Girija Sankar Mohanta." },
];

const posts = [
  {
    title: "Hello World",
    date: "2022-01-01",
    slug: "hello-world",
    description: "The first post on this blog.",
  },
  {
    title: "Another Post",
    date: "2022-01-02",
    slug: "another-post",
    description: "Another post on this blog.",
  },

  {
    title: "Another Post",
    date: "2022-01-02",
    slug: "another-post",
    description: "Another post on this blog.",
  },

  {
    title: "Another Post",
    date: "2022-01-02",
    slug: "another-post",
    description: "Another post on this blog.",
  },
];
export default function Home() {
  return (
    <Layout>
      <div className="flex h-screen m-3">
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-bold mb-4">Hello world!</p>
          <p className="text-sm  mb-4">Hi, I’m a theme for Astro, a simple starter that you can use to create your website or blog. If you want to know more about how you can customise me, add more posts, and make it your own, click on the GitHub icon link below and it will take you to my repo.</p>

          <div className="flex flex-row space-x-4">

            <p>Find me on </p>
            <div className="flex flex-row space-x-2">
              <a href="https://www.linkedin.com/in/girija-sankar-mohanta-5851bb1a0/" target="_blank" className="text-lg hover:text-blue-500"><BsLinkedin /></a>
              <a href="https://github.com/girija1348328" target="_blank" className="text-lg hover:text-blue-500"><FaGithub /></a>
            </div>


          </div>

          <div className="flex flex-col space-y-4">
            <p className="text-lg text-red-600">Posts</p>
            <div className="flex flex-col flex-wrap ">

              {posts.map((post) => (
                <div key={post.slug} className="flex flex-row space-x-4">
                  <a href={`/blog/${post.slug}`} className="text-md hover:text-blue-500">{post.date}</a>
                  <p className="text-md">{post.title}</p>
                </div>
              ))}
            </div>

          </div>
          <div className="flex flex-col space-y-4 bg-slate-50">
            <div className="m-2">
            <p className="text-lg text-red-600">Note</p>
            <p className="text-sm  mb-4">Hi, I’m a theme for Astro, a simple starter that you can use to create your website or blog. If you want to know more about how you can customise me, add more posts, and make it your own, click on the GitHub icon link below and it will take you to my repo.</p>
            </div>
           
          </div>
        </div>
      </div>
    </Layout>
  );
}
