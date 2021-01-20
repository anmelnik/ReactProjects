import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Home = () => {
  const {loading, notes, fetchNotes} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader/> : <Notes notes={notes} />}
    </Fragment>
  );
};
