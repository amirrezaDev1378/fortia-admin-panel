import React from 'react';
import store from "../src/redux/store";
import defaultTheme from "../src/styles/themes/defaultTheme";
import {CssBaseline, ThemeProvider } from "@mui/material";
import {Provider} from "react-redux";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../src/config/emotionCache";
import "../src/styles/bootstrap.css";
import "../src/styles/globals.css";
const clientSideEmotionCache = createEmotionCache();
const StoryBookProvider = (props) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps, children} = props;
    return (
        <div>
            <Provider store={store}>
                <ThemeProvider theme={defaultTheme}>
                    <CacheProvider value={emotionCache}>
                        {
                            children.map((child) => {
                                return typeof child === 'object' ? child : null;
                            })
                        }
                        <CssBaseline />
                    </CacheProvider>
                </ThemeProvider>
            </Provider>
        </div>
    );
};

export default StoryBookProvider;
