import Image from "next/image";
import Comments from "../components/Comments";
import UserReply from "../components/UserReply";
import UserCommentInput from "../components/UserCommentInput";

export default function Home() {
  return (
    <main className="font-bodyFont lg:flex min-h-screen pt-[20px] lg:justify-center lg:items-center text-darkBlue bg-lightGray p-4 lg:p-0">
     
      <div className="pt-8">
        <Comments />
        {/* <UserInput/> */}
        <UserCommentInput />
      </div>
    </main>
  );
}
