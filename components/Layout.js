import Nav from "@/components/Nav";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Logo from "./Logo";
import Suggestion from "./Suggestion";
import { useRouter } from "next/router";
import Image from "next/image";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignInCredentials = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError(true);
        console.log(error);
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex justify-center tems-center">
        <div className="text-center w-full m-auto">
          <div className="flex flex-col gap-2 w-52 m-auto">
            <div className="flex flex-col  w-52 m-auto">
              <div className="flex items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  alt="aid image"
                  src="https://juan-sesu-ecommerce.s3.amazonaws.com/1693293993081.png"
                />
              </div>
              <form className="flex flex-col gap-2 mt-2">
                <input
                  type="text"
                  placeholder="user"
                  value={email}
                  className="rounded-md"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  className="rounded-md"
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <button
                  type="button"
                  onClick={handleSignInCredentials}
                  href={"https://e-commerce-admin-kappa.vercel.app/"}
                  className="bg-gray-700 p-2 px-4 rounded-md text-[#0080fd] font-medium shadow-md"
                >
                  Login
                </button>

                {error && (
                  <p className="px-2 bg-red-500 text-white rounded-md">
                    Invalid Credentials{" "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen relative">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>

      <div className="flex relative">
        <Nav show={showNav} />

        <div className="flex-grow p-4">{children}</div>
        <div className="fixed bottom-4 right-4">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Layout;
