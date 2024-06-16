import React from "react";
import SetupUsernameForm from "./SetupUsernameForm";

type Props = {};

const SetupUsername = (props: Props) => {
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
