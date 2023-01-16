import { ReactSVG } from "react-svg"

function NexusLogo(props: any) {
    const {renderDefault, title} = props;
    return <div className="felx items-center space-x-2">
        <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="#1B9FFF"/>
            <rect x="15" y="15" width="20" height="20" fill="white"/>
            <path d="M 25 10 L 25 40" stroke="white" stroke-width="4"/>
            <path d="M 10 25 L 40 25" stroke="white" stroke-width="4"/>
        </svg>
        {renderDefault && <>{renderDefault(props)}</>}
    </div>;
}

export default NexusLogo