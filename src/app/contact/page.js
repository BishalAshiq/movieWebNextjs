import React from "react";
import ContactCss from "./Contact.module.css";

const Page = () => {
  return (
    <div className={ContactCss.contact_div}>
      <form>
        <div className={ContactCss.single_inputs}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={ContactCss.single_inputs}>
          <label htmlFor="email1">Email:</label>
          <input type="email" id="email1" name="email1" required />
        </div>
        <div className={ContactCss.single_inputs}>
          <label htmlFor="email2">Confirm Email:</label>
          <input type="email" id="email2" name="email2" required />
        </div>
        <div className={ContactCss.single_inputs}>
          <label htmlFor="password1">Password:</label>
          <input type="password" id="password1" name="password1" required />
        </div>
        <div className={ContactCss.single_inputs}>
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" id="password2" name="password2" required />
        </div>
        <button className={ContactCss.Submit_button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Page;
