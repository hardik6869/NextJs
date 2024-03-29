import { useRouter } from "next/router"

const Doc = () => {
    const router = useRouter();
    const { params = [] } = router.query
    if (params.length == 2) {
        return <h1> Viewing docs for feature {params[0]} and concept {params[1]} </h1>
    } else if (params.length == 1) {
        return <h1> Viewing docs for feature {params[0]} </h1>
    }
    return (
        <h1>Docs Home page </h1>
    )
}

export default Doc