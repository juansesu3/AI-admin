import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const EditArticlePage = () => {
  const router = useRouter();
  const {id} = router.query;

  useEffect(()=>{

    if(!id){
        return;
    }

    axios.get('/api/articles?id='+id).then(response=>{

    })

  },[id])

  return (
    <Layout>
      <div>EditArticlePage</div>
    </Layout>
  );
};

export default EditArticlePage;
