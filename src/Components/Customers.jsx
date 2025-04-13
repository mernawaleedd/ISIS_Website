import customer1 from "../assets/images/customer1.png";
import customer2 from "../assets/images/customer2.png";
import customer3 from "../assets/images/customer3.png";
import customer4 from "../assets/images/customer4.png";
import customer5 from "../assets/images/customer5.png";
import customer6 from "../assets/images/customer6.png";
import customer7 from "../assets/images/customer7.png";
import customer8 from "../assets/images/customer8.png";
import customer9 from "../assets/images/customer9.png";
import customer10 from "../assets/images/customer10.png";
import customer11 from "../assets/images/customer11.png";
import customer12 from "../assets/images/customer12.png";
import customer13 from "../assets/images/customer13.png";
import customer14 from "../assets/images/customer14.png";
import customer15 from "../assets/images/customer15.png";
import customer16 from "../assets/images/customer16.png";
import customer17 from "../assets/images/customer17.png";
import customer18 from "../assets/images/customer18.png";
import customer19 from "../assets/images/customer19.png";
import customer20 from "../assets/images/customer20.png";
import customer21 from "../assets/images/customer21.png";
import Description from "./Description";
export default function Customers() {
  const customers = [
    customer1, customer2, customer3, customer4, customer5, customer6, customer7,
    customer8, customer9, customer10, customer11, customer12, customer13,
    customer14, customer15, customer16, customer17, customer18, customer19,
    customer20, customer21
  ];

  return (
    <div className="bg-[#F6F6F6] py-16 overflow-hidden">
      <div className="container mx-auto">
      <Description className="mb-16 text-center mx-auto max-w-3xl" title="Long-term partners or one-time customers, depending on the nature of the business relationship. They are essential to a company's success."/>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll mt-16 whitespace-nowrap hover:pause-scroll">
            {customers.map((customer, index) => (
              <img
                key={index}
                src={customer}
                alt={`customer-${index + 1}`}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover hover:animate-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
