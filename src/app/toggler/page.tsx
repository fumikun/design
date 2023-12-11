import styles from "./broadcast.module.css"
import { TogglerSample } from "@/components/toggler/togglers";
import { PreviwBox, CodeBox } from "@/components/layout/preview";
import fs from "fs";
const BroadCastPage = () => {
    const code = fs.readFileSync("./src/components/toggler/toggle.tsx", "utf-8");
    return (
        <>
            <h1 className={styles.h1}>Toggler</h1>
            <div className="mt-3 w-full">
                <PreviwBox className="from-cyan-300 to-blue-500 flex-none">
                    <TogglerSample />
                </PreviwBox>
                <CodeBox code={code} className="mt-6" fileName="toggle.tsx" />
            </div>
        </>
    )
}
export default BroadCastPage;