import React from "react";
import EmailListBox from "./EmailListBox";
import PropTypes from "prop-types";
import EditEmailList from "./EditEmailList";

const EmailList = ({ emails }) =>
  <div className="emailList">
    <EmailListBox label="Notify Emails" options={emails} />
    <EditEmailList />
  </div>;

EmailList.propTypes = {
  emails: PropTypes.array.isRequired
};

export default EmailList;
