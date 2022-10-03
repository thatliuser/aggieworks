export default function ErrorText(
    props: {
        caption: string
    }
): JSX.Element {
    return (
        <small className="error">{props.caption}</small>
    )
}
