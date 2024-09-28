import module from "./Options.module.css"

const Options = ({ updateFeedback, totalFeedback, onResetClick }) => {
    return (
        <div className={module.buttonsDiv}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('netural')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={() => onResetClick()}>Reset</button>}
        </div>
    )
}

export default Options
