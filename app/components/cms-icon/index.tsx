type CmsPropss = {
    icon: string;
}


export const CmsIcon = ({ icon }: CmsPropss) => {
    return (
        <div >
            <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
    )
}