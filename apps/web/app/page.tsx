import { useQuery } from 'urql'
import { graphql } from 'graphql-codegen'

const usersQuery = graphql(`
  query MyQuery {
    users(first: 10) {
      nodes {
        id
        name
        email
      }
    }
  }
`)

export default async function IndexPage() {
  const [users] = useQuery({query:usersQuery})

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
