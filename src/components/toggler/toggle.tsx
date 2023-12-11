import { Switch } from "@headlessui/react";
type Props = {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    name: string;
    className?: string;
}
const Toggle = ({ enabled, setEnabled, name, className }: Props) => {
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-myconsole-accent' : 'bg-slate-200 border'}
          relative inline-flex h-[25px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 ` + className}
        >
            <span className="sr-only">{name}</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}
export default Toggle;