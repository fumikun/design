import styles from "./broadcast.module.css"
import { BroadcastSelector } from "@/components/broadcast/selector";
const BroadCastPage = () => {
    return (
        <>
            <h1 className={styles.h1}>Toggler Samples</h1>
            <div className="mt-3">
                <BroadcastSelector />
            </div>
        </>
    )
}
export default BroadCastPage;