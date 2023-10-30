export default function VerticalNavigationItem(props) {
    return (
        <>
            <a href={props.href}>
                <i className={props.iClassName}></i>
                <span>{props.title}</span>
            </a>
        </>
    );
}