import React, { useCallback } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import ErrorPage from "./error-page";
import Main from "./routes/main/main";


export default function Router() {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Main />,
                errorElement: <ErrorPage />
            }
        ],
        {
            basename: "/",
        }
    );

    return <RouterProvider router={router} />
}


