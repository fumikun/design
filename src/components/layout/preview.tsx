"use client";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
type PreviwBoxProps = {
    children: React.ReactNode;
    className?: string;
}

type CodeBoxProps = {
    code: string
    fileName?: string;
    className?: string;
}
export const PreviwBox = ({ children, className }: PreviwBoxProps) => {
    return (
        <>
            <div className={"w-full h-48 flex justify-center items-center bg-gradient-to-br rounded-xl" + " " + className}>
                {children}
            </div>
        </>
    )
}

export const CodeBox = ({ code, fileName, className }: CodeBoxProps) => {
    return (
        <>
            <div className={className}>
                {/* <div className='p-1 mt-1 bg-slate-200'>{fileName}</div> */}
                <div className={"rounded-xl bg-slate-900 p-3" + " " + className}>
                    <SyntaxHighlighter language="typescript" style={atomOneDark} customStyle={{
                        backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
                        fontSize: "14px",
                        width: "100%",
                        overflowX: "auto",
                        overflowY: "scroll",
                    }}>
                        {code}
                    </ SyntaxHighlighter>
                </div >
            </div>
        </>
    )
}