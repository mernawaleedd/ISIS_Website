import Description from "./Description";
import InputField from "./InputField.jsx";
import Button from "./MainButton";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Description
        title="Contact"
        description="We Prioritize Responding To Your Inquiries Promptly To Ensure You Receive The Assistance You Need In A Timely Manner."
      />

      {/* Grid for First Name - Last Name - Email - Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <InputField
          label="First Name"
          required
          placeholder="Enter your first name"
          className="h-14"
        />
        <InputField
          label="Last Name"
          required
          placeholder="Enter your last name"
          className="h-14"
        />
        <InputField
          label="Email address"
          required
          type="email"
          placeholder="Enter your email"
          className="h-14"
        />
        <InputField
          label="Phone number"
          required
          type="tel"
          placeholder="Enter your phone number"
          className="h-14"
        />
      </div>

      {/* Full width for message */}
      <div className="mt-6">
        <InputField
          label="Your Message"
          required
          placeholder="Write your message"
          className="h-32"
        />
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <Button label="Send" />
      </div>
    </div>
  );
};

export default ContactForm;
