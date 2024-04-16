import Link from "next/link";
import AuthButton from "./auth/AuthButton.component";

const AppBar = () => {
  return (
    <div className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href="/">
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href="/dashboard">
        Dashboard
      </Link>
      <AuthButton />
    </div>
  );
};

export default AppBar;
