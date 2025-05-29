// Components/CheckList.js
import Check from "../assets/images/Check.png";

export default function CheckList({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 px-5 py-2">
                    <img
                        className="w-6 h-6 object-contain shrink-0 mt-1"
                        src={Check}
                        alt="check"
                    />
                    <h4 className="text-lg font-semibold text-[#0E2F40]">
                        {item}
                    </h4>
                </div>
            ))}
        </>
    );
}
