import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

interface Props {
    children: ReactNode;
}
interface ContextProps {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: ContextProps = {
    darkMode: true,
    setDarkMode: () => {},
};

export const ModeState = createContext<ContextProps>(defaultValue);

const GlobalState = ({ children }: Props) => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ModeState.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ModeState.Provider>
    );
};

export default GlobalState;