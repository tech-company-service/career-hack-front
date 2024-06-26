import axios from 'axios'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const provider = account?.provider
      const uid = user?.id
      const name = user?.name
      const email = user?.email
      try {
        const response = await axios.post(`${apiUrl}/api/v1/auth/${provider}/callback`, {
          provider,
          uid,
          name,
          email,
        })
        if (response.status === 200) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log('エラー', error)
        return false
      }
    },
  },
})
export { handler as GET, handler as POST }
