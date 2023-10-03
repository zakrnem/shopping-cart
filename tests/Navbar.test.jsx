import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/Navbar/Navbar";

it("Displays correct cart quantity.", () => {
    render(<BrowserRouter><Navbar cartQty={3} /></BrowserRouter>)
    screen.getByText('3')
})