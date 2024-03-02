import { auth, signIn } from "@/authentication/auth";
import { handleGithubLogin, handleGoogleLogin, handleLogout } from "@/authentication/handleAuth";

const LoginPage = async () => {
  const session = await auth();
  session? (console.log("Authentication Successfull")) : (console.log("Logged out"));
  return (
    <div>
      {session ? (
        <form action={handleLogout}>
          <button>LogOut</button>
        </form>
      ) : (
        <>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
        <form action={handleGoogleLogin}>
          <button>Login with Google</button>
        </form>
        </>
      )}
    </div>
  );
};

export default LoginPage;
