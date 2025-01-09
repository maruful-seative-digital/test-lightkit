import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../components/global/AppHeader";
import { useSharedState } from "../providers/SharedStateProvider";

const MainLayout: React.FC = () => {
  const { selectedFeature, setSelectedFeature } = useSharedState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    setSelectedFeature(null);
    navigate("/");
  };

  return (
    <main className="text-white font-inter">
      {/* Navbar */}
      <AppHeader>
        {selectedFeature || location.pathname !== "/" ? (
          <div className="flex items-center text-text-1">
            <button
              onClick={handleBack}
              className={`${
                selectedFeature && "border-r"
              } flex items-center pr-2 text-text-3 text-small border-border-2`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0606 12.0001L14.0303 8.03039L12.9696 6.96973L7.93928 12.0001L12.9696 17.0304L14.0303 15.9697L10.0606 12.0001Z"
                  fill="#A3A3A3"
                />
              </svg>
              <span>Back</span>
            </button>
            <h2 className="ml-2 font-semibold capitalize text-large">
              {selectedFeature && selectedFeature.split("_").join(" ")}
            </h2>
          </div>
        ) : (
          <div></div>
        )}
      </AppHeader>

      {/* Content */}
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
