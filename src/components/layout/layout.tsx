import React, {ReactNode} from 'react'
import Header from '../header/header'
import "./layout.css"

type Props = {
    children:ReactNode
}

// const Layout: React.FC<Props> = ({ children }) => {
//     return (
//         <div>
//             <Header />
//             {children}
//         </div>
//     )
// }

// export default Layout
// const Layout: React.({props}: Props) {
//   return (
//     <div>
//           <Header />
//           {props}
//     </div>
//   )
// }

export default function layout({children}: Props) {
  return (
    <div className='page-layout'>
          <Header></Header>
          {children}
    </div>
  )
}