import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//info: is field alias if you don't want to deal with long names
const getData = graphql`
  {
    site(siteMetadata: {}) {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  
  return (
    <div>
      <h1>title : {title}</h1>
      <h1>name : {name}</h1>
    </div>
  )
}

export default Header

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site(siteMetadata: {}) {
//         siteMetadata {
//           author
//           data
//           description
//           person {
//             age
//             name
//           }
//           title
//         }
//       }
//     }
//   `)
//   return (
//     <div className="">
//       <h1>{data.site.siteMetadata.person.name}</h1>
//       <h2>{data.site.siteMetadata.person.age}</h2>
//     </div>
//   )
// }

// export default ComponentName
