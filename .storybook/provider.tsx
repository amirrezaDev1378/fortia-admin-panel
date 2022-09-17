import React, {useContext} from 'react';
import store from "../src/redux/store";
import defaultTheme from "@/styles/themes/defaultTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../src/config/emotionCache";
import "../src/styles/bootstrap.css";
import "../src/styles/globals.css";
import {ServerContext} from "@/config/server/server"

const clientSideEmotionCache = createEmotionCache();

const StoryBookProvider = (props) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps, children} = props;
    const Config = useContext(ServerContext);
    return (
        <div>
            <ServerContext.Provider value={Config}>
                <Provider store={store}>
                    <ThemeProvider theme={defaultTheme}>
                        <CacheProvider value={emotionCache}>
                            {
                                children.map((child) => {
                                    return typeof child === 'object' ? child : null;
                                })
                            }
                            <CssBaseline/>
                        </CacheProvider>
                    </ThemeProvider>
                </Provider>
            </ServerContext.Provider>

        </div>
    );
};

export default StoryBookProvider;
