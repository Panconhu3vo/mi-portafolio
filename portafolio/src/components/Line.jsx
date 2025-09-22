export default function Line({ text }) {
    return (
        <div className="line-section">
            <p className="line-title">{text}</p>
            <div className="line"></div>
        </div>
    );
}
