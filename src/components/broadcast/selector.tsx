"use client";
import Toggle from "../utils/toggle";
import { useState } from "react";

export const BroadcastSelector = () => {
    const [enabled, setEnabled] = useState(false);
    const [enabled2, setEnabled2] = useState(false);
    const [enabled3, setEnabled3] = useState(false);
    return (
        <>
            <div className="flex gap-3">
                <div className="rounded-lg p-3 bg-white shadow flex gap-3 items-center">
                    <BroadcastSelectorToggleButton enabled={enabled} setEnabled={setEnabled} name="Toggler" />
                </div>
                <div className="rounded-lg p-3 bg-white shadow flex gap-3 items-center">
                    <BroadcastSelectorToggleButton enabled={enabled2} setEnabled={setEnabled2} name="Toggler" />
                </div>
                <div className="rounded-lg p-3 bg-white shadow flex gap-3 items-center">
                    <BroadcastSelectorToggleButton enabled={enabled3} setEnabled={setEnabled3} name="Toggler" />
                </div>
            </div>
        </>
    )
}

type BroadcastSelectorToggleButtonProps = {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    className?: string;
    name: string;
}

export const BroadcastSelectorToggleButton = ({ enabled, name, setEnabled, className }: BroadcastSelectorToggleButtonProps) => {
    return (
        <div className={"flex items-center justify-between text-xl" + " " + className}>
            {name}
            <Toggle enabled={enabled} setEnabled={setEnabled} name="hoge" className="ms-3" />
        </div>
    )
}