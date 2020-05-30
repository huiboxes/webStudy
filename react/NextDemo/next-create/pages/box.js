import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'




function box() {

    // routeChangeStart 发生变化前
    // routeChangeComplete 发生变化后
    // beforeHistoryChange History变化前
    // routeChangeError 发生错误时
    // hashChangeStart
    // hashChangeComplete

    // Router.events.on('routeChangeStart', (...arg) => {
    //     console.log('routeChangeStart，参数为：', ...arg);

    // })

    // Router.events.on('routeChangeComplete', (...arg) => {
    //     console.log('routeChangeComplete，参数为：',...arg);
    // })

    // Router.events.on('beforeHistoryChange', (...arg) => {
    //     console.log('beforeHistoryChange，参数为：', ...arg);
        
    // })
    
    // Router.events.on('routeChangeError', (...arg) => {
    //     console.log('routeChangeError，参数为：', ...arg);
    // })

    // Router.events.on('hashChangeStart', (...arg) => {
    //     console.log('hashChangeStart，参数为：', ...arg);
    // })

    // Router.events.on('hashChangeComplete', (...arg) => {
    //     console.log('hashChangeComplete，参数为：', ...arg);
    // })




    function gotoJuice() {
        
        Router.push({
            pathname: '/drinks',
            query: {name: '果汁'}
        })
    }
    
    const Page = ({ json }) => (
        <div>
            {json}
        </div>
    )
        
    Page.getInitialProps = async ({ req }) => {
        const res = await fetch('https://www.fastmock.site/mock/d690b6751903bdb776c854b719ee9b6b/data/data')
        const json = await res.json()
        return { json }
    }


    

    return (
        <>
            
            <Link href="/box2"><a>假装是首页</a></Link>
            <div>
                <Link href={{pathname: '/drinks',query:{name: '橙汁'}}}><a>选择橙汁</a></Link>
                <Link href="/drinks?name=牛奶"><a>选择牛奶</a></Link>
            </div>
            <div>
                <button onClick={gotoJuice}>选果汁</button>
            </div>
            <div>
                <Link href="#drinks"><a>选饮料</a></Link>
            </div>
            <Page />
        </>
    )
}

export default box