import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const  authOption ={
    // secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    secret:'Caiby1JnmsajO0OVvJ3Q9j7XiIM5brTNn8LosW4xC8E=',
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "Your Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Your password",
                },
            },
            async authorize(credentials) {
                const {email,password}=credentials;
                if (!credentials) {
                    return null;
                }
               if(email){
                const currentUser= users.find((user)=>user.email===email);
                return currentUser
               }
                return null

              
            },
        }),
    ],

    callbacks: {
        
        async session({ session, token }) {
            session.user.role=token.role
          return session
        },
        async jwt({ token, user, account }) {
            if(account){
                token.role=user.role
            }
          return token
        }
    
    }
}


const handler = NextAuth(authOption);

const users= [
    {
        id:1,
        name:'monu miah',
        email:'monu@miah.com',
        password:'123456',
        role:'user',
    },
    {
        id:1,
        name:'koddus ali',
        email:'koddus@ali.com',
        password:'123456',
        role:'admin'
    },
]

export { handler as GET, handler as POST };
