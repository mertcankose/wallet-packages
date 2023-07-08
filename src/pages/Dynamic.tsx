import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";
import { DYNAMIC_ENVIRONMENT_ID } from "../utils";

const Dynamic = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-screen">
      <DynamicContextProvider
        settings={{
          environmentId: DYNAMIC_ENVIRONMENT_ID,
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
};

export default Dynamic;
