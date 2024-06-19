import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";

const  Home = async () => {
  const session = await getServerSession(authOption)
  return ( <div>صفحه نخست</div> );
}
 
export default Home;