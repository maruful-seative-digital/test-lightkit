import InputFields from "../../features/InputFields/InputFields";
import FeatureList from "./FeatureList";

type PropTypes = {
  selectedFeature: string | null;
  setSelectedFeature: React.Dispatch<React.SetStateAction<string | null>>;
};

const ActiveFeature = ({
  selectedFeature,
  setSelectedFeature,
}: PropTypes): React.ReactElement => {
  switch (selectedFeature) {
    case "input_fields":
      return <InputFields />;

    default:
      return <FeatureList setSelectedFeature={setSelectedFeature} />;
  }
};

export default ActiveFeature;
