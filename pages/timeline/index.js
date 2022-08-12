import Link from 'next/link'
import styles from '../../styles/Timeline.module.css'
import axios from 'axios'

export default function Timeline ({userName}) {
    return (
        <>
    <h1 className={styles.h1}>This is the timeline of {userName}</h1>
    <Link href='/'><a>Go home!</a></Link>
</>
)}


Timeline.getInitialProps = () => {
return axios.get('http://localhost:3000/api/hello')
.then(res => {
  const {userName} = res.data
  return {userName}
})
}

