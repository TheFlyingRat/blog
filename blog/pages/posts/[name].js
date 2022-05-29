import { useRouter } from 'next/router';


import Head from 'next/head'

export default function Post() {
    const router = useRouter();
    const { name } = router.query;

    return (<>
    <Head>
        <link rel="preconnect" href="https://cdn.theflyingrat.com" />
        <title>{name}</title>
    </Head>
    
    <h1> Hello {name} </h1>



    </>)
    
}
