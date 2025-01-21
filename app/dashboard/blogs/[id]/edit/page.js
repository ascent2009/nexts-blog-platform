import EditForm from '../../../../components/EditForm';

export default async function Page({params}) {
    const {id} = await params;
    
    return (
        <EditForm id={id}/>
    )
};
