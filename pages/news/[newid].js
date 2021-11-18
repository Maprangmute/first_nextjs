import { useRouter } from "next/dist/client/router";

const DetailPage = () => {
    const routor = useRouter();
    
    routor.query.newId;
    console.log(routor.query.newId)

    // send a request to the backend api
    // to fatch the news item with newsid

    return (
        <div>
            <i >Detail page</i>
        </div>
    );
}




export default DetailPage;