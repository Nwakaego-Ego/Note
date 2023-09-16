import Main from "./Pages/Diary/page";
import Link from "next/link";
// import Register from "./Pages/register/page";

const main = () => {
  return (
    <div>
      <Main />
      <Link href="/register">Link</Link>
    </div>
  );
};

export default main;
