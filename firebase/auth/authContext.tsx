"use client"
import React, {ReactElement, ReactNode} from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import app from '@/firebase/config';

const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div className="w-screen h-screen">Loading...</div> : children}
        </AuthContext.Provider>
    );
};