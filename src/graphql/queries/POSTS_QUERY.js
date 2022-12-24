import { gql } from '@apollo/client'

export const POSTS_QUERY = gql`
 {
   posts {
     id
     body
     title
     comment {
       id
       name
       message
     }
     todo {
       id
       done
       task
     }
   }
 }
`
