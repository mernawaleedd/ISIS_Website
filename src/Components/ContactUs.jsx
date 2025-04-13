import Description from "./Description";
import InputField from "./InputField.jsx";
import Button from "./MainButton";
const ContactForm = () => {
    return (
      <div className="container mx-auto p-6">
   <Description title="Contact" description="   We Prioritize Responding To Your Inquiries Promptly To Ensure You
          Receive The Assistance You Need In A Timely Manner."/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <InputField label="First Name" required placeholder="Enter your first name" />
          <InputField label="Last Name" required placeholder="Enter your last name" />
          <InputField label="Email address" required type="email" placeholder="Enter your email" />
          <InputField label="Phone number" required type="tel" placeholder="Enter your phone number" />
        </div>
        <InputField label="Your Message" required placeholder="Write your message" />
        <div className="flex justify-center mt-4">
          <Button label="Send" />
        </div>
      </div>
    );
  };
  
  export default ContactForm;