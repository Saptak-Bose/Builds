import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const SignIn = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-52 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic w-[700px]">
          This is an Instagram-Clone made by{" "}
          <span className="font-extrabold">CleverSap(SaptakBose)</span> using
          Next.js. It is a simple clone of Instagram. It is a single page
          application. It took atleast 7 days to make this project.
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white mb-3"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
