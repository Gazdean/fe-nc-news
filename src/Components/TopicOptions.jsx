
export default function TopicOptions ({topic}){

    return (
        <>
            <option value={`?topic=${topic.slug}`}>{topic.slug}</option>
        </>
    )
}