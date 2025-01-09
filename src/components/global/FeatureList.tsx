import inputFieldImg from "../../assets/home/icons/input-field.svg";
import buttonImg from "../../assets/home/icons/button.svg";
import dropdownImg from "../../assets/home/icons/dropdown.svg";
import cardImg from "../../assets/home/icons/card.svg";
import breadcrumbImg from "../../assets/home/icons/breadcrumb.svg";
import tabImg from "../../assets/home/icons/tab.svg";
import { useAuth } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

type PropTypes = {
  setSelectedFeature: React.Dispatch<React.SetStateAction<string | null>>;
};

interface Feature {
  value: string;
}

type FeatureListTypes = {
  name: string;
  value: string;
  img: string;
  isAvailable: boolean;
}[];

const featureList: FeatureListTypes = [
  {
    name: "Input Fields",
    value: "input_fields",
    img: inputFieldImg,
    isAvailable: true,
  },
  {
    name: "Buttons",
    value: "buttons",
    img: buttonImg,
    isAvailable: false,
  },
  {
    name: "Dropdowns",
    value: "dropdowns",
    img: dropdownImg,
    isAvailable: false,
  },
  {
    name: "Cards",
    value: "cards",
    img: cardImg,
    isAvailable: false,
  },
  {
    name: "Breadcrumbs",
    value: "breadcrumbs",
    img: breadcrumbImg,
    isAvailable: false,
  },
  {
    name: "Tabs",
    value: "tabs",
    img: tabImg,
    isAvailable: false,
  },
];

const FeatureList = ({ setSelectedFeature }: PropTypes): React.ReactElement => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleFeatureClick = (feature: Feature) => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      webflow.notify({
        type: "Info",
        message: "Please login first to select a feature",
      });
      return;
    } else {
      setSelectedFeature(feature.value);
    }
  };

  return (
    <section className="grid w-full grid-cols-4 gap-4 p-4">
      {featureList.map((feature) => (
        <button
          className={`rounded-2xl min-h-[200px] p-4 relative flex items-center text-text-1 justify-center ${
            feature.isAvailable
              ? "bg-background-3 hover:bg-background-5"
              : "bg-transparent border border-border-1 cursor-not-allowed"
          }`}
          key={feature.value}
          onClick={() => handleFeatureClick(feature)}
          disabled={!feature.isAvailable}
        >
          {!feature.isAvailable && (
            <span className="absolute px-2 py-1 rounded-full top-2 right-2 bg-background-4 text-text-1 text-small">
              Upcoming
            </span>
          )}

          <img
            src={feature.img}
            alt=""
            className={feature.isAvailable ? "opacity-100" : "opacity-40"}
          />
          <span
            className={`absolute flex items-center justify-between w-full px-4 bottom-4 text-large ${
              feature.isAvailable ? "opacity-100" : "opacity-40"
            }`}
          >
            <span>{feature.name}</span>
            <svg
              className={!feature.isAvailable ? "opacity-40" : "opacity-100"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.29287 8.00004L5.64642 4.35359L6.35353 3.64648L10.7071 8.00004L6.35353 12.3536L5.64642 11.6465L9.29287 8.00004Z"
                fill={feature.isAvailable ? "white" : "#F5F5F5"}
              />
            </svg>
          </span>
        </button>
      ))}
    </section>
  );
};

export default FeatureList;
