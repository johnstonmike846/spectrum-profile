'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AppContextType {
    email: string;
    setEmail: (value: string) => void;
    firstName: string;
    setFirstName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    address: string;
    setAddress: (value: string) => void;
    address2: string;
    setAddress2: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    zipcode: string;
    setZipcode: (value: string) => void;
    billingPhone: string;
    setBillingPhone: (value: string) => void;
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;
    filePath: string;
    setFilePath: (value: string) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    signOut: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [email, setEmailState] = useState('');
    const [firstName, setFirstNameState] = useState('');
    const [lastName, setLastNameState] = useState('');
    const [address, setAddressState] = useState('');
    const [address2, setAddress2State] = useState('');
    const [city, setCityState] = useState('');
    const [zipcode, setZipcodeState] = useState('');
    const [billingPhone, setBillingPhoneState] = useState('');
    const [phoneNumber, setPhoneNumberState] = useState('');
    const [filePath, setFilePathState] = useState('');
    const [isLoggedIn, setIsLoggedInState] = useState(false);

    // Load all values from localStorage on mount
    useEffect(() => {
        const get = (key: string, fallback = '') => localStorage.getItem(key) || fallback;

        setEmailState(get('email'));
        setFirstNameState(get('firstName'));
        setLastNameState(get('lastName'));
        setAddressState(get('address'));
        setAddress2State(get('address2'));
        setCityState(get('city'));
        setZipcodeState(get('zipcode'));
        setBillingPhoneState(get('billingPhone'));
        setPhoneNumberState(get('phoneNumber'));
        setFilePathState(get('filePath') || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
        setIsLoggedInState(get('isLoggedIn') === 'true');
    }, []);

    // Shared setter helper
    const setField = (key: string, value: string, setter: (v: string) => void) => {
        setter(value);
        localStorage.setItem(key, value);
    };

    // Setters with persistence
    const setEmail = (v: string) => setField('email', v, setEmailState);
    const setFirstName = (v: string) => setField('firstName', v, setFirstNameState);
    const setLastName = (v: string) => setField('lastName', v, setLastNameState);
    const setAddress = (v: string) => setField('address', v, setAddressState);
    const setAddress2 = (v: string) => setField('address2', v, setAddress2State);
    const setCity = (v: string) => setField('city', v, setCityState);
    const setZipcode = (v: string) => setField('zipcode', v, setZipcodeState);
    const setBillingPhone = (v: string) => setField('billingPhone', v, setBillingPhoneState);
    const setPhoneNumber = (v: string) => setField('phoneNumber', v, setPhoneNumberState);
    const setFilePath = (v: string) => setField('filePath', v, setFilePathState);

    const setIsLoggedIn = (value: boolean) => {
        setIsLoggedInState(value);
        localStorage.setItem('isLoggedIn', String(value));
    };

    // Clear session
    const signOut = () => {
        setEmailState('');
        setFirstNameState('');
        setLastNameState('');
        setAddressState('');
        setAddress2State('');
        setCityState('');
        setZipcodeState('');
        setBillingPhoneState('');
        setPhoneNumberState('');
        setFilePathState('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
        setIsLoggedInState(false);
        localStorage.clear();
    };

    return (
        <AppContext.Provider
            value={{
                email,
                setEmail,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                address,
                setAddress,
                address2,
                setAddress2,
                city,
                setCity,
                zipcode,
                setZipcode,
                billingPhone,
                setBillingPhone,
                phoneNumber,
                setPhoneNumber,
                filePath,
                setFilePath,
                isLoggedIn,
                setIsLoggedIn,
                signOut,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used inside AppProvider');
    return context;
};
