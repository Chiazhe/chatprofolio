import React from "react";
import SetupUsernameForm from "./SetupUsernameForm";

const SetupUsername = () => {
  return (
    <div>
      <h3 className="text-lg">
        Please setup your unique username to access our features.
      </h3>
      <SetupUsernameForm />
    </div>
  );
};

export default SetupUsername;
