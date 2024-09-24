import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const LegalCharge:React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 141" {...props}><path d="M141.7 70.3a70.2 70.2 0 1 1-140.5 0 70.2 70.2 0 0 1 140.5 0" fill="#2D201E" /><path d="M71.5 6.6a63.7 63.7 0 1 0 .2 127.4 63.7 63.7 0 0 0-.2-127.4m0 128.7a65 65 0 1 1 .2-130.2 65 65 0 0 1-.2 130.2" fill="#DA723D" /><path d="M106.4 70.3a35 35 0 1 1-70 0 35 35 0 0 1 70 0" fill="#DA723D" /><path d="M134.7 91.9H8.3A8.3 8.3 0 0 1 0 83.6V57.8a8.3 8.3 0 0 1 8.3-8.3h126.4c4.6 0 8.3 3.7 8.3 8.3v25.8c0 4.6-3.7 8.3-8.3 8.3" fill="#DA723D" /><path d="M12.3 54.5a7 7 0 0 0-3.7 1A5 5 0 0 0 6 60v21.4c0 3 2.9 5.5 6.4 5.5h118.4c3.5 0 6.4-2.5 6.4-5.5V60c0-3-2.9-5.5-6.4-5.5zm118.4 35.2H12.3c-5 0-9.2-3.7-9.2-8.3V60c0-2.8 1.5-5.4 4-7q2.4-1.2 5.2-1.3h118.4c5 0 9.2 3.7 9.2 8.3v21.4c0 4.6-4.1 8.3-9.2 8.3" fill="#2D201E" /><path d="M42.1 34q.3-.8.2-1.5-.2-.8-.7-1.5-.6-.7-1.3-1a3 3 0 0 0-3 .4q-.5.5-.8 1.2t-.2 1.5.7 1.5 1.3 1 1.5.2 1.4-.6q.6-.4.9-1.2m-2.2 4.5a5 5 0 0 1-5.3-2 5 5 0 0 1-.8-5.7q.7-1.4 2-2.4t2.9-1.4a5 5 0 0 1 5.3 2.1 5 5 0 0 1 .7 5.6q-.6 1.5-2 2.5-1.3 1.1-2.8 1.3m10.8-15.3q-.6-.1-1.5.2l-1.5.7L49 27l1.5-.7q1-.4 1.1-1 .3-.6 0-1.2t-1-1m.7 5.2-1.5.7 1.2 2.6-2.8 1.3-4.4-9.9 4.5-2q1.5-.6 2.5-.6 1.2 0 2.1.6.8.6 1.4 1.7.4 1 .3 2.1 0 1-.8 1.9l3.5 2.1-3 1.4zm4.5-9.9 3-.7 2.6 10.5-3 .7zm14.1 3 2.6-.2.4 4.5-2 1.2q-1.2.5-2.4.5-1.8.2-3.1-.5a5 5 0 0 1-3.3-4.6q0-1.7.6-3t2-2.1q1.2-.9 3-1 1.6 0 2.7.3 1.3.4 2.1 1.3l-1.8 2q-1.2-1.2-2.7-1a3 3 0 0 0-2.1 1 3 3 0 0 0-.7 2.2q0 .9.5 1.6t1.2 1 1.6.3q.7 0 1.6-.5zm5.6-5 3 .3-1 10.8-3-.3zM92 19.8l-2.8 10.4-2.5-.7-3-6.8-1.6 5.6-2.8-.8L82.2 17l2.4.6 3 6.9 1.6-5.6zm6.2 10.4.6-3.6-3 2.3zm-.3 2.4-4-2.2-1.7 1.4-2.7-1.6 9.5-7 2.6 1.5-1.3 11.8-2.7-1.6zm9.8-3.6 2.3 2-5.7 6.2 3.8 3.4-1.6 1.8-6-5.5z" fill="#CD4132" /><path d="M25.8 74.4q.8-.7 1.2-1.6.5-1 .5-2.5 0-1.4-.5-2.4t-1.2-1.7-1.7-.5-1.7.5-1.2 1.7-.4 2.4.4 2.5 1.2 1.6 1.7.6 1.7-.6m-6 4.4q-2-1.2-3-3.5-1.2-2.2-1.1-5t1-5a9 9 0 0 1 3-3.5 8 8 0 0 1 4.4-1.2q2.4 0 4.3 1.2 2 1.3 3 3.5 1.2 2.3 1.1 5t-1 5a9 9 0 0 1-3 3.5A8 8 0 0 1 24 80q-2.4 0-4.3-1.2m23.1-12.4q-.6-.6-1.5-.5h-1.9v4.3h1.9q.9 0 1.5-.6t.5-1.6q0-1-.5-1.6m-2 8.5h-1.4v4.7h-5V61h7.2q2.1 0 3.6.9t2.3 2.4a8 8 0 0 1 .9 3.7q0 2-.7 3.5-.8 1.5-2.1 2.4l3.1 5.7h-5.4zM50.3 61h5v18.6h-5zm17.3 8.8H72v7.9q-1.4 1-3 1.7-1.8.6-3.5.6-2.4 0-4.3-1.2-2-1.2-3-3.5-1-2.1-1-5 0-2.8 1-5a8 8 0 0 1 7.4-4.7q2.2 0 4 1 1.6.8 2.8 2.6l-3.2 3.5q-1.4-2-3.3-2-1.7 0-2.7 1.2-1 1.3-1 3.4t1 3.4 2.6 1.3a4 4 0 0 0 1.8-.5zm6.6-8.8h5v18.6h-5zm22.2 0v18.6h-4.2l-5.7-8.4v8.4h-4.9V61h4.2l5.6 8.5V61zm11.2 10.9-1.5-4.7-1.4 4.7zm1.4 4.5h-5.7l-1 3.2h-5.1l6.5-18.6h5l6.5 18.6H110zm7-15.4h5v13.7h6.8v5H116z" fill="#2D201E" /><path d="m35.6 96.6 1.9 5.6h5.9l-4.8 3.5 1.8 5.6-4.8-3.5-4.7 3.5 1.8-5.6-4.8-3.5h6zm71.7 0 1.8 5.6h5.9l-4.8 3.5 1.8 5.6-4.7-3.5-4.8 3.5 1.8-5.6-4.8-3.5h6zm-35.8 14.8 1.8 5.6h5.9l-4.8 3.5 1.8 5.6-4.7-3.5-4.8 3.5 1.8-5.6-4.8-3.5h6z" fill="#CD4132" /></svg>

        </>
    )
}

export const LegalChargeSvg = withSVGWrapper(LegalCharge)