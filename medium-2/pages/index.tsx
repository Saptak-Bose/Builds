import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover     transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="sticky bottom-0 items-center flex z-50">
        <div className="flex-1"></div>
        <a className="pb-4" href="https://sapmedium.sanity.studio/desk/post">
          <img
            className="h-14 w-14 rounded-full bg-yellow-400 object-contain"
            src="https://petersanders.com/wp-content/uploads/2021/04/free-png-plus-sign-transparent-plus-signpng-images-pluspng-plus-sign-transparent-background-512_512.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
