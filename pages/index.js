import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-primary flex justify-between">
        <h2> <span className="text-white" >Hi Boss,</span> <b>{session?.user?.name}</b></h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="image-boss" className="w-8 h-8 rounded-md" />
          <span className="px-2">
          {session?.user?.name}
          </span>
          
          
        </div>
      </div>
    </Layout>
  );
};
export default Home;
