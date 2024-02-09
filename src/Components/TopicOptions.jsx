
export default function TopicOptions ({topic}){

    return (
        <>
            <option value={`${topic.slug}`}>{topic.slug}</option>
        </>
    )
}