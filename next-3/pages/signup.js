import SecondLayout from "@/Components/secondLayout";
import React from "react";

const signup = () => {
  return <div className="text-5xl">signup page .............</div>;
};

signup.getLayout = function getLayout(page) {
  return (
    <>
      <SecondLayout>{page}</SecondLayout>
    </>
  );
};
export default signup;
