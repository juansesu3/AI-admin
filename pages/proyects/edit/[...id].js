import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";


const EditProyectPage = () => {
    const router = useRouter();
    const {id} = router.query

    useEffect(()=>{
      if(!id){
        return;
      }
      axios.get('/api/proyects?id='+id).then(response => {
        console.log(response.data)

      });
    },[id])

  return (
    <Layout>
        Edit product form here
    </Layout>
  )
}

export default EditProyectPage;