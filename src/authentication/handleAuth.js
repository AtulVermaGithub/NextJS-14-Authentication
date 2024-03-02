"use server";

import { signIn, signOut } from "./auth";

// This function is used to handle the logout
export const handleLogout = async () => {
  await signOut();
};

// This function is used to handle the login with Github

export const handleGithubLogin = async () => {
  await signIn("github");
};


// This function is used to handle the login with Google
export const handleGoogleLogin = async () => {
  await signIn("google");
};
