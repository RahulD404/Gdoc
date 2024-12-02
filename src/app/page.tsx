import { Button } from "@/components/ui/button";
import Link from "next/link";
const Home = () =>{
  return(
    <div className="flex min-h-screen items-center justify-center bg-slate-500 gap-5">
      <p>GDoc</p>
      <Button>Online Editor</Button>
      Click<Link href="/documents/123"><span className="text-fuchsia-600 underline">&nbsp;here&nbsp;</span> to go document Id:123</Link>
    </div>
  );
}

export default Home;