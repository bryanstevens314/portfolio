import React, { useCallback, useEffect } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import ErrorPage from "./error-page";
import Main from "./routes/main";
import Apps from "./routes/apps";
import Donate from "./routes/donate";
import About from "./routes/about";
import Supporters from "./routes/supporters";


export default function Router() {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Main />,
                errorElement: <ErrorPage />
            },
            {
                path: "/apps",
                element: <Apps />,
                errorElement: <ErrorPage />
            },
            {
                path: "/donate",
                element: <Donate />,
                errorElement: <ErrorPage />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <ErrorPage />
            },
            {
                path: "/supporters",
                element: <Supporters />,
                errorElement: <ErrorPage />
            },
        ],
        {
            basename: "/",
        }
    );

    return <RouterProvider router={router} />
}


