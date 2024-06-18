import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
                console.log(email,password);
                // akhan theke  email pass etc verification alert etc kora jabe ..database ar data ar sate 
                return true
            },
        }),
    ],
});

export { handler as GET, handler as POST };
