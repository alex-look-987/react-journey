interface ButtonProps {
    // texto to display inside the button
    title: string;
    // Whether the button can be interacted with
    disabled: boolean
}

function MyButton({title, disabled}: ButtonProps) {
    return (
    <button disabled={disabled}>{title}</button>
    )
}