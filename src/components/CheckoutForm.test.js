import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Checkout Form")
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
const fNameInput = screen.getByLabelText(/first name/i);
userEvent.type(fNameInput, "Gavin");
const lNameInput = screen.getByLabelText(/last name/i);
userEvent.type(lNameInput, "Rilee");
const addressInput = screen.getByLabelText(/address/i);
userEvent.type(addressInput, "2106 Zinzer Rd");
const cityInput = screen.getByLabelText(/city/i);
userEvent.type(cityInput, "Hampton")
const stateInput = screen.getByLabelText(/state/i);
userEvent.type(stateInput, "VA");
const zipInput = screen.getByLabelText(/zip/i);
userEvent.type(zipInput, "23663");
const buttonClick = screen.getByRole("button");
userEvent.click(buttonClick);

const successMessage = await screen.getByTestId("successMessage")
expect(successMessage).toBeInTheDocument();
;
});
