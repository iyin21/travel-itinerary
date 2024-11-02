import { CiSearch } from "react-icons/ci"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control?: string
    prefixIcon?: JSX.Element
    suffixIcon?: JSX.Element
    inputClassName?: string
}

const Input = ({
    prefixIcon,
    suffixIcon,
    className,
    inputClassName,
    ...rest
}: InputProps) => {
    return (
        <div
            className={`  flex flex-row items-center border border-[#F0F2F5]   bg-[#F0F2F5] h-12  rounded ${className}`}
        >
            <CiSearch color="#667185" size="22px" />
            <input
                className={`w-full outline-none  bg-transparent placeholder:text-gray-100 ml-2 ${inputClassName}`}
                {...rest}
            />
            
        </div>
    )
}
export default Input
