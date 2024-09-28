import module from "./Feedback.module.css"

const Feedback = ({ reactions, totalFeedback, totalPositivePercent }) => {
    return (
        <ul className={module.feedbackList}>
            <li>Good: {reactions.good}</li>
            <li>Neutral: {reactions.netural}</li>
            <li>Bad: {reactions.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {totalPositivePercent}%</li>
        </ul>
    )
}

export default Feedback