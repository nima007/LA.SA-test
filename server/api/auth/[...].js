import { NuxtAuthHandler } from "#auth";
import crypto from "crypto";
// import jwt from "jsonwebtoken";
import UserModel from "~/server/db/models/user.model";
import CredentialsProvider from "next-auth/providers/credentials";
 
export default NuxtAuthHandler({
  secret: "^l;nr#aFe/voaDsc",
  providers: [
    CredentialsProvider.default({
      name: "Credentials",
      async authorize(credentials) {
        const user = await UserModel.findOne({mobile: credentials.mobile}).select("+password +sCode");
        if (!user ||!validatePassword(credentials.password, user.password, user.sCode)) {
          throw new Error("Invalid email or password");
        }
        console.log("user loged in" , credentials);
        return user
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.mobile = user.mobile;
      }
      return token;
    },
    async session({ session, token }) { 
      session.user.role = token.role;
      session.user.id = token.sub;
      session.user.name = token.name;
      session.user.mobile = token.mobile;
      return session;
    },
  },
});

export function validatePassword(password, hash, salt) {
  const passToHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === passToHash;
}



  // {
    //   id: 'credentials',
    //   name: 'Credentials',
    //   type: 'credentials',
    //   credentials: {
    //     mobile: { label: 'Mobile', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     console.log("try to auth");
    //     const user = await UserModel.findOne({mobile:credentials.mobile}).select('+password +sCode')
    //     if (!user || !validatePassword(credentials.password,user.password,user.sCode)) {
    //       throw new Error('Invalid email or password');
    //     }
    //     console.log("accept user ", user?.role);
    //     return { id: user._id, email: user.email, role: user.role };
    //   },
    // },