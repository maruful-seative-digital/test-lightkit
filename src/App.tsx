import ActiveFeature from "./components/global/ActiveFeature";
// import AppHeader from "./components/global/AppHeader";
import FeatureList from "./components/global/FeatureList";
import { useSharedState } from "./providers/SharedStateProvider";

function App() {
  const { selectedFeature, setSelectedFeature } = useSharedState();

  return (
    <>
      {selectedFeature ? (
        <ActiveFeature
          selectedFeature={selectedFeature}
          setSelectedFeature={setSelectedFeature}
        />
      ) : (
        <FeatureList setSelectedFeature={setSelectedFeature} />
      )}
    </>
  );
}

export default App;
