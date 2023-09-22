import React,{ createContext,useContext,useEffect,useRef,useState } from 'react';
import useSkipFirstRender from '../SkipRender/useSkipFirstRender';
import useQueryData from '../queryData/useQueryData';
import { useAuth } from '../auth/useAuth';
import useSetData from '../useSetData/useSetData';

export const ShoppingCart = createContext();

export const useCartContext = () => {
    return useContext(ShoppingCart);
};

export const ShoppingCartProvider = ({ children }) => {
    const type = 'shopping Cart';
    const ls = window.localStorage;
    const { user } = useAuth();
    const { sentDataById } = useSetData();
    const { gettingQueryData,queryData } = useQueryData(type,user?.uid);
    const localStorageList = useRef();
    const [ count,setCount ] = useState(0);
    const [ products,setProducts ] = useState([]);

    useEffect(() => {
        if (
            ls.getItem(`user${user?.uid}`) !== null || undefined &&
            ls.getItem(`user${user?.uid}`)?.length >= 0
        ) {
            localStorageList.current = JSON.parse(ls.getItem(`user${user.uid}`));
        }
        if (
            ls.getItem(`user${user?.uid}`) === null || undefined
            || products?.length >= 0
        ) {
            ls.setItem(`user${user?.uid}`,JSON.stringify(products));
        }
        if (products?.length >= 0) {
            setCount(() => products?.reduce((quantity,item) => item.quantity + quantity,0));
        }
    },[ products ]);

    useSkipFirstRender(() => {
        setProducts(() => {
            if (queryData?.cart === undefined) {
                return [];
            } else {
                return queryData?.cart;
            }
        });
        // setProducts(localStorageList.current);
    },gettingQueryData);

    useSkipFirstRender(() => {
        sentDataById(type,user.uid,{ cart: products });
    },products);


    const resetCart = () => {
        setProducts([]);
    };

    const addToCart = (id,price) => {
        setProducts(curr => {
            if (!curr.find(item => item.id === id)) {
                return [ ...curr,{ id: id,quantity: 1,price: price * 1,checked: false } ];
            }
            else {
                return curr.map(item => {
                    if (item.id === id) {
                        return { ...item,quantity: item.quantity + 1,price: price * (item.quantity + 1) };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    };

    const deleteFromCart = (id) => {
        setProducts(curr => {
            return curr.filter(item => item.id !== id);
        });
    };

    const removeFromCart = (id,price) => {
        setProducts(curr => {
            if (products?.find(item => item?.id === id).quantity <= 1) {
                return [ ...curr ];
            }
            else {
                return curr.map(item => {
                    if (item.id === id) {
                        return { ...item,quantity: item.quantity - 1,price: price * (item.quantity - 1) };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    };

    const values = {
        addToCart,
        removeFromCart,
        deleteFromCart,
        count,
        products,
        resetCart
    };

    return <ShoppingCart.Provider value={values}>{children}</ShoppingCart.Provider>;
};
