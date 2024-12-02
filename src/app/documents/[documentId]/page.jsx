const DocumentIdPage =async ({params}) => {
    const {documentId} = await params
    console.log(params)
    return ( 
        <div>
        <p>Document ID: {documentId}</p>
        </div>
     );
}
 
export default DocumentIdPage;