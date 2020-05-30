import { withRouter } from 'next/router'
import Link from 'next/link'

const Drinks = ({ router }) => { 
    return (
        <>
            <div>饮料：{router.query.name}</div>
            <Link href="/box"><a>假的首页</a></Link>
        </>
    )
}

export default withRouter(Drinks)