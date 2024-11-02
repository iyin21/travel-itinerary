

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

const Button = ({
    variant,
    children,
    className,
    ...rest
}: IButtonProps) => {

    return (
        <button
            {...rest}
            className={`btn flex items-center justify-center font-normal  btn--${variant} ${className}`}
        >
           
            {children}
            
        </button>
    );
};

export default Button;
