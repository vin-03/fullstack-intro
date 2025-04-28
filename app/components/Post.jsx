export default function Post({key, id, title, content, authorName}){
    return (
        <div className="post-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <p>{authorName}</p>
            <h2>{title}</h2>
            <h3>{content}</h3>
        </div>
    );
}
